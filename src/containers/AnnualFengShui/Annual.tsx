// ZodiacLayout.tsx
import React from "react";
import ZodiacCard from "../../components/molecule/ZodiacCard/ZodiacCard";
import "./Annual.css";
import Header from "../../components/organism/Header";
import Footer from "../../components/organism/Footer";
import { Typography, Box } from "@mui/material";

const Annual: React.FC = () => {
  const cardData = [
    {
      imageSrc:
        "https://fengshuibeginner.com/wp-content/uploads/2020/09/rat-zodiac-2021.jpg",
      title: "Chinese Rat Zodiac Sign 2025 Forecast (What Awaits You?)",
      description:
        "Friends belonging to the Chinese Rat zodiac sign will have a mixed luck year ahead in the Wood Snake year of 2025.",
      date: "Aug 31, 2024",
      readTime: "4 min read",
    },
    {
      imageSrc:
        "https://fengshuibeginner.com/wp-content/uploads/2024/08/Fan-Tai-Sui-2025.jpg",
      title: '4 Chinese Zodiac Who "Fan Tai Sui" Year 2025',
      description:
        "Tai Sui aka the Grand Duke Jupiter, plays a significant role in influencing the fortunes of zodiac signs each year.",
      date: "Aug 26, 2024",
      readTime: "5 min read",
    },
    {
      imageSrc:
        "https://fengshuibeginner.com/wp-content/uploads/2024/02/Feng-Shui-Flying-Star-2024.jpg",
      title: "Feng Shui Flying Stars 2024 – Enhancers and Cures",
      description:
        "Unlock the positive energy with Feng Shui Flying Stars 2024! Explore the favourable and challenging stars.",
      date: "Feb 1, 2024",
      readTime: "13 min read",
    },
    {
      imageSrc:
        "https://fengshuibeginner.com/wp-content/uploads/2020/09/Tiger-Zodiac-2021.jpg",
      title: "Chinese Tiger Zodiac Sign Forecast 2024 – What’s Next?",
      description:
        "Based on the forecasts for the Chinese Tiger Zodiac sign, it might be a year of stress, so it’s good to be in defensive mode.",
      date: "Jan 14, 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <React.Fragment>
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
          ANNUAL FENG SHUI <strong>2024</strong>
        </Typography>
        {/* Description */}
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          Feng Shui Tips and Cures with annual 2024 Flying Star Chart, 3
          Killings, Grand Duke and Year Breaker Star analysis.
        </Typography>
        {/* Additional Text */}
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: "20px" }}
        >
          You can also check out the Chinese Zodiac Forecast for 2024
        </Typography>
      </Box>
      <div className="head-wrap"></div>
      <div className="card-grid">
        <ZodiacCard
          imageSrc="data:image/jpeg;base64,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"
          title="Koi Fish Symbolism and Cultural Significance"
          description="Koi fish are often associated with
           perseverance, strength, and 
          good fortune in various cultures, 
          especially in Japan and China. 
         "
          date="Aug 31, 2024"
          readTime="4 min read"
        />
        <ZodiacCard
          imageSrc="data:image/jpeg;base64,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"
          title="Types of Koi Fish and Their Unique Color Patterns"
          description="Explore the different varieties of Koi, such as Kohaku, 
          Showa, and Sanke, and understand how 
          their vibrant color patterns like red,
           black, white, and gold create a 
           visual masterpiece in ponds."
          date="Aug 31, 2024"
          readTime="4 min read"
        />
        <ZodiacCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKqoI0VzTFYsiwKR1XzEFYD17GxrzFUw7kg&s"
          title="The Art of Koi Pond Design"
          description="Creating a Koi pond is an intricate process that 
          combines aesthetics with functionality. 
          Delve into tips on how to 
          design a beautiful and healthy environment for Koi."
          date="Aug 31, 2024"
          readTime="4 min read"
        />
        <ZodiacCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZDLa4Y0CGUMc5YcTrZ9wFrVpyRk08mrRYJQ&s"
          title="Chinese Rat Zodiac Sign 2025 Forecast (What Awaits You?)"
          description="Friends belonging to the 
          Chinese Rat zodiac sign will
           have a mixed luck year ahead in
            the Wood Snake year of 2025."
          date="Aug 31, 2024"
          readTime="4 min read"
        />
        <ZodiacCard
          imageSrc="https://fengshuibeginner.com/wp-content/uploads/2020/09/rat-zodiac-2021.jpg"
          title="Health and Nutrition"
          description="Proper care is essential to keeping Koi healthy and thriving. 
          This topic covers essential tips on feeding,
           seasonal care, preventing common diseases,
           and creating a balanced ecosystem 
           that promotes their well-being."
          date="Aug 31, 2024"
          readTime="4 min read"
        />
        <ZodiacCard
          imageSrc="https://fengshuibeginner.com/wp-content/uploads/2024/08/Fan-Tai-Sui-2025.jpg"
          title='4 Chinese Zodiac Who "Fan Tai Sui" Year 2025'
          description="Tai Sui aka the Grand Duke Jupiter,
           plays a significant role in influencing 
           the fortunes of zodiac signs each year."
          date="Aug 26, 2024"
          readTime="5 min read"
        />
        <ZodiacCard
          imageSrc="https://fengshuibeginner.com/wp-content/uploads/2024/02/Feng-Shui-Flying-Star-2024.jpg"
          title="Feng Shui Flying Stars 2024 – Enhancers and Cures"
          description="Unlock the positive energy with 
          Feng Shui Flying Stars 2024! Explore the 
          favourable and challenging stars."
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
        <ZodiacCard
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfdTk13qgYYXfee2sbAkFAxHDsU4JY_lVRgA&s"
          title="Koi Breeding: From Eggs to Full-Grown Fish"
          description="In Feng Shui, Koi fish are believed to bring positive energy, 
          wealth, and success. Explore how incorporating Koi fish motifs
           or ponds into your home or garden can enhance the 
           flow of good fortune and create a serene atmosphere."
          date="Jan 14, 2024"
          readTime="6 min read"
        />
        <ZodiacCard
          imageSrc="https://royalthaiart.com/wp-content/uploads/2018/07/676.jpg"
          title="The History and Evolution of Koi Keeping"
          description="Some Koi fish have become legendary for their size,
           color, and value, with record sales reaching
            hundreds of thousands of dollars.
           This topic looks at the most famous Koi
            in history and what makes these particular fish so valuable"
          date="Jan 14, 2024"
          readTime="6 min read"
        />
      </div>

      <Box
        sx={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "40px",
          //   backgroundColor: "Grey",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          <strong>BE INSPIRED </strong> BY FENG SHUI ARTICLES
        </Typography>
        {/* Description */}
        <Typography
          variant="body1"
          color="textSecondary"
          gutterBottom
          sx={{ marginBottom: "20px" }}
        >
          A leading Feng Shui blog and knowledge vault that covers all aspects
          of this ancient art
        </Typography>
      </Box>
        <Footer></Footer>
    </React.Fragment>
  );
};

export default Annual;
