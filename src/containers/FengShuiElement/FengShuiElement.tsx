import React from "react";
import "./FengShuiElement.css";
import { fengShuiElementLogos } from "../../constants/Fengshui/Logo"; // Import file chứa các icon
import Header from "../../components/organism/Header";
import ZodiacCard from "../../components/molecule/ZodiacCard/ZodiacCard";
import { Typography, Box } from "@mui/material";
import Footer from "../../components/organism/Footer";

const elementsData = [
  {
    elementId: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
    elementName: "Water",
    elementColor: "Black, Blue",
    elementDirection: "North",
    elementSeason: "Winter",
    elementYinYang: "Yin",
    elementAssociatedAnimals: "Turtles, Fish",
    elementStrength: 80,
  },
  {
    elementId: "b1f2e123-7f49-4c72-a547-4d5bf54ef8d8",
    elementName: "Fire",
    elementColor: "Red",
    elementDirection: "South",
    elementSeason: "Summer",
    elementYinYang: "Yang",
    elementAssociatedAnimals: "Phoenix, Dragons",
    elementStrength: 90,
  },
  {
    elementId: "c2f3e234-8f61-4d89-b659-5e7cf65af9e9",
    elementName: "Wood",
    elementColor: "Green, Brown",
    elementDirection: "East",
    elementSeason: "Spring",
    elementYinYang: "Yang",
    elementAssociatedAnimals: "Tiger, Deer",
    elementStrength: 70,
  },
  {
    elementId: "d3f4e345-9073-4e9a-b76a-6f8df76b0faa",
    elementName: "Earth",
    elementColor: "Yellow",
    elementDirection: "Center",
    elementSeason: "Late Summer",
    elementYinYang: "Yin",
    elementAssociatedAnimals: "Cows, Pigs",
    elementStrength: 100,
  },
  {
    elementId: "e4f5e456-0174-4fab-c86b-7f9ef87c1abb",
    elementName: "Metal",
    elementColor: "White, Gray",
    elementDirection: "West",
    elementSeason: "Autumn",
    elementYinYang: "Yang",
    elementAssociatedAnimals: "Horses, Eagles",
    elementStrength: 85,
  },
];

const FengShuiElement: React.FC = () => {
  return (
    <React.Fragment>
      <Header></Header>
      {/* <div className="about-us-container">
        <div className="about-us-image">
          <img
            src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
            alt="About Us"
            className="about-us-img"
          />
        </div>
        <div className="about-us-text">
          <h1>Fengshui Element</h1>
        </div>
        <div className="additional-content"></div>
      </div> */}
      {/* <div className="about-us-container">
        <div className="about-us-image">
          <img
            src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
            alt="About Us"
            className="about-us-img"
          />
        </div>
        <div className="about-us-text">
          <h1>Fengshui Element</h1>
        </div>
        <div className="additional-content"></div>
      </div> */}
      <Box
        sx={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}
      >
        {/* Main Title */}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          FENG SHUI ELEMENT <strong>2024</strong>
        </Typography>
        {/* Description */}
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          Feng Shui Element is based on five key elements, each representing
          different energies and aspects of life
        </Typography>
        {/* Additional Text */}
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: "20px" }}
        >
          Check it out for clearer information!
        </Typography>
      </Box>
      <table className="elements-table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Element</th>
            <th>Color</th>
            <th>Direction</th>
            <th>Season</th>
            <th>Yin/Yang</th>
            <th>Associated Animals</th>
            <th>Strength</th>
          </tr>
        </thead>
        <tbody>
          {elementsData.map((element) => (
            <tr key={element.elementId}>
              <td>{fengShuiElementLogos[element.elementName]}</td> {/* Icon */}
              <td>{element.elementName}</td>
              <td>{element.elementColor}</td>
              <td>{element.elementDirection}</td>
              <td>{element.elementSeason}</td>
              <td>{element.elementYinYang}</td>
              <td>{element.elementAssociatedAnimals}</td>
              <td>{element.elementStrength}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="head-wrap"></div>
      <div className="card-grid">
        <ZodiacCard
          imageSrc="https://cdn.eva.vn/upload/4-2021/images/2021-12-10/image1-1639101710-5-width600height400.jpg"
          title="Wood Element"
          description="Symbolizes growth, creativity, and vitality.
          It is associated with health, new beginnings, and wealth.."
          date="Aug 31, 2024"
          readTime="4 min read"
        />
        <ZodiacCard
          imageSrc="data:image/jpeg;base64,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"
          title="Fire Element"
          description="Represents energy, passion, and transformation. It brings warmth, enthusiasm, and recognition."
          date="Aug 31, 2024"
          readTime="4 min read"
        />
        <ZodiacCard
          imageSrc="data:image/jpeg;base64,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"
          title="Earth Element"
          description="Grounding and stabilizing, Earth symbolizes nourishment, 
          security, and balance. It is linked to stability and support."
          date="Aug 31, 2024"
          readTime="4 min read"
        />
        <ZodiacCard
          imageSrc="https://www.thoughtco.com/thmb/bcFFMglmnRQpIUpjBq5PsIY_2xA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-139821357-82a2f5a1a16f4d76aea74236de88158b.jpg"
          title="Metal Element"
          description="Reflects precision, clarity, and strength. 
          It relates to organization, efficiency, and wealth generation."
          date="Aug 26, 2024"
          readTime="5 min read"
        />
        <ZodiacCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThEIo9uBz2v-gYTGAZvBxOpKntMZNSf5B9ug&s"
          title="Water Element"
          description="Represents fluidity, wisdom, and adaptability. It governs communication, flow, and prosperity."
          date="Feb 1, 2024"
          readTime="13 min read"
        />
        <ZodiacCard
          imageSrc="https://fengshuibeginner.com/wp-content/uploads/2020/09/Tiger-Zodiac-2021.jpg"
          title="Chinese Tiger Zodiac Sign Forecast 2024 – What’s Next?"
          description="Based on the forecasts 
          for the Chinese Tiger Zodiac sign,
           it might be a year of stress,
            so it’s good to be in defensive mode."
          date="Jan 14, 2024"
          readTime="6 min read"
        />
        <ZodiacCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7JXe1ldWb54_BIHqr17EFRqGt-HXXWZdNw&s"
          title="Famous Koi Fish and Record-Setting Sales"
          description="Discover the fascinating world of Koi breeding,
           from understanding the mating process 
           to the care required for Koi eggs and fry."
          date="Jan 14, 2024"
          readTime="6 min read"
        />
        <ZodiacCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAONf_UnnkjqoyjsoFsGkL0VfGqilkcEKDbg&s"
          title="Koi Fish in Feng Shui and Home Decor"
          description="Trace the history of Koi fish from their humble origins as common carp in China
           to their evolution into the colorful 
           ornamental fish cherished in Japan 
           and around the world today."
          date="Jan 14, 2024"
          readTime="6 min read"
        />
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default FengShuiElement;
