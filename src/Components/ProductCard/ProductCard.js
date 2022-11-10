import React from "react";
import "./ProductCard.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import eye from "../../Assets/Icons/eye-Regular.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { acRelodeProduct } from "../../Redux/Product";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";

export function ProductCard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const products = useSelector((state) => state.products);
    const search = useSelector((state) => state.search);

    const Delete = (id) => {
        axios(`https://honey.pandashop.uz/product/delete/${id}`, {
            method: "POST",
            headers: {
                token: "Admin tokeni",
            },
        })
            .then((res) => {
                console.log(res.data.message);
                toast.success(res.data.message);
                dispatch(acRelodeProduct());
            })
            .catch((err) => {
                console.log(err.response.data);
                dispatch(acRelodeProduct());
            });
        console.log(id);
    };

    return (
        <div className="product_card_container">
            <div id="product_header">
                <p>Product List</p>
                <button
                    onClick={() => {
                        navigate("/addProduct");
                    }}
                >
                    Add new product
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <td>IMG</td>
                        <td>Maxsulot</td>
                        <td>Vazni</td>
                        <td>Xudud</td>
                        <td>Vaqti</td>
                        <td>Ko'rildi</td>
                        <td>Operation</td>
                        <td>Korish</td>
                    </tr>
                </thead>
                <tbody>
                    {products
                        .filter((item) => item.name.toLowerCase().includes(search))
                        .map((item) => {
                            const date = new Date(item.date).toLocaleDateString();
                            return (
                                <tr id="card_tr" key={item.id}>
                                    <td>
                                        <figure className="product_card_figure">
                                            <img src={item.img[0]} alt="" />
                                        </figure>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.weight}</td>
                                    <td>{item.territory}</td>
                                    <td>{date}</td>
                                    <td>{item.view}</td>
                                    <td className="button_td">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                navigate(`/edite-product/${item.id}`);
                                            }}
                                        >
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                Delete(item.id);
                                            }}
                                        >
                                            <IconButton>
                                                <DeleteIcon />
                                            </IconButton>
                                        </button>
                                    </td>
                                    <td className="button_td">
                                        <button
                                            onClick={() => {
                                                navigate(`/productView/${item.id}`);
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