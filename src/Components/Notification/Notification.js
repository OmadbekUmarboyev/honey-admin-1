import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { acNotification } from "../../Redux/Notification";
import "./Notification.css";

export function Notification() {
  const [redDot, setRedDot] = useState(false);

  const noti = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className === "notifcation_body open") {
        dispatch(acNotification(false));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (orders.length === 0) {
      setRedDot(false);
    } else {
      setRedDot(true);
    }
  }, [redDot, orders]);

  return (
    <div className={noti ? "notifcation_body open" : "notifcation_body"}>
      <div className="notifcation_card">
        <button
          type="button"
          onClick={() => {
            dispatch(acNotification(false));
          }}
        >
          X
        </button>
        <div className="noti_card_container">
          {orders.length === 0 ? (
            <p>No Message</p>
          ) : orders.length === 0 ? (
            ""
          ) : (
            <button
              className="noti_order_card"
              onClick={() => {
                dispatch(acNotification(false));
                navigate("/order");
              }}
            >
              You have <span>{orders.length}</span>
              {orders.length <= 1 ? "order" : "orders"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
