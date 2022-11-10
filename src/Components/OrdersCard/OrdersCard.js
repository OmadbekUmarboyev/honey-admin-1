import React from "react";
import "./OrdersCard.css";
import { useNavigate } from "react-router-dom";
import eye from "../../Assets/Icons/view.svg";
import tick from "../../Assets/Icons/check-circle-Regular.svg";
import eks from "../../Assets/Icons/exclamation-circle-Regular.svg";
import { useSelector } from "react-redux";

export function OrderCard() {
    const navigate = useNavigate();

    const orders = useSelector((state) => state.order);

    return (
        <div id="order_card_container">
            <table>
                <thead>
                    <tr>
                        <td>Buyurtmachi</td>
                        <td>Tel</td>
                        <td>address</td>
                        <td>territory</td>
                        <td>Weight</td>
                        <td>Status</td>
                        <td>Ko'rish</td>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((item) => {
                        return (
                            <tr id="card_tr" key={item.id}>
                                <td>{item.customer}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.territory}</td>
                                <td>{item.weight}</td>
                                <td className="status_td">
                                    <figure
                                        className="status"
                                        style={
                                            item.status === 1
                                                ? { display: "flex" }
                                                : { display: "none" }
                                        }
                                    >
                                        <img src={tick} alt="" />
                                    </figure>
                                    <figure
                                        className="status"
                                        style={
                                            item.status === 1
                                                ? { display: "none" }
                                                : { display: "flex" }
                                        }
                                    >
                                        <img src={eks} alt="" />
                                    </figure>
                                </td>
                                <td>
                                    <button
                                        className="view_order_img"
                                        onClick={() => {
                                            navigate(`/order_view/${item.id}`); 
                                        }}
                                    >
                                        <img src={eye} alt="" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}