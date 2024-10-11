import React, { useState } from "react";

import { DatePicker, Radio, Button, Table, Image } from "antd";

import {
  Kua1,
  Kua2,
  Kua3,
  Kua4,
  Kua5,
  Kua6,
  Kua7,
  Kua8,
  Kua9,
} from "../../assets/img/Caculator";
import recommendations from "./recommendations.json";

const FengshuiConsultation = () => {
  const [date, setDate] = useState(null);
  const [gender, setGender] = useState("female");
  const [kuaData, setKuaData] = useState([]);
  const [kuaNumber, setKuaNumber] = useState(null);
  const kuaImages = {
    1: Kua1,
    2: Kua2,
    3: Kua3,
    4: Kua4,
    5: Kua5,
    6: Kua6,
    7: Kua7,
    8: Kua8,
    9: Kua9,
  };

  function female(x) {
    switch (x % 9) {
      case 8:
        return 3;
      case 7:
        return 2;
      case 6:
        return 1;
      case 5:
        return 9;
      case 4:
        return 8;
      case 3:
        return 7;
      case 2:
        return 6;
      case 1:
        return 5;
      case 0:
        return 4;
      default:
        return "N/A";
    }
  }

  function male(x) {
    switch (x % 9) {
      case 8:
        return 3;
      case 7:
        return 4;
      case 6:
        return 5;
      case 5:
        return 6;
      case 4:
        return 7; //
      case 3:
        return 8;
      case 2:
        return 9;
      case 1:
        return 1;
      case 0:
        return 2;
      default:
        return "N/A";
    }
  }
  // Tính số Kua
  const calculateKuaNumber = (year) => {
    let kuaNumber;
    if (gender === "female") {
      kuaNumber = female(year);
      console.log(year, kuaNumber);
    } else {
      kuaNumber = male(year);
      console.log(year, kuaNumber);
    }
    return kuaNumber;
  };

  const handleSubmit = () => {
    if (date) {
      const selectedYear = date.year();
      const kuaNumber = calculateKuaNumber(selectedYear);
      setKuaNumber(kuaNumber); // Lưu số Kua để hiển thị hình ảnh

      const recommendationsForKua = recommendations.filter(
        (rec) => rec.kuaNumber === kuaNumber
      );
      setKuaData(recommendationsForKua);
    }
  };

  // Cấu trúc dữ liệu cho bảng
  const dataSource = kuaData.map((rec, index) => ({
    key: `${rec.kuaNumber}-${index}`, // Kết hợp số Kua và chỉ số để đảm bảo tính duy nhất
    direction: rec.direction,
    recommendationType: rec.recommendationType,
    recommendationDetails: rec.recommendationDetails.replace(/\n/g, "<br />"), // Thay thế \n bằng <br />
  }));

  const columns = [
    {
      title: "Directions",
      children: [
        {
          title: "Direction",
          dataIndex: "direction",
          key: "direction",
        },
        {
          title: "Type",
          dataIndex: "recommendationType",
          key: "recommendationType",
        },
      ],
    },
    {
      title: "Recommendations",
      dataIndex: "recommendationDetails",
      key: "recommendationDetails",
      render: (text) => <span dangerouslySetInnerHTML={{ __html: text }} />, // Hiển thị HTML
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Feng Shui Consultation</h1>
      <div className="flex space-x-4">
        <div className="mb-4">
          <DatePicker
            onChange={(date) => setDate(date)}
            placeholder="Select Date"
          />
        </div>
        <div className="mb-4">
          <Radio.Group
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <Radio value="female">Female</Radio>
            <Radio value="male">Male</Radio>
          </Radio.Group>
        </div>
        <Button type="primary" onClick={handleSubmit}>
          Calculate Kua
        </Button>
      </div>

      {kuaNumber && kuaImages[kuaNumber] && (
        <div className="mt-5 text-center">
          <h2 className="text-xl mb-4">Kua Number: {kuaNumber}</h2>
          <Image
            width={400}
            src={kuaImages[kuaNumber]} // Hiển thị hình ảnh tương ứng với số Kua
            alt={`Kua ${kuaNumber}`}
          />
        </div>
      )}

      {kuaData.length > 0 && (
        <Table
          columns={columns}
          dataSource={dataSource}
          className="mt-5"
          pagination={false}
        />
      )}
    </div>
  );
};

export default FengshuiConsultation;
