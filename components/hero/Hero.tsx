"use client";
import { LandmarkCardProps } from "@/util/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
//import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import OtherInfo from "./OtherInfo";

const Hero = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {landmarks.map((landmark) => {
          return (
            <SwiperSlide className="group" key={landmark.image}>
              <div className="relative rounded-md overflow-hidden w-full h-[600px]">
                {/* <img className ="w-full h-[600px] object-cover brightness-75 group-hover:brightness-50 transition-all duration-300" src={item.image} alt= "" /> */}
                <Image
                  src={landmark.image}
                  alt=""
                  fill
                  priority
                  className="object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full z-50 px-5 md:px-10 mb-4">
                  <OtherInfo landmark={landmark} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default Hero;
