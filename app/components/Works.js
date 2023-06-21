"use client";
import works from "../datas/works.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./components.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

export default function Works() {
  return (
    <section className={styles.workBlock} id="worksBlock">
      <h2>Mes différents travaux</h2>
      <div className={styles.carousel}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={75}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          style={{ height: "450px", width: "750px" }}
        >
          {works.map((work) => (
            <SwiperSlide key={work.id} className={styles.swipe}>
              <img
                src={work.image}
                style={{
                  width: "750px",
                  height: "450px",
                  opacity: "0.2",
                }}
              />
              <div style={{ position: "absolute", top: "0" }}>
                <h4>{work.title}</h4>
                <p>{work.description}</p>
                <a href={work.url}>{work.captionUrl}</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
