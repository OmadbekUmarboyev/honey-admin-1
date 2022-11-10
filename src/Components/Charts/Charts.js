import React, { useEffect, useState } from "react";
import "./Charts.css";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Number of Visitors for the last 30 days",
        },
    },
};

export function Charts() {
    const api = process.env.REACT_APP_API;
    const [guests, setGuests] = useState([]);
    useEffect(() => {
        axios(`https://honey.pandashop.uz/guest/view/${30}`)
            .then((res) => {
                setGuests(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [api]);

    const labels = [];
    const amaunt = [];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Number of guests",
                backgroundColor: "#c7c7c7",
                border: "none",
                data: amaunt,
                borderRadius: 5,
            },
        ],
    };

    guests.map((item) => {
        labels.push(item.date);
        amaunt.push(item.quantity);
        return null;
    });

    return (
        <div id="reportGuests">
            <Bar options={options} data={data} />
        </div>
    )
}