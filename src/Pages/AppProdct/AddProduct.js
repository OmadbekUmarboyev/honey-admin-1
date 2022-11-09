import React, { useState } from 'react'
import "./AddProduct.css"

export function AddProduct() {
  const [images, setImages] = useState([])
  const [imgData, setImgData] = useState([])
  const [typeHandleSubmit] = useState([])
  const [product, setProduct] = useState({
    name: "",
    about: "",
    area: "",
    cost: "",
    weight: "",
  });

  const inputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  console.log(product);
  return (
    <div>
      <form>
        <div>
          <div>
            <input type="text"
              name='name'
              placeholder='Name...'
              onChange={inputChange}
              value={product.name}
            />
            <input type="text"
              placeholder='Area...'
              name='area'
              onChange={inputChange}
              value={product.area}
            />
          </div>
          <div>
            <input type="number"
              placeholder='Cost...'
              name='cost'
              onChange={inputChange}
              value={product.cost}
            />
            <input type="text"
              placeholder='Weight...'
              name='weight'
              onChange={inputChange}
              value={product.weight}
            />
          </div>
          <div>
            {imgData.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <figure id="upload-images-crud">
                      <button
                        type="button"
                        onClick={() => { setImgData(imgData.filter((item, i) => i !== index)); }}>
                        X
                      </button>
                      <img style={typeHandleSubmit === "Add Product" ? { display: "block" } : { display: "none" }} src={typeHandleSubmit === "Add Product" ? URL.createObjectURL(item) : {}} alt="" />
                    </figure>
                  </div>
                </div>
              );
            })}
            <label
              id="upload-images-crud-add-label"
              style={imgData.length === 4 ? { pointerEvents: "none" } : {}}
            >
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                multiple="multiple"
                onChange={(e) => {
                  setImages([...images, ...e.target.files]);
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
              Choose Image
            </label>

          </div>
          <textarea name="about"
            onChange={inputChange}
            value={product.about}
            id="" cols="30" rows="10" placeholder='About product...'>

          </textarea>
        </div>
      </form>
    </div>
  )
}
