import "./Slider.css";
import { useState } from "react";

function Slider() {
  const imageUrls = [
    "https://image.univstore.com/20250113_dyson_dyson_brandweek_web_maintop_DDDDFE.png",
    "https://image.univstore.com/20250403_apple_ipadair_m3_preorder_web_maintop.jpg",
    "https://image.univstore.com/20250327_apple_mba_m4_preorder_164200_web_maintop.jpg",
    "https://image.univstore.com/20250403_samsung_galaxytabs10fe_6688b9_web_maintop.png",
    "https://image.univstore.com/20250407_canon_powershotv1_launching_web_maintop_CFCFCF.jpg",
    "https://image.univstore.com/20250219_sennheiser_nukak_v2_c9ced2_web_maintop.png",
    "https://image.univstore.com/20250211_samsung_tabphone_web_maintop.png",
    "https://image.univstore.com/20250217_sony_audio_brandweek_ebdcd7_web_maintop.png",
    "https://image.univstore.com/20250407_perfumehub_brandweek_web_maintop.png",
    "https://image.univstore.com/20250401_samsung_galaxybook5_promotion_e6ffe5_web_maintop.png",
    "https://image.univstore.com/20250407_lg_gram_lunarlake_launching_rev2_fbd8ec_web_maintop.png",
    "https://image.univstore.com/20250317_bose_brandweek_faf0f0_web_maintop.png",
    "https://image.univstore.com/20250407_microsoft_windows11_eos_fff8f3_web_maintop.png",
    "https://image.univstore.com/20250113_dyson_dyson_brandweek_web_maintop_DDDDFE.png",
    "https://image.univstore.com/20250403_apple_ipadair_m3_preorder_web_maintop.jpg",
  ];
  const bgColors = [
    "#ddddff",
    "#FFFFFF",
    "#FFFFFF",
    "#6588b8",
    "#cecece",
    "#c9ced2",
    "#dae7e9",
    "#ebdcd7",
    "#ffe0ed",
    "#e6ffe5",
    "#fbd9ed",
    "#faf0f0",
    "#fff8f3",
    "#ddddff",
    "#FFFFFF",
  ];
  const imageLength = imageUrls.length;

  const [page, setPage] = useState(0);

  const nextPage = () => {
    page < imageLength - 1 ? setPage(page + 1) : setPage(0);
  };

  const previousPage = () => {
    page > 0 ? setPage(page - 1) : setPage(imageLength - 1);
  };

  return (
    <div className="slider-wrapper" style={{backgroundColor: bgColors[page]}}>
      <div className="slider template">
        {imageUrls.map((imageUrl) => (
          <a
            href="#"
            className="slider-item"
            style={{ right: page * 100 + "%" }}
          >
            <img src={imageUrl} alt="이미지를 불러올 수 없음" />
          </a>
        ))}
        <div className="slider-left-button" onClick={previousPage}></div>
        <div className="slider-right-button" onClick={nextPage}></div>
        <div className="slider-dot-wrapper">
          {imageUrls.map((_, i) => (
            <span
              className="slider-dot"
              onClick={() => {
                setPage(i);
              }}
              style={{ opacity: page == i ? 1 : 0.2 }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
