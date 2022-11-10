import React, { useEffect, useState } from "react";
import "./AddProduct.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { acLoading } from "../../Redux/Loading";
import { toast } from "react-toastify";
import { acRelodeProduct } from "../../Redux/Product";

export function EditeProduct() {
  const [value, setValue] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(acLoading(true));
    axios(`https://honey.pandashop.uz/product/view/${id}`)
      .then((res) => {
        dispatch(acLoading(false));
        setValue(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(acLoading(false));
      });
  }, [id, dispatch]);

  return (
    <div id="add_product">
      <form
        id="add_form"
        onSubmit={(e) => {
          e.preventDefault();
          const data = JSON.stringify({
            id: value.id,
            name: value.name,
            price: value.price,
            about: value.about,
            territory: value.territory,
            weight: value.weight,
          });
          axios("https://honey.pandashop.uz/product/update/text", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: admin.token,
            },
            data,
          })
            .then((res) => {
              toast.success(res.data.message);
              dispatch(acRelodeProduct());
              navigate("/products")
            })
            .catch((err) => {
              navigate("/products")
              dispatch(acRelodeProduct());
              toast.error(err.response.data.message);
            });
          setValue({});
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Nomi"
            name="name"
            value={value.name || ""}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Narxi"
            name="price"
            value={value.price || ""}
            onChange={(e) => setValue({ ...value, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Xududi"
            name="territory"
            value={value.territory || ""}
            onChange={(e) => setValue({ ...value, territory: e.target.value })}
          />
          <input
            type="text"
            placeholder="Og’irligi  650g"
            name="weight"
            value={value.weight || ""}
            onChange={(e) => setValue({ ...value, weight: e.target.value })}
          />
        </div>
        {/* <div id="img_card">
          {imgData.map((img, index) => {
            return (
              <figure key={index} id="figure">
                <button
                  type="button"
                  onClick={() => {
                    setImgData(imgData.filter((item, i) => i !== index));
                  }}
                >
                  <img src={trash} alt="" />
                </button>
                <img src={URL.createObjectURL(img)} alt="" />
              </figure>
            );
          })}
          <label style={imgData.length === 4 ? { display: "none" } : {}}>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              multiple="multiple"
              onChange={(e) => {
                const MyFiles = [...imgData];
                for (let i = 0; i < e.target.files.length; i++) {
                  if (MyFiles.length < 4) {
                    MyFiles.push(e.target.files[i]);
                  } else {
                    MyFiles.splice(0, 1);
                    MyFiles.push(e.target.files[i]);
                  }
                }
                setImgData(MyFiles);
              }}
            />
            <img src={add} alt="" />
          </label>
        </div> */}
        <div id="add_form_last">
          <textarea
            name="about"
            value={value.about || ""}
            onChange={(e) => setValue({ ...value, about: e.target.value })}
            placeholder="Maxsulot xaqida..."
          />
          <button>Maxsulotni Taxrirlash</button>
        </div>
      </form>
    </div>
  );
}
