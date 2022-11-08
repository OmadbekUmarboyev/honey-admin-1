import React from 'react'
import "./Navbar.css"
import MyImage from "../../Assets/Images/My Images.jpg"
import LineChart from "../../Assets/Icons/Line Chart.svg"
import AddIcon from "../../Assets/Icons/Add Icon.svg"
import SearchIcon from "../../Assets/Icons/Search Icon.svg"
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';


export function Navbar() {
  return (
    <div>
      <div>
        <figure>
          <img src={MyImage} alt="" />
        </figure>
        <div>
          <h2>Khabibullakhanov M</h2>
          <p>Tizim Admini</p>
        </div>
      </div>
      <div>
        <figure>
          <img src={LineChart} alt="" />
        </figure>
        <figure>
          <img src={AddIcon} alt="" />
        </figure>
        <form>
          <input type="text" placeholder='Mahsulot izlash' />
          <img src={SearchIcon} alt="" />
        </form>
        <p>27.10.2022</p>
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon />
        </Badge>
      </div>
    </div>
  )
}
