import React, { useState } from 'react'
import "./AddProduct.css"

export function AddProduct() {
  const [images, setImages] = useState([])
  const [imgData, setImgData] = useState([])
  const [typeHandleSubmit, setTypeHandleSubmit] = useState([])
  return (
    <div>
      <form>
        <div>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <div>
            {imgData.map((item, index) => {
              return (
                <div key={index}>
                  <div>
                    <figure id="upload-images-crud">
                      <button
                        type="button"
                        onClick={() => {
                          setImgData(imgData.filter((item, i) => i !== index));
                        }}
                      >
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
        </div>
      </form>
    </div>
  )
}
