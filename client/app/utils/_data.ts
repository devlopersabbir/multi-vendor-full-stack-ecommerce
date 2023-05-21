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

export const productImage = [
  { uuid: 0, image: "/products/1.png" },
  { uuid: 1, image: "/products/2.png" },
  { uuid: 2, image: "/products/3.png" },
  { uuid: 3, image: "/products/4.png" },
  { uuid: 4, image: "/products/5.png" },
];
