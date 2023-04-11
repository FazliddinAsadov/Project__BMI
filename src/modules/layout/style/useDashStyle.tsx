import { createStyles, getStylesRef } from "@mantine/core";

const useDashStyle = createStyles((theme, _params, getRef) => {
  return {
    header: {
      paddingBottom: theme.spacing.md,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
      fontSize: 24,
      fontWeight: 700,
    },
    childerns: {
      padding: "0px 10px",
      [`@media (max-width: 800px)`]: {
        padding: "0px",
      },
    },
    head: {
      width: "95%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    head__div: {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === "dark" ? theme.white : theme.black,

        [`& .${getStylesRef("icon")}`]: {
          color: theme.colorScheme === "dark" ? theme.white : theme.black,
        },
      },
    },
    linkIcon: {
      color:
        theme.colorScheme === "dark"
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },
    title: {
      fontSize: 36,
      fontWeight: 700,
      cursor: "pointer",
    },
    navDesh: {
      width: "97%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
    },
    bob: {
      fontSize: 24,
      fontWeight: "bold",
    },
    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.fn.variant({
          variant: "light",
          color: theme.primaryColor,
        }).background,
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
        [`& .${getStylesRef("icon")}`]: {
          color: theme.fn.variant({
            variant: "light",
            color: theme.primaryColor,
          }).color,
        },
      },
    },
  };
});

export default useDashStyle;
