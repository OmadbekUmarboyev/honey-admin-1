import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { acProducts } from "../Redux/Product";
import { acLoading } from "../Redux/Loading";
import { useSelector } from "react-redux";
import { acOrder } from "../Redux/Order";
import { acMostSeen } from "../Redux/MostSeen";

export function Config() {
  const dispatch = useDispatch();

  const relodeProduct = useSelector((state) => state.relodeProduct);

  const api = process.env.REACT_APP_API;

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get("https://honey.pandashop.uz/product/view", {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acProducts(res.data));
        dispatch(acLoading(false));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err);
      });
  }, [dispatch, relodeProduct, api]);

  useEffect(() => {
    dispatch(acLoading(true));
    axios
      .get("https://honey.pandashop.uz/order/view", {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acOrder(res.data));
        dispatch(acLoading(false));
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err);
      });
  }, [dispatch, relodeProduct, api]);

  useEffect(() => {
    axios
      .get("https://honey.pandashop.uz/product/mostviewed", {
        headers: {
          token: "token",
        },
      })
      .then((res) => {
        dispatch(acMostSeen(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, relodeProduct, api]);

  return null;
}
