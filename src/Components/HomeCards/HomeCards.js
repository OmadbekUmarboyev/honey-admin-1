import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./HomeCards.css";

export function HomeCards() {
  const product = useSelector((state) => state.products);
  const order = useSelector((state) => state.order);
  const [guest, setGuest] = useState([]);

  useEffect(() => {
    axios(`https://honey.pandashop.uz/guest/view`)
      .then((res) => {
        setGuest(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const HomeData = [
    {
      id: 1,
      className: "home_card1",
      name: "Maxsulotlar Soni",
      numbers: product.length + " dona",
    },
    {
      id: 2,
      className: "home_card2",
      name: "Umumiy narxi",
      numbers: "",
    },
    {
      id: 3,
      className: "home_card3",
      name: "Buyurtmalar",
      numbers: order.length + "   dona",
    },
    {
      id: 4,
      className: "home_card4",
      name: "Sayt mexmonlari",
      numbers: "2 345 nafar",
    },
    {
      id: 5,
      className: "home_card5",
      name: "Sayt mexmonlari(kunlik)",
      numbers: guest.map((item) => {
        const date = item.date.split("/").join(".");
        const now = new Date().toLocaleDateString();
        return <p key={item.id}>{date === now ? item.quantity : ""}</p>;
      }),
    },
    {
      id: 6,
      className: "home_card6",
      name: "Foydalanuvchilar",
      numbers: "3 214 nafar ",
    },
  ];

  return (
    <div id="homecard_container">
      {HomeData.map((item) => {
        return (
          <div className={item.className} key={item.id}>
            <p>{item.name}</p>
            <span>{item.numbers}</span>
          </div>
        );
      })}
    </div>
  );
}
