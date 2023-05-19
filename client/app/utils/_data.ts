import { NavItem } from "./inteface/interface";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Category",
    children: [
      {
        label: "Life style",
        href: "/category",
      },
      {
        label: "Fashon",
        href: "/category",
      },
    ],
  },
  {
    label: "Deals",
    href: "/deals",
  },
  {
    label: "What's new",
    href: "/new",
    children: [
      {
        label: "Toys",
        href: "/toys",
      },
    ],
  },
  {
    label: "Delivary",
    href: "/delivery",
  },
];
