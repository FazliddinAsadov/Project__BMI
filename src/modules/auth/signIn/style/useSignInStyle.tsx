import { createStyles } from "@mantine/core";

const useSignInStyle = createStyles((theme) => {
  return {
    head: {
      marginTop: "8%",
    },
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
    },
  };
});
export default useSignInStyle;
