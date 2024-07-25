import React from "react";
import Heroheader from "./components/Heroheader";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./header.css";
export default function Header() {
  return (
    <div>
      <Navbar />
      <Heroheader />
      <Search />
    </div>
  );
}
