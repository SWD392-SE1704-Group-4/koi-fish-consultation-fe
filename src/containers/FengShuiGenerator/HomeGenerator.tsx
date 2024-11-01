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

// import React, { useState } from "react";
// import axios from "axios";
// import Header from "../../components/organism/Header";

// const FengShuiForm: React.FC = () => {
//   const [year, setYear] = useState<number | "">("");
//   const [gender, setGender] = useState<string>("");
//   const [result, setResult] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setResult("");

//     if (!year || isNaN(Number(year))) {
//       setError("Invalid input");
//       return;
//     }

//     if (year < 1900) {
//       setError("Year of birth must be greater than 1900");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/fengshui/calculate",
//         {
//           year: Number(year),
//           gender: gender,
//         }
//       );

//       setResult(response.data);
//     } catch (err) {
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
//               Submit
//             </button>
//           </form>

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
//               <p>{result}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default FengShuiForm;

// import React, { useState } from "react";
// import axios from "axios"; // Import axios

// const FengShuiForm: React.FC = () => {
//   const [year, setYear] = useState<number | "">("");
//   const [gender, setGender] = useState<string>("");
//   const [result, setResult] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setResult("");

//     if (!year || isNaN(Number(year))) {
//       setError("Invalid input");
//       return;
//     }

//     if (year < 1900) {
//       setError("Year of birth must be greater than 1900");
//       return;
//     }

//     // Gửi request POST đến backend với dữ liệu năm sinh và giới tính
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/api/fengshui/calculate",
//         {
//           year: Number(year),
//           gender: gender,
//         }
//       );

//       // Sau khi nhận kết quả từ backend, bạn có thể hiển thị nó
//       setResult(response.data);
//     } catch (err) {
//       setError("Error when calling API");
//     }
//   };

//   const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;

//     // Nếu input là chuỗi rỗng, thì set lại state thành ""
//     if (value === "") {
//       setYear("");
//       return;
//     }

//     // Chuyển đổi chuỗi input thành số (number)
//     const parsedValue = Number(value);

//     // Kiểm tra nếu giá trị là một số hợp lệ thì gán vào state
//     if (!isNaN(parsedValue)) {
//       setYear(parsedValue);
//     }
//   };

//   return (
//     <React.Fragment>
//       {/* Form của bạn */}
//       <form onSubmit={handleSubmit}>
//         {/* Input năm sinh */}
//         <div>
//           <label>Please Input Your Year of Birth: </label>
//           <input
//             type="text"
//             value={year}
//             onChange={handleYearChange}
//             placeholder="Year of Birth"
//             required
//           />
//         </div>

//         {/* Input giới tính */}
//         <div>
//           <label>Please Input Your Gender: </label>
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             required
//           >
//             <option value="">Your Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>

//         {/* Nút submit */}
//         <button type="submit">Submit</button>
//       </form>

//       {/* Hiển thị kết quả */}
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       {result && <div>{result}</div>}
//     </React.Fragment>
//   );
// };

// export default FengShuiForm;

/////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import Header from "../../components/organism/Header";
// import { Typography } from "@mui/joy";
// import KoiFishList from "../../components/organism/KoiFishList";
// import { useDispatch, useSelector } from "react-redux";
// import { selectHeavenEarth } from "../../features/fengshui/fengshui.selectors";
// import { requestGetHeavenEarth } from "../../features/fengshui/fengshui.actions";

// const FengShuiForm: React.FC = () => {
//   const dispatch = useDispatch();
//   const [year, setYear] = useState<number | "">("");
//   const [gender, setGender] = useState<string>("");
//   const [result, setResult] = useState<string>("");
//   const [error, setError] = useState<string>("");
//   React.useEffect(() => {
//     const request = {};
//     dispatch(requestGetHeavenEarth({ request }));
//   }, []);

//   const apiData = useSelector(selectHeavenEarth);

//   // Tạo các mảng từ dữ liệu API
//   const heavenlyStems = apiData?.map((item: any) => item?.heavenlyStem);
//   const earthlyBranches = apiData?.map((item: any) => item?.earthlyBranch);
//   const fiveElementsCycle = apiData?.map((item: any) => item?.fiveElement);

//   // Hàm tính thiên can và địa chi
//   const calculateHeavenlyStemAndBranch = (birthYear: number) => {
//     const stemIndex = (birthYear - 4) % 10;
//     const branchIndex = (birthYear - 4) % 12;
//     return `${heavenlyStems[stemIndex]} ${earthlyBranches[branchIndex]}`;
//   };

//   // Hàm tính mệnh dựa trên ngũ hành
//   const calculateElement = (birthYear: number) => {
//     const index = (birthYear - 4) % 10;
//     return fiveElementsCycle[index];
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setResult("");

//     if (!year || isNaN(Number(year))) {
//       setError("Invalid input");
//       return;
//     }

//     if (year < 1900) {
//       setError("Year of birth must be greater than 1900");
//       return;
//     }

//     const element = calculateElement(Number(year));
//     const heavenlyStemAndBranch = calculateHeavenlyStemAndBranch(Number(year));

//     setResult(`Year of birth: ${year},
//       Gender: ${gender},
//       Heavenly Stem and Earthly Branch: ${heavenlyStemAndBranch},
//       Element: ${element}`);
//   };

//   const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     if (!isNaN(Number(value))) {
//       setYear(Number(value));
//     } else {
//       setYear("");
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
//           padding: "20px",
//           maxWidth: "500px",
//           margin: "0 auto",
//           textAlign: "center",
//           fontFamily: "Arial, sans-serif",
//           background: "#f9f9f9",
//           borderRadius: "8px",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//           marginTop: "30px",
//         }}
//       >
//         <h2 style={{ marginBottom: "40px", color: "#333" }}>
//           Feng Shui Koi - Predict Destiny Element
//         </h2>
//         <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
//           <div style={{ marginBottom: "15px" }}>
//             <label style={{ display: "block", marginBottom: "20px" }}>
//               Please Input Your Year of Birth:{" "}
//             </label>
//             <input
//               type="text"
//               value={year}
//               onChange={handleYearChange}
//               placeholder="Year of Birth"
//               style={{
//                 padding: "10px",
//                 width: "95%",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//                 textAlign: "center",
//               }}
//               required
//             />
//           </div>
//           <div style={{ marginBottom: "30px" }}>
//             <label
//               style={{
//                 display: "block",
//                 marginBottom: "20px",
//                 marginTop: "40px",
//               }}
//             >
//               Please Input Your Gender:{" "}
//             </label>
//             <select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               style={{
//                 padding: "10px",
//                 width: "100%",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//                 textAlign: "center",
//               }}
//               required
//             >
//               <option value=""> Your Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>
//           <button
//             type="submit"
//             style={{
//               padding: "15px 30px",
//               backgroundColor: "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//               fontWeight: "bold",
//               fontSize: "15px",
//             }}
//           >
//             Submit
//           </button>
//         </form>
//         {error && (
//           <div
//             style={{
//               color: "red",
//               marginBottom: "20px",
//               padding: "10px",
//               border: "1px solid red",
//               borderRadius: "4px",
//               backgroundColor: "#ffe6e6",
//             }}
//           >
//             {error}
//           </div>
//         )}
//         {result && (
//           <div
//             style={{
//               marginTop: "20px",
//               padding: "10px",
//               border: "1px solid #28a745",
//               borderRadius: "4px",
//               backgroundColor: "#e6ffe6",
//             }}
//           >
//             <h3>Your Destiny Result</h3>
//             <p>{result}</p>
//           </div>
//         )}
//       </div>
//       <div style={{ padding: "0 80px" }}>
//         <Typography style={{ fontSize: "50px" }}>Koi Fish List</Typography>
//         <div style={{ marginTop: "20px" }}>
//           <KoiFishList koiFishData={[]} />
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default FengShuiForm;
