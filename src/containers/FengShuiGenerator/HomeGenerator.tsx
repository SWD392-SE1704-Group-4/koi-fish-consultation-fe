import React, { useState } from "react";
import Header from "../../components/organism/Header";

const FengShuiForm: React.FC = () => {
  const [year, setYear] = useState<number | "">("");
  const [gender, setGender] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const heavenlyStems = [
    "Jia",
    "Yi",
    "Bing",
    "Ding",
    "Wu",
    "Ji",
    "Geng",
    "Xin",
    "Ren",
    "Gui",
  ];
  const earthlyBranches = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const fiveElementsCycle = [
    "Metal",
    "Metal",
    "Water",
    "Water",
    "Wood",
    "Wood",
    "Fire",
    "Fire",
    "Earth",
    "Earth",
    "Metal",
    "Metal",
    "Water",
    "Water",
    "Wood",
    "Wood",
    "Fire",
    "Fire",
    "Earth",
    "Earth",
    "Metal",
    "Metal",
    "Water",
    "Water",
    "Wood",
    "Wood",
    "Fire",
    "Fire",
    "Earth",
    "Earth",
    "Metal",
    "Metal",
    "Water",
    "Water",
    "Wood",
    "Wood",
    "Fire",
    "Fire",
    "Earth",
    "Earth",
    "Metal",
    "Metal",
    "Water",
    "Water",
    "Wood",
    "Wood",
    "Fire",
    "Fire",
    "Earth",
    "Earth",
    "Metal",
    "Metal",
    "Water",
    "Water",
    "Wood",
    "Wood",
    "Fire",
    "Fire",
    "Earth",
    "Earth",
  ];

  const calculateElement = (birthYear: number) => {
    // Tính chỉ số đảm bảo giá trị luôn dương và nằm trong khoảng 0-59
    const index = (((birthYear - 1984) % 60) + 60) % 60;
    return fiveElementsCycle[index];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult("");

    if (!year || isNaN(Number(year))) {
      setError("Invalid input");
      return;
    }

    if (year < 1900) {
      setError("Year of birth must be bigger than 1900");
      return;
    }

    const element = calculateElement(year);
    setResult(`Year of birth: ${year} 
        Belongs to ${element}`);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setYear(Number(value));
    } else {
      setYear("");
    }
  };

  return (
    <React.Fragment>
      <Header></Header>
      <div
        style={{
          padding: "20px",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          background: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          marginTop: "30px",
        }}
      >
        <h2 style={{ marginBottom: "40px", color: "#333" }}>
          Feng Shui Koi - Predict Destiny Element
        </h2>
        <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "20px" }}>
              Please Input Your Year of Birth:{" "}
            </label>
            <input
              type="text"
              value={year}
              onChange={handleYearChange}
              placeholder="Year of Birth"
              style={{
                padding: "10px",
                width: "95%",
                borderRadius: "4px",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "20px",
                marginTop: "40px",
              }}
            >
              Please Input Your Gender:{" "}
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #ccc",
                textAlign: "center",
              }}
              required
            >
              <option value=""> Your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            type="submit"
            style={{
              padding: "15px 30px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Submit
          </button>
        </form>
        {error && (
          <div
            style={{
              color: "red",
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid red",
              borderRadius: "4px",
              backgroundColor: "#ffe6e6",
            }}
          >
            {error}
          </div>
        )}
        {result && (
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "1px solid #28a745",
              borderRadius: "4px",
              backgroundColor: "#e6ffe6",
            }}
          >
            <h3>Your Destiny Result</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default FengShuiForm;

// Vietnamese Version

// import React, { useState } from "react";

// const FengShuiForm: React.FC = () => {
//   const [year, setYear] = useState<number | "">("");
//   const [gender, setGender] = useState<string>("");
//   const [result, setResult] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const thienCan = [
//     "Giáp",
//     "Ất",
//     "Bính",
//     "Đinh",
//     "Mậu",
//     "Kỷ",
//     "Canh",
//     "Tân",
//     "Nhâm",
//     "Quý",
//   ];
//   const diaChi = [
//     "Tý",
//     "Sửu",
//     "Dần",
//     "Mão",
//     "Thìn",
//     "Tỵ",
//     "Ngọ",
//     "Mùi",
//     "Thân",
//     "Dậu",
//     "Tuất",
//     "Hợi",
//   ];
//   const nguHanhLucThapHoaGiap = [
//     "Kim",
//     "Kim",
//     "Thủy",
//     "Thủy",
//     "Mộc",
//     "Mộc",
//     "Hỏa",
//     "Hỏa",
//     "Thổ",
//     "Thổ",
//     "Kim",
//     "Kim",
//     "Thủy",
//     "Thủy",
//     "Mộc",
//     "Mộc",
//     "Hỏa",
//     "Hỏa",
//     "Thổ",
//     "Thổ",
//     "Kim",
//     "Kim",
//     "Thủy",
//     "Thủy",
//     "Mộc",
//     "Mộc",
//     "Hỏa",
//     "Hỏa",
//     "Thổ",
//     "Thổ",
//     "Kim",
//     "Kim",
//     "Thủy",
//     "Thủy",
//     "Mộc",
//     "Mộc",
//     "Hỏa",
//     "Hỏa",
//     "Thổ",
//     "Thổ",
//     "Kim",
//     "Kim",
//     "Thủy",
//     "Thủy",
//     "Mộc",
//     "Mộc",
//     "Hỏa",
//     "Hỏa",
//     "Thổ",
//     "Thổ",
//     "Kim",
//     "Kim",
//     "Thủy",
//     "Thủy",
//     "Mộc",
//     "Mộc",
//     "Hỏa",
//     "Hỏa",
//     "Thổ",
//     "Thổ",
//   ];

//   const calculateElement = (birthYear: number) => {
//     const index = (birthYear - 1984) % 60;
//     return nguHanhLucThapHoaGiap[index];
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
//       setError("Year of birth must be bigger than 1900");
//       return;
//     }

//     const element = calculateElement(year);
//     setResult(`Năm sinh: ${year} thuộc mệnh ${element}`);
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
//     <div
//       style={{
//         padding: "20px",
//         maxWidth: "500px",
//         margin: "0 auto",
//         textAlign: "center",
//         fontFamily: "Arial, sans-serif",
//         background: "#f9f9f9",
//         borderRadius: "8px",
//         boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h2 style={{ marginBottom: "20px", color: "#333" }}>
//         Feng Shui Koi - Dự Đoán Mệnh
//       </h2>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Năm sinh:{" "}
//           </label>
//           <input
//             type="text"
//             value={year}
//             onChange={handleYearChange}
//             placeholder="Nhập năm sinh của bạn"
//             style={{
//               padding: "10px",
//               width: "100%",
//               borderRadius: "4px",
//               border: "1px solid #ccc",
//             }}
//             required
//           />
//         </div>
//         <div style={{ marginBottom: "15px" }}>
//           <label style={{ display: "block", marginBottom: "5px" }}>
//             Giới tính:{" "}
//           </label>
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             style={{
//               padding: "10px",
//               width: "100%",
//               borderRadius: "4px",
//               border: "1px solid #ccc",
//             }}
//             required
//           >
//             <option value="">Chọn giới tính</option>
//             <option value="male">Nam</option>
//             <option value="female">Nữ</option>
//           </select>
//         </div>
//         <button
//           type="submit"
//           style={{
//             padding: "10px 15px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Submit
//         </button>
//       </form>
//       {error && (
//         <div
//           style={{
//             color: "red",
//             marginBottom: "20px",
//             padding: "10px",
//             border: "1px solid red",
//             borderRadius: "4px",
//             backgroundColor: "#ffe6e6",
//           }}
//         >
//           {error}
//         </div>
//       )}
//       {result && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "10px",
//             border: "1px solid #28a745",
//             borderRadius: "4px",
//             backgroundColor: "#e6ffe6",
//           }}
//         >
//           <h3>Kết quả</h3>
//           <p>{result}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FengShuiForm;
