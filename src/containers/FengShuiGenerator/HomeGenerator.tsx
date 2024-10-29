// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Header from "../../components/organism/Header";
// import { useSelector } from "react-redux";
// import { selectUserInfo, selectIsLoggedIn } from "../../features/auth/auth.selectors";

// const FengShuiForm: React.FC = () => {
//   const [year, setYear] = useState<number | "">("");
//   const [gender, setGender] = useState<string>("");
//   const [result, setResult] = useState<any>(null);
//   const [error, setError] = useState<string>("");
//   const [hasExistingData, setHasExistingData] = useState<boolean>(false);

//   // Lấy trạng thái đăng nhập và thông tin người dùng từ Redux
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const userInfo = useSelector(selectUserInfo);

//   // Kiểm tra dữ liệu Feng Shui đã có khi component mount
//   useEffect(() => {
//     const fetchExistingData = async () => {
//       if (isLoggedIn && userInfo) {
//         try {
//           const response = await axios.post("http://localhost:8080/api/v1/fengshui-save-data/get", {
//             userId: userInfo.sub,
//           });
//           setResult(response.data);
//           setHasExistingData(true); // Đánh dấu rằng đã có dữ liệu
//         } catch (error) {
//           console.error("No existing data found.");
//         }
//       }
//     };

//     fetchExistingData();
//   }, [isLoggedIn, userInfo]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setResult(null);

//     if (!year || isNaN(Number(year))) {
//       setError("Invalid input");
//       return;
//     }

//     if (year < 1900) {
//       setError("Year of birth must be greater than 1900");
//       return;
//     }

//     try {
//       const payload = {
//         ...(isLoggedIn && userInfo && { userId: userInfo.sub }),
//         year: Number(year),
//         gender: gender,
//         result: result
//       };

//       const response = await axios.post(
//         isLoggedIn && hasExistingData ? "http://localhost:8080/api/v1/fengshui-save-data/save" : "http://localhost:8080/api/fengshui/calculate",
//         payload
//       );

//       setResult(response.data);

//       if (isLoggedIn && !hasExistingData) setHasExistingData(true); // Đánh dấu đã lưu dữ liệu lần đầu tiên
//     } catch (err) {
//       console.log(err);
//       setError("Error when calling API");
//     }
//   };

//   const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     if (value === "") {
//       setYear("");
//       return;
//     }

//     const parsedValue = Number(value);
//     if (!isNaN(parsedValue)) {
//       setYear(parsedValue);
//     }
//   };

//   return (
//     <React.Fragment>
//       <Header />

      

//       <div className="about-us-container">
//         <div className="about-us-image">
//           <img
//             src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
//             alt="About Us"
//             className="about-us-img"
//           />
//         </div>
//         <div className="about-us-text">
//           <h1>Consultation</h1>
//         </div>
//         <div className="additional-content"></div>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           height: "auto",
//           fontFamily: "Arial, sans-serif",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             maxWidth: "600px",
//             backgroundColor: "#ffffff",
//             padding: "40px",
//             borderRadius: "10px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//             textAlign: "center",
//           }}
//         >
//           <h2 style={{ marginBottom: "30px", color: "#333", fontSize: "24px" }}>
//             Feng Shui Consultation
//           </h2>

//           <form onSubmit={handleSubmit}>
//             <div style={{ marginBottom: "20px" }}>
//               <label
//                 style={{
//                   display: "block",
//                   marginBottom: "10px",
//                   color: "#555",
//                 }}
//               >
//                 Please Input Your Year of Birth:
//               </label>
//               <input
//                 type="text"
//                 value={year}
//                 onChange={handleYearChange}
//                 placeholder="Year of Birth"
//                 style={{
//                   padding: "10px",
//                   width: "96%",
//                   borderRadius: "5px",
//                   border: "1px solid #ddd",
//                   textAlign: "center",
//                   fontSize: "16px",
//                 }}
//                 required
//               />
//             </div>

//             <div style={{ marginBottom: "20px" }}>
//               <label
//                 style={{
//                   display: "block",
//                   marginBottom: "10px",
//                   color: "#555",
//                 }}
//               >
//                 Please Input Your Gender:
//               </label>
//               <select
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//                 style={{
//                   padding: "10px",
//                   width: "100%",
//                   borderRadius: "5px",
//                   border: "1px solid #ddd",
//                   textAlign: "center",
//                   fontSize: "16px",
//                 }}
//                 required
//               >
//                 <option value="">Select Your Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//             </div>
            
//             <button
//               type="submit"
//               style={{
//                 padding: "12px 30px",
//                 backgroundColor: "#007bff",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 fontSize: "16px",
//                 width: "100%",
//               }}
//             >
//               {isLoggedIn && hasExistingData ? "Re-generate" : "Submit"}
//             </button>
//           </form>
//           {!isLoggedIn && (
//         <div style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
//           Please log in to save your Feng Shui result.
//         </div>
//       )}
//           {error && (
//             <div
//               style={{
//                 color: "red",
//                 marginTop: "20px",
//                 padding: "10px",
//                 border: "1px solid red",
//                 borderRadius: "5px",
//                 backgroundColor: "#ffe6e6",
//               }}
//             >
//               {error}
//             </div>
//           )}

//           {result && (
//             <div
//               style={{
//                 marginTop: "20px",
//                 padding: "10px",
//                 border: "1px solid #28a745",
//                 borderRadius: "5px",
//                 backgroundColor: "#e6ffe6",
//               }}
//             >
//               <h3 style={{ color: "#28a745" }}>Your Destiny Result</h3>
//               <p>Heavenly Stem: {result.heavenlyStem}</p>
//               <p>Earthly Branch: {result.earthlyBranch}</p>
//               <p>Element: {result.element}</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {result && (
//         <div
//           style={{
//             width: "96.2vw",
//             padding: "20px",
//             backgroundColor: "#007bff",
//             color: "white",
//             marginTop: "30px",
//             textAlign: "center",
//             fontSize: "18px",
//           }}
//         >
//           <h3>Fish Recommendation</h3>
//           <p>{result.fishRecommendation}</p>

//           <h3>Pond Direction</h3>
//           <p>{result.tankDirection}</p>
//         </div>
//       )}
//     </React.Fragment>
//   );
// };

// export default FengShuiForm;




import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/organism/Header";
import { Box, Typography } from "@mui/joy";
import KoiFishList from "../../components/organism/KoiFishList";
import { useDispatch, useSelector } from "react-redux";
import { selectKoiFishList } from "../../features/fengshui/fengshui.selectors";
import { requestGetKoiFish } from "../../features/fengshui/fengshui.actions";
import { selectAdvertisementList } from "../../features/advertisement/advertisement.selectors";
import { requestGetListAdvertisement } from "../../features/advertisement/advertisement.actions";
import AdvertisementCard from "../../components/organism/AdvertisementCard";


const FengShuiForm: React.FC = () => {
  const [year, setYear] = useState<number | "">("");
  const [gender, setGender] = useState<string>("");

  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");



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
      const response = await axios.post(
        "http://localhost:8080/api/fengshui/calculate",
        {
          year: Number(year),
          gender: gender,
        }
      );

      setResult(response.data);
    } catch (err) {
      setError("Error when calling API");
    }

  };

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
      <Header />
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
    </React.Fragment>
  );
};

export default FengShuiForm;

