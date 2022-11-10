import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { acAppbar } from "../../Redux/Appbar";
import "./Appbar.css";
import { NavLink } from "react-router-dom";
import productIcon from "../../Assets/Icons/package-Light.svg";
import ordericon from "../../Assets/Icons/shopping-basket-Light.svg";
import logout from "../../Assets/Icons/log-out-Light.svg";
import homeicon from "../../Assets/Icons/home-Light.svg";
// import statics from "../../Assets/Icons/Line Chart.svg";
import cubs from "../../Assets/Icons/Widget_add(1).svg";

export function Appbar() {
  const appbar = useSelector((state) => state.appbar);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className === "appbar_body open") {
        dispatch(acAppbar(false));
      }
    });
  }, [dispatch]);

  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
      img: homeicon,
      className: "",
    },
    {
      id: 2,
      link: "/product",
      name: "Product",
      img: productIcon,
      className: "",
    },
    {
      id: 3,
      link: "/order",
      name: "Order",
      img: ordericon,
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
      link: "/add_product",
      name: "Add Product",
      img: cubs,
      className: "appbarMigrants",
    },
  ];

  return (
    <div className={appbar ? "appbar_body open" : "appbar_body"}>
      <aside>
        <button
          type="button"
          onClick={() => {
            dispatch(acAppbar(false));
          }}
        >
          X
        </button>

        <div id="links_container">
          {links.map((item) => {
            return (
              <NavLink
                className={item.className}
                to={item.link}
                onClick={() => {
                  dispatch(acAppbar(false));
                }}
                key={item.id}
              >
                <img src={item.img} alt="" />
                <p className={item.className}>{item.name}</p>
              </NavLink>
            );
          })}
        </div>

        <NavLink
          to=""
          onClick={() => {
            window.location.reload();
            localStorage.clear();
            sessionStorage.clear();
          }}
        >
          <img src={logout} alt="" />
          Log out
        </NavLink>
      </aside>
    </div>
  );
}
