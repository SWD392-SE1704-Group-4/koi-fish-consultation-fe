import React from "react";
import ImageGallery from "react-image-gallery";
import { Card, Typography, Box, Grid } from "@mui/joy";
import "react-image-gallery/styles/css/image-gallery.css";
import "./index.css";
import { Margin } from "@mui/icons-material";
import Header from "../../components/organism/Header";

import ForestIcon from "@mui/icons-material/Forest";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import DiamondIcon from "@mui/icons-material/Diamond";
import PublicIcon from "@mui/icons-material/Public";

// Feng Shui element icons mapping
export const fengShuiElementLogos = {
  Water: <WaterDropIcon sx={{ color: "blue" }} />,
  Fire: <WhatshotIcon sx={{ color: "red" }} />,
  Wood: <ForestIcon sx={{ color: "green" }} />,
  Earth: <PublicIcon sx={{ color: "brown" }} />,
  Metal: <DiamondIcon sx={{ color: "gray" }} />,
};

// CloudFront base URL
const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

// Hardcoded API data with CloudFront URL
const koiFishData = {
  koiFishName: "Gin Rin",
  koiFishColor: "Silver, Red, White",
  koiFishSize: 80.0,
  koiFishAge: 6.0,
  koiFishPictures: [
    {
      original: `${cloudfrontUrl}KOI_FISH/MarineBodySide.png`,
      thumbnail: `${cloudfrontUrl}KOI_FISH/MarineBodySide.png`,
    },
    {
      original: `${cloudfrontUrl}KOI_FISH/Tancho-Kohaku-e1575170924236.png`,
      thumbnail: `${cloudfrontUrl}KOI_FISH/Tancho-Kohaku-e1575170924236.png`,
    },
    {
      original: `${cloudfrontUrl}KOI_FISH/61UbOJh7ldL._AC_UF1000,1000_QL80_.jpg`,
      thumbnail: `${cloudfrontUrl}KOI_FISH/61UbOJh7ldL._AC_UF1000,1000_QL80_.jpg`,
    },
  ],
  fengshuiElement: {
    elementName: "Metal",
    elementColor: "White, Gray",
    elementDirection: "West",
    elementSeason: "Autumn",
    elementYinYang: "Yang",
    elementAssociatedAnimals: "Horses, Eagles",
    elementStrength: 85,
  },
  symbolicMeaning: "Symbolizes nobility and power",
  energyType: "Positive",
  favorableNumber: 6,
  favorableColor: "Silver",
  koiFishOrigin: "Japan",
  koiFishDescription:
    "Fish with shimmering scales, creating a dazzling effect. Lorem ispum creating a dazzling effect with shimmering scales",
  koiFishPrice: 550.0,
};

const KoiFishDetail: React.FC = () => {
  const fengShuiIcon =
    fengShuiElementLogos[koiFishData.fengshuiElement.elementName] || null;
  return (
    <React.Fragment>
      <Header></Header>
      <Grid container spacing={2} className="koi-fish-gallery-card">
        {/* Left Side: Image Gallery */}
        <Grid
          xs={12}
          md={6}
          className="image-gallery-container"
          sx={{ marginTop: "20px" }}
        >
          <ImageGallery
            items={koiFishData.koiFishPictures}
            showFullscreenButton={false}
            showPlayButton={false}
            className="image-gallery-detail"
            renderItem={(item) => (
              <img
                src={item.original}
                alt={item.alt}
                style={{
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "25px",
                }}
              />
            )}
          />
        </Grid>

        {/* Right Side: Details */}
        <Grid xs={12} md={6}>
          <Card variant="outlined" className="koi-fish-details-card">
            <Typography level="h2" className="koi-fish-name">
              {koiFishData.koiFishName}
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "57%",
              }}
            >
              <Typography level="body-md">
                <strong>Colors:</strong> {koiFishData.koiFishColor}
              </Typography>
              <Typography level="body-md">
                <strong>Size:</strong> {koiFishData.koiFishSize} cm
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography level="body-md">
                <strong>Age:</strong> {koiFishData.koiFishAge} years
              </Typography>
              <Typography level="body-md">
                <strong>Origin:</strong> {koiFishData.koiFishOrigin}
              </Typography>
              <Typography level="body-md">
                <strong>Price:</strong> ${koiFishData.koiFishPrice}
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography level="body-md">
                <strong>Symbolic Meaning:</strong> {koiFishData.symbolicMeaning}
              </Typography>
              <Typography level="body-md">
                <strong>Energy Type:</strong> {koiFishData.energyType}
              </Typography>
            </div>

            <Typography level="body-md" className="koi-fish-description">
              <strong>Description:</strong> {koiFishData.koiFishDescription}
            </Typography>

            {/* Fengshui details */}
            <Box className="fengshui-info">
              <Typography level="h4" className="fengshui-title">
                Fengshui Element
              </Typography>
              {/* <Typography level="body-md">
                <strong>Element:</strong>{" "}
                {koiFishData.fengshuiElement.elementName}
              </Typography> */}
              {/* Fengshui details */}
              <Box className="fengshui-info" display="flex" alignItems="center">
                {/* Display the feng shui icon */}
                {fengShuiIcon && <Box mr={1}>{fengShuiIcon}</Box>}
                <Typography level="h4" className="fengshui-title">
                  {koiFishData.fengshuiElement.elementName} Element{" "}
                </Typography>
              </Box>
              <Typography level="body-md">
                <strong>Colors:</strong>{" "}
                {koiFishData.fengshuiElement.elementColor}
              </Typography>
              <Typography level="body-md">
                <strong>Direction:</strong>{" "}
                {koiFishData.fengshuiElement.elementDirection}
              </Typography>
              <Typography level="body-md">
                <strong>Season:</strong>{" "}
                {koiFishData.fengshuiElement.elementSeason}
              </Typography>
              <Typography level="body-md">
                <strong>Yin/Yang:</strong>{" "}
                {koiFishData.fengshuiElement.elementYinYang}
              </Typography>
              <Typography level="body-md">
                <strong>Strength:</strong>{" "}
                {koiFishData.fengshuiElement.elementStrength}%
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default KoiFishDetail;
