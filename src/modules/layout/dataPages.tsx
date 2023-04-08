import { IconCategory, IconHome } from "@tabler/icons-react";

const dataPages = [
  {
    id: 1,
    link: "/",
    label: "Home",
    icon: IconHome,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },

  {
    id: 2,
    link: "/categories",
    label: "Category",
    icon: IconCategory,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "Outlook", link: "/" },
      { label: "Real time", link: "/" },
    ],
  },
];
export default dataPages;
