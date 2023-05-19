import React from "react";
import { Box, Text } from "@mantine/core";
import Image from "next/image";
import img from "@web/assets/images/image_2023-05-19_20-58-26.png";
type Props = {};
export const Home = (props: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      <Image src={img} alt="image" style={{ width: "100%", height: "auto" }} />
    </Box>
  );
};
