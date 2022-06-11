import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdQueryStats } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

const links = [
  { id: 1, text: "Home", path: "/", icon: <AiOutlineHome /> },
  { id: 2, text: "register", path: "/register", icon: <MdQueryStats /> },
  { id: 3, text: "Cart", path: "cart", icon: <AiOutlineShoppingCart /> },
];

export default links;
