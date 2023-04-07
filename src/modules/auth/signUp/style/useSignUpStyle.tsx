import { createStyles } from "@mantine/core";

const useSignUpStyle = createStyles(() => {
  return {
    line__or: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
    },
    line: {
      width: "80%",
      height: "1px",
      backgroundColor: "#444",
    },
    icon__group__brand: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },

    btn__google: {
      border: "1px solid #444",
      padding: "8px 35px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      gap: 10,
      borderRadius: "50px",
    },
    btn__linkedin: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      gap: 10,
      borderRadius: "50px",
      border: "1px solid #444",
      padding: "7px 35px",
      backgroundColor: "#003182",
    },
  };
});

export default useSignUpStyle;
