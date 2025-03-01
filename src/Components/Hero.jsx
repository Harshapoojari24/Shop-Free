import { Box, Typography } from "@mui/material";
import React from "react";
import bgIm from "../Assets/Images/backgroung.jpg"
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${bgIm})`,
        }}
      >
        <Typography
          sx={{
            fontStyle:'impact',
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "white",
          }}
          gutterBottom
        >
          Shop Free
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "30px", color: "#000000b8" }}
        >
          Shop Healthy
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "100%", fontWeight: "600", color: "#8B008B" }}
        >
         Welcome to Shop Free Your One-Stop Shop for all new shooping cart...

Discover a world of high-quality [products] at unbeatable prices. 
Whether you're looking for the latest trends, must-have essentials, 
or unique finds, we've got you covered.
Explore our collections now and enjoy an effortless shopping experience. Happy Shopping!
        </Typography>
      </Box>
    </Box>
  );
}
