import React, { useEffect, useState } from "react";
import "./Navbar.css";
import photo from "../../Assets/Images/My Images.jpg";
import statics from "../../Assets/Icons/Line Chart.svg";
import cubs from "../../Assets/Icons/Widget_add.svg";
import search from "../../Assets/Icons/Search_alt_duotone.svg";
import { NavLink } from "react-router-dom";
import { Notification } from "../Notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import menu from "../../Assets/Icons/menu-Light.svg";
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Drawer } from "@mui/material";
import { acSearch } from "../../Redux/Search";
import HomeIcon from '@mui/icons-material/Home';
import WidgetsIcon from '@mui/icons-material/Widgets';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LogoutIcon from '@mui/icons-material/Logout';

const links = [
  {
    id: 1,
    link: "/",
    name: "Home",
    icon: <HomeIcon />,
    className: "",
  },
  {
    id: 2,
    link: "/products",
    name: "Products",
    icon: <WidgetsIcon />,
    className: "",
  },
  {
    id: 3,
    link: "/orders",
    name: "Orders",
    icon: <BorderColorIcon />,
    className: "",
  },
  // {
  //   id: 4,
  //   link: "/add_product",
  //   name: "",
  //   img: statics,
  //   className: "appbarMigrants",
  // },
  {
    id: 5,
    link: "/addProduct",
    name: "Add Product",
    icon: <AddBoxIcon />,
    className: "appbarMigrants",
  },
];

export function Navbar() {
  const dispatch = useDispatch()
  const [redDot, setRedDot] = useState(false);
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const date = new Date().toLocaleDateString();
  const orders = useSelector((state) => state.order);

  useEffect(() => {
    if (orders.length === 0) {
      setRedDot(false);
    } else {
      setRedDot(true);
    }
  }, [redDot, orders]);

  return (
    <>
      <nav>
        <div id="user_nav_card">
          <button
            type="button"
            onClick={() => {
              setOpen(true)
            }}
          >
            <img src={menu} alt="" />
          </button>
          <figure>
            <img src={photo} alt="" onClick={() => {
              navigate("/")
            }} />
          </figure>
          <div id="about_admin" onClick={() => {
            navigate("/")
          }}>
            <p>Khabibullakhanov M</p>
            <p>Tizim admini</p>
          </div>
        </div>
        <div id="links_card">
          <img src={statics} alt="" className="nav_none" />
          <NavLink to="/addProduct" className="nav_none">
            <img src={cubs} alt="" />
          </NavLink>
          <form id="search_bar">
            <input type="text" placeholder=" Maxsulotni izlash"
              onChange={(e) => {
                dispatch(acSearch(e.target.value.toLowerCase()));
              }}
            />
            <img src={search} alt="" />
          </form>
          <span className="date">{date}</span>
          <Badge
            onClick={() => {
              navigate("/orders")
            }}
            badgeContent={4} color="primary">
            <NotificationsIcon style={{ fontSize: "30px" }} id="notification-icon-navbar" />
          </Badge>
        </div>
      </nav>
      <Notification />
      <Drawer
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
      >
        <div className="drawer">
          <div id="drawer-links-container">
            {links.map((item, index) => {
              return (
                <NavLink activeclassname="active-nav" key={index} to={item.link} onClick={() => {
                  setOpen(false);
                }}>{item.icon}{item.name}</NavLink>
              )
            })}
          </div>
          <div id="drawer-log-out"
            onClick={() => {
              window.location.reload();
              localStorage.clear();
              sessionStorage.clear();
            }}
          >
            <h4><LogoutIcon /> Log Out</h4>
          </div>
        </div>
      </Drawer>
    </>
  );
}
