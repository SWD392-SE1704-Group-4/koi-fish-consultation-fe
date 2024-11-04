import React, { useState } from "react";
import { Box, Button, Chip, Grid, Typography } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserInfo } from "../../features/auth/auth.selectors";
import { GetBasicCalcutation, SaveConsultationResult } from "../../services/calculation";
import { enqueueSnackbar } from "notistack";
import { selectFenghsuiElementList, selectFengshuiDirectionList, selectKoiFishList } from "../../features/fengshui/fengshui.selectors";
import { requestGetFengshuiDirectionList, requestGetFengshuiElement, requestGetKoiFish, requestGetKoiFishByElementName } from "../../features/fengshui/fengshui.actions";
import { setFengshuiDirectionListAction, setFengshuiElementListAction, setKoiFishListAction } from "../../features/fengshui";
import KoiFishList from "../../components/organism/KoiFishList";
import { fengShuiElementLogos } from "../KoiFishDetail";
import { selectAdvertisementList } from "../../features/advertisement/advertisement.selectors";
import { GetListAdvertisementByElementOrDirection } from "../../services/advertisement";
import AdvertisementList from "../Dashboard/ManageAdvertisement/AdvertisementList";
import AdvertisementCard from "../../components/organism/AdvertisementCard";
import { setFengshuiDirectionList } from "../../features/fengshui/fengshui.reducers";

const buttonStyles = {
  mt: 2,
  backgroundColor: "#ed2d4d"
};


const FengShuiForm: React.FC = () => {
  const dispatch = useDispatch();

  const isLoginedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUserInfo);

  const [year, setYear] = useState<number | "">("");
  const [gender, setGender] = useState<string>("");

  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const fengshuiElement = useSelector(selectFenghsuiElementList);
  const fengshuiDirection = useSelector(selectFengshuiDirectionList);

  const koiFishList = useSelector(selectKoiFishList);

  const [koiFishAdsList, setKoiFishAdsList] = useState<any>(null);
  const [fishPondAdsList, setFishPondAdsList] = useState<any>(null);

  React.useEffect(() => {
    const request = {};
    dispatch(requestGetFengshuiElement({ request }))
    dispatch(requestGetFengshuiDirectionList({ request }))

    return () => {
      dispatch(setFengshuiDirectionListAction(null));
      dispatch(setFengshuiElementListAction(null));
    }
  }, [])

  React.useEffect(() => {
    async function load() {
      await getKoiAdsByElement(result);
      await getPondAdsByDirection(result);
    }

    if (result) {
      console.log(result);
      const request = {
        elementName: result?.element,
      }
      dispatch(requestGetKoiFishByElementName({ request }));
      load();
    }
    return () => {
      dispatch(setKoiFishListAction(null));
    }
  }, [result]);

  const getKoiAdsByElement = async (result: any) => {
    try {
      const element = fengshuiElement?.find(f => f?.elementName === result.element)
      const request = {
        elementId: element?.elementId,
        directionId: ""
      }
      const response = await GetListAdvertisementByElementOrDirection(request);
      if (response.data.payload) {
        const koiList = response.data.payload;
        console.log(koiList)
        setKoiFishAdsList(koiList);
      }
    } catch (err) {

    }
  }

  const getPondAdsByDirection = async (result) => {
    // Filter directions based on the element association
    const directions = fengshuiDirection?.filter(f => f?.elementAssociation === result?.element);

    if (directions.length > 0 && result?.element) {
      // Prepare a list of API calls for each directionId
      const requests = directions?.map(async (direction) => {
        const request = {
          elementId: "",
          directionId: direction?.directionId
        };
        // Await the response here and directly access .data
        const response = await GetListAdvertisementByElementOrDirection(request);
        return response.data.payload; // Only return the payload data
      });

      try {
        // Use Promise.all to execute all requests in parallel and wait for all to finish
        const allResults = await Promise.all(requests);

        // Flatten the results from each response and update state
        const combinedAdsList = allResults.flat(); // Combines results into a single array
        setFishPondAdsList(combinedAdsList);
      } catch (error) {
        console.error("Error fetching advertisements:", error);
      }
    } else {
      console.log("No matching directions or elementId found.");
    }
  };


  React.useEffect(() => {
    if (error) {
      enqueueSnackbar({ message: error, variant: "error", autoHideDuration: 2000 })
    }
    setError(null)
  }, [error]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!year || isNaN(Number(year))) {
      setError("Invalid input");
      return;
    }

    if (year < 1900) {
      setError("Year of birth must be greater than 1900");
      return;
    }

    try {
      const response = await GetBasicCalcutation({
        year: Number(year),
        gender: gender,
      })
      setResult(response.data);
    } catch (err) {
      setError("Error when calling API");
    }

  };

  const handleSaveResult = async (e: React.FormEvent) => {
    try {
      if (result) {
        const response = await SaveConsultationResult({ ...result, appUserId: userInfo.sub })
        if (response.data.payload) {
          enqueueSnackbar({ message: "Consultation saved", variant: "success", autoHideDuration: 2000 })
        }
      }
    } catch (err) {
      setError("Error when calling API");
    }
  }

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setYear("");
      return;
    }

    const parsedValue = Number(value);
    if (!isNaN(parsedValue)) {
      setYear(parsedValue);
    }
  };

  return (
    <React.Fragment>
      <div className="about-us-container">
        <div className="about-us-image">
          <img
            src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
            alt="About Us"
            className="about-us-img"
          />
        </div>
        <div className="about-us-text">
          <h1>Consultation</h1>
        </div>
        <div className="additional-content"></div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "30px", color: "#333", fontSize: "24px" }}>
            Feng Shui Consultation
          </h2>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#555",
                }}
              >
                Please Input Your Year of Birth:
              </label>
              <input
                type="text"
                value={year}
                onChange={handleYearChange}
                placeholder="Year of Birth"
                style={{
                  padding: "10px",
                  width: "96%",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                  fontSize: "16px",
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#555",
                }}
              >
                Please Input Your Gender:
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                  fontSize: "16px",
                }}
                required
              >
                <option value="">Select Your Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <button
              type="submit"
              style={{
                padding: "12px 30px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                width: "100%",
              }}
            >
              Submit
            </button>
          </form>

          {error && (

            <div
              style={{
                color: "red",
                marginTop: "20px",
                padding: "10px",
                border: "1px solid red",
                borderRadius: "5px",
                backgroundColor: "#ffe6e6",
              }}
            >
              {error}
            </div>
          )}

          {/* Display result for heavenlyStem, earthlyBranch, and element */}
          {result && (
            <>
              <div
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  border: "1px solid #28a745",
                  borderRadius: "5px",
                  backgroundColor: "#e6ffe6",
                }}
              >
                <h3 style={{ color: "#28a745" }}>Your Destiny Result</h3>
                <p>Heavenly Stem: {result.heavenlyStem}</p>
                <p>Earthly Branch: {result.earthlyBranch}</p>
                <p>Element: {result.element}</p>
              </div>
              {
                (userInfo && isLoginedIn) && (
                  <Button sx={buttonStyles} onClick={handleSaveResult}>Save result</Button>
                )
              }
            </>
          )}

        </div>

      </div>

      {/* Separate section for fishRecommendation and tankDirection */}
      {result && (
        <div
          style={{
            width: "96.2vw",
            padding: "20px",
            backgroundColor: "#007bff",
            color: "white",
            marginTop: "30px",
            textAlign: "center",
            fontSize: "18px",
          }}
        >
          <h3>Fish Recommendation</h3>
          <p>{result.fishRecommendation}</p>

          <h3>Pond Direction</h3>
          <p>{result.tankDirection}</p>
        </div>
      )}
      {/* KOI FISH RECOMMENDATION */}
      {(koiFishList && result) && (
        <div style={{ padding: '0 80px' }}>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Typography fontSize={"24px"} sx={{ display: 'inline-flex', alignItems: 'center', my: 2, gap: 1 }}><b>Koi fish with element:  </b> {result?.element} {fengShuiElementLogos[result?.element]}</Typography>
            <KoiFishList koiFishData={koiFishList} />
          </div>
          <div>
            <Typography fontSize={"24px"} sx={{ display: 'inline-flex', alignItems: 'center', my: 2, gap: 1 }}><b>Koi ads found:</b></Typography>
            <Grid xs={12} container spacing={3}>
              {koiFishAdsList && koiFishAdsList.length > 0 ? (
                koiFishAdsList.map(ad => (
                  <Grid xs={12} sm={6} md={3} lg={3} key={ad.advertisementId}>
                    <AdvertisementCard key={ad.advertisementId} advertisement={ad} />
                  </Grid>
                ))
              ) : (
                <Typography>No advertisements available.</Typography>
              )}
            </Grid>

          </div>
        </div>
      )}
      {/* FISH POND RECOMMENDATION */}
      {(result) && (
        <div style={{ padding: '0 80px' }}>
          <Typography fontSize={"24px"} sx={{ display: 'inline-flex', alignItems: 'center', my: 2, gap: 1 }}><b>Direction associated with:  </b> {result?.element} {fengShuiElementLogos[result?.element]}</Typography>
          <Typography>{fengshuiDirection?.map((f) => { if (f.fengshuiElement.elementName === result.element) return <Chip sx={{ fontSize: '20px', mr: 1 }}>{f.directionName}</Chip> })}</Typography>
          <Grid xs={12} container spacing={3} mt={2}>
            {fishPondAdsList && fishPondAdsList?.length > 0 ? (
              fishPondAdsList?.map(ad => (
                <Grid xs={12} sm={6} md={3} lg={3} key={ad.advertisementId}>
                  <AdvertisementCard key={ad.advertisementId} advertisement={ad} />
                </Grid>
              ))
            ) : (
              <Typography>No advertisements available.</Typography>
            )}
          </Grid>
        </div>
      )




      }

    </React.Fragment>
  );
};

export default FengShuiForm;

