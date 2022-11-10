import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { acLoading } from "../../Redux/Loading";
import honey from "../../Assets/Images/Honey Initial.png"
import "./ViewOrder.css";

export function ViewOrder() {
  const [productData, setProductData] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get(`https://honey.pandashop.uz/order/view/${id}`, {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acLoading(false));
        setProductData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err);
      });
  }, [id, dispatch]);

  return (
    <div id="view_order">
      <div id="view_order_card">
        <div id="view_orer_img_card">
          <figure>
            <img src={productData.img ? honey : productData.img} alt={honey} />
          </figure>
        </div>
        <div id="view_order_about_card">
          <p>
            {productData.name} {productData.weight}g {productData.territory}
          </p>
          <p>Vaqti: {productData.date} </p>
          <p>Narxi: {productData.price}sum </p>
        </div>
      </div>
    </div>
  );
}