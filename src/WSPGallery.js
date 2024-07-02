import "./wsp-gallery.css";
import image from "./image/red_car-removebg-preview.png";
import image2 from "./image/blue_car-removebg-preview.png";
import { useEffect, useState } from "react";

export default function WSPGallery() {
  const [image1, setimage1] = useState("this is first option");
  const [img, setimg] = useState("this is second option");
  const [photo, setphoto] = useState(image);
  const [photo2, setphoto2] = useState(image2);
  const tick = () => {
    if (image1 === img || photo === photo2) {
      setimage1("this is first option");
      setphoto(image);
    } else {
      setimage1("this is second option");
      setphoto(image2);
    }
  };

  useEffect(() => {
    const interval = setInterval(tick, 6000);
    return () => {
      clearInterval(interval);
    };
  });
  const coursor = document.querySelector(".coursor");
  document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    coursor.style.top = y + "px";
    coursor.style.left = x + "px";
    coursor.style.display = "block";
  });
  document.addEventListener("mouseout", () => {
    coursor.style.display = "none";
  });
  return (
    <div>
      <div className='coursor'></div>
      <div className='header'>
        <div className='logo'>logo</div>
        <div className='h4'>
          50/50 Split Screen Website Design - Slider Template
        </div>
        <div>
          <h3>CLEQAR</h3>
        </div>
      </div>
      <div className='container'>
        <div className='above'>
          <h1 className='one'>
            <button className='btn'>contact</button>
            <button className='btn'>about</button>
          </h1>
          <h1 className='tow'>
            <h3>50/50</h3>
          </h1>
          <h1 className='three'>
            <p>like</p>

            <p
              style={{
                borderBottom: "1px solid #fff",
                width: "90px",
                fontSize: "18px",
              }}
            >
              comment
            </p>
          </h1>
        </div>
        <div className='button'>
          <div className='di'>
            <h1 className='text'>{image1}</h1>
            <img src={photo} alt='' className='image' />
          </div>
          <button className='butt'>
            hover
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}
