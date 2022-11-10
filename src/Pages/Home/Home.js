import React from "react";
import { Charts } from "../../Components/Charts/Charts";
import { HomeCards } from "../../Components/HomeCards/HomeCards";
import { MostSeen } from "../../Components/MostSeen/MostSeen";
import "./Home.css";

export function Home() {
  return (
    <div id="home">
      <div className="home_left_card">
        <HomeCards />
        <Charts />
      </div>
      <div className="home_right_card">
        <MostSeen />
      </div>
    </div>
  );
}
