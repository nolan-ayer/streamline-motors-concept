"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Header.module.css";
import PromoItem from "./PromoItem";
import { useEffect, useState } from "react";

export default function HeaderPromo() {
  // const [count, setCount] = useState(3);

  // effect doesn't update state on first render, only on resize
  // useEffect(() => {
  //   resizeDetect();
  // }, []);

  // const resizeDetect = () => {
  //   window.addEventListener("resize", () => {
  //     if (screen.availWidth > screen.availHeight) {
  //       setCount(5);
  //     } else {
  //       setCount(3);
  //     }
  //   });
  // };

  const images = [
    {
      id: 0,
      imgLo:
        "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgHi:
        "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 1,
      imgLo:
        "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=300",
      imgHi:
        "https://images.pexels.com/photos/253096/pexels-photo-253096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      imgLo:
        "https://images.pexels.com/photos/10896494/pexels-photo-10896494.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imgHi:
        "https://images.pexels.com/photos/10896494/pexels-photo-10896494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      imgLo:
        "https://images.pexels.com/photos/8622800/pexels-photo-8622800.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imgHi:
        "https://images.pexels.com/photos/8622800/pexels-photo-8622800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      imgLo:
        "https://images.pexels.com/photos/12920348/pexels-photo-12920348.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      imgHi:
        "https://images.pexels.com/photos/12920348/pexels-photo-12920348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      imgLo:
        "https://images.pexels.com/photos/8921708/pexels-photo-8921708.jpeg?auto=compress&cs=tinysrgb&w=400",
      imgHi:
        "https://images.pexels.com/photos/8921708/pexels-photo-8921708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      imgLo:
        "https://images.pexels.com/photos/9679092/pexels-photo-9679092.jpeg?auto=compress&cs=tinysrgb&w=400",
      imgHi:
        "https://images.pexels.com/photos/9679092/pexels-photo-9679092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      imgLo:
        "https://images.pexels.com/photos/4077271/pexels-photo-4077271.jpeg?auto=compress&cs=tinysrgb&w=400",
      imgHi:
        "https://images.pexels.com/photos/4077271/pexels-photo-4077271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      imgLo:
        "https://images.pexels.com/photos/4147623/pexels-photo-4147623.jpeg?auto=compress&cs=tinysrgb&w=400",
      imgHi:
        "https://images.pexels.com/photos/4147623/pexels-photo-4147623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      imgLo:
        "https://images.pexels.com/photos/8445451/pexels-photo-8445451.jpeg?auto=compress&cs=tinysrgb&w=400",
      imgHi:
        "https://images.pexels.com/photos/8445451/pexels-photo-8445451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      imgLo:
        "https://images.pexels.com/photos/14554495/pexels-photo-14554495.jpeg?auto=compress&cs=tinysrgb&w=400",
      imgHi:
        "https://images.pexels.com/photos/14554495/pexels-photo-14554495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const renderImages = images.map(({ id, imgLo, imgHi }) => {
    return (
      <SwiperSlide key={id}>
        <PromoItem imgLo={imgLo} imgHi={imgHi} />
      </SwiperSlide>
    );
  });

  return (
    <div className={styles.swiper}>
      <Swiper
        loop={true}
        autoplay={{ delay: 900 }}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          // 480: {
          //   slidesPerView: 3,
          // },
          1280: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        // slidesPerView={count}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        speed={1800}
        updateOnWindowResize={true}
      >
        {renderImages}
      </Swiper>
    </div>
  );
}
