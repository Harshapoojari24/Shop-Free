import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import bgIm from "../Assets/Images/hero.jpg"
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "orange", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src="./imageabout.jpg"
            //`url(${bgIm})`
            alt=""
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              Shop healthy
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >

Welcome to Shop Free Your One-Stop Shop for all new shooping cart...

Discover a world of high-quality [products] at unbeatable prices. Whether you're looking for the latest trends, must-have essentials, or unique finds, we've got you covered.
Explore our collections now and enjoy an effortless shopping experience. Happy Shopping!

            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
