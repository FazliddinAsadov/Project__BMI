import React from "react";
import { Box, Text } from "@mantine/core";
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
      <Text>Namangan Muhandistlik Texnalogiya Institutining</Text>
      <Text>
        Avtomatika va Energetika fakulteti 21U-19 guruh talabasi Nodir Ahmadov
      </Text>
    </Box>
  );
};
