import React from "react";
import { Box, Typography } from "@mui/material";
import "./BlogCard.css"; // Import the CSS file

interface BlogCardProps {
  title: string;
  imageUrl: string;
  onClickUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, imageUrl, onClickUrl }) => {
  return (
    <Box
      className="blog-card"
      onClick={() => (window.location.href = onClickUrl)}
    >
      <img src={imageUrl} alt={title} />
      <Box className="overlay-text">
        <Typography className="overlay-text-content">{title}</Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
