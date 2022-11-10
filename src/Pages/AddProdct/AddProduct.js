import React, { useState } from "react";
import "./AddProduct.css";
import add from "../../Assets/Icons/Add Img.svg";
import trash from "../../Assets/Icons/trash-Regular.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { acRelodeProduct } from "../../Redux/Product";
import { toast } from "react-toastify";

export function AddProduct() {
  const [imgData, setImgData] = useState([]);
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    about: "",
    price: "",
    territory: "",
    weight: "",
  });

  const api = process.env.REACT_APP_API;

  const dispatch = useDispatch();
  const newproduct = JSON.stringify(product);

  function productAdd(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; images.length > i; i++) {
      formData.append("img", images[i]);
    }
    formData.append("data", newproduct);

    axios(
      `${api}/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      },
      dispatch(acLoading(true))
    )
      .then((res) => {
        dispatch(acLoading(false));
        console.log(res.data.message);
        toast.success(res.data.message);
        dispatch(acRelodeProduct());
      })
      .catch((err) => {
        dispatch(acLoading(false));
        console.log(err.response.data);
        toast.error(err.data.message);
        dispatch(acRelodeProduct());
      });
    setProduct({
      name: "",
      about: "",
      price: "",
      territory: "",
      weight: "",
    });
    setImages([]);
    setImgData([]);
  }

  return (
    <div id="add_product">
      <form
        id="add_form"
        onSubmit={(e) => {
          productAdd(e);
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Nomi"
            name="name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Narxi"
            name="price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="text"
            placeholder="Xududi"
            name="territory"
            value={product.territory}
            onChange={(e) =>
              setProduct({ ...product, territory: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Og'irligi  650g"
            name="weight"
            value={product.weight}
            onChange={(e) => setProduct({ ...product, weight: e.target.value })}
          />
        </div>
        <div id="img_card">
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
                setImages([...images, ...e.target.files]);
                console.log(imgData);
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
        </div>
        <div id="add_form_last">
          <textarea
            placeholder="Maxsulot xaqida..."
            name="about"
            value={product.about}
            onChange={(e) => setProduct({ ...product, about: e.target.value })}
          />
          <button>Maxsulotni Qo'shish</button>
        </div>
      </form>
    </div>
  );
}
