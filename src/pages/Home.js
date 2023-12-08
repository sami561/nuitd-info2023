import React from "react";
import { motion } from "framer-motion";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/glace.jpg" className="bg-image" />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="pargraphSwipper">
              <div className="innerpargraphSwipper">
                <p className="pSwipper">
                  Les glaciers qui fondent sont un signe visible du changement
                  climatique, car ils sont sensibles aux variations de
                  température.
                  <p>
                    {" "}
                    Avec l'augmentation des températures, les glaciers fondent à
                    un rythme croissant, ce qui peut avoir des impacts
                    significatifs sur les écosystèmes et les réserves d'eau.
                  </p>
                </p>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/fire.jpg" className="bg-image" />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="pargraphSwipper">
              <div className="innerpargraphSwipper">
                <p className="pSwipper">
                  Le changement climatique peut également entraîner des
                  sécheresses plus fréquentes et plus graves, ayant des impacts
                  significatifs sur les écosystèmes et les réserves d'eau. Les
                  températures plus élevées et les conditions plus sèches
                  peuvent réduire la quantité d'eau disponible pour les plantes
                  et les animaux, et peuvent également provoquer des incendies
                  de forêt plus fréquents et plus graves.
                </p>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/desert.jpg" className="bg-image" />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="pargraphSwipper">
              <div className="innerpargraphSwipper">
                <p className="pSwipper">
                  Les glaciers qui fondent sont un signe visible du changement
                  climatique, car ils sont sensibles aux variations de
                  température. Avec l'augmentation des températures, les
                  glaciers fondent à un rythme croissant, ce qui peut avoir des
                  impacts significatifs sur les écosystèmes et les réserves
                  d'eau.
                </p>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
