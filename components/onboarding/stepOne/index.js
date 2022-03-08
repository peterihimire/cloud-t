import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Form from "../form/index";
import CameraIcon from "../../../public/images/camera-icon.svg";

const StepOne = ({ clicked, step }) => {
  const [hasImage, setHasImage] = useState(false);

  const fileClick = () => {
    document.getElementById("myfile").click();
    setHasImage(true);
  };

  function generateAvatar(
    text,
    foregroundColor = "white",
    backgroundColor = "black"
  ) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 200;
    canvas.height = 200;

    // Draw background
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = "100px Noto-Bold";
    context.fillStyle = foregroundColor;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL("image/png");
  }

  useEffect(() => {
    // window.addEventListener("load", () => {
    //   document.getElementById("user-img").src = generateAvatar(
    //     "K",
    //     "white",
    //     "#5D55FF"
    //   );
    //   console.log('loaded!')
    // });
    setTimeout(() => {
      document.getElementById("user-img").src = generateAvatar(
        "K",
        "white",
        "#5D55FF"
      );
    }, 300);
  }, []);

  return (
    <>
      <div className={styles.content}>
        <div className={styles.contentWrap}>
          <div className={styles.grid}>
            {step === 1 && (
              <div className={styles.gridLeft}>
                <div className={styles.gridImg}>
                  <img alt="profile" id="user-img" src="" />

                  <input
                    type="file"
                    name="photo"
                    id="myfile"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      const image = document.getElementById("user-img");
                      image.src = URL.createObjectURL(e.target.files[0]);
                    }}
                    accept="image/jpg, image/jpeg, image/png"
                  />

                  <button onClick={fileClick}>
                    <CameraIcon />
                  </button>
                </div>
              </div>
            )}
            <div className={styles.gridRight}>
              <Form clicked={clicked} step={step} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepOne;
