import React, { useEffect, useState } from "react";
import "./MostSeen.css";
import view from "../../Assets/Icons/view.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';

export function MostSeen() {
  const [showData, setShowData] = useState({});
  const [image, setImage] = useState([]);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const mostseen = useSelector((state) => state.mostseen);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target.className === "mostseen_modal_body open") {
        setModal(!modal);
      }
    });
  });

  return (
    <>
      <div id="mostseen">
        <p>Eng ko'p korilgan maxsulotlar</p>
        <div className="mostseen_container">
          {mostseen.map((item) => {
            return (
              <div className="mostseen_card" key={item.id}>
                <div className="mostseen_about">
                  <p>{item.name}</p>

                  <div>
                    <button
                      onClick={() => {
                        navigate("/product_id");
                      }}
                    >
                      <img src={view} alt="" />
                    </button>
                    <span>{item.view} marotaba ko'rilgan </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setModal(!modal);
                    setShowData(item);
                    setImage(item.img[0]);
                  }}
                >
                  Batafsil
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={modal ? "mostseen_modal_body open" : "mostseen_modal_body"}
      >
        <div
          className={modal ? "mostseen_modal_card open" : "mostseen_modal_card"}
        >
          <button
            onClick={() => {
              setModal(!modal);
            }}
          >
            <CloseIcon />
          </button>
          <div className="mostseen_modal_img">
            <figure>
              <img src={image} alt="" />
            </figure>
          </div>
          <div id="most-seen-modal-about">
            <div>
              <h4>Honey Id :</h4>
              <p>{showData.id}</p>;
            </div>
            <div>
              <h4>
                Honey Name :
              </h4>
              <p>{showData.name}</p>;
            </div>
            <div>
              <h4>
                Honey About:
              </h4>
              <p id="most-seen-about-item">{showData.about}</p>;
            </div>
            <div>
              <h4>
                Honey Price :
              </h4>
              <p>{showData.price}</p>;
            </div>
            <div>
              <h4>
                Honey Weight :
              </h4>
              <p>
                {showData.weight} gramm;
              </p>
            </div>
            <div>
              <h4>
                Honey Area :
              </h4>
              <p>{showData.territory}</p>;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
