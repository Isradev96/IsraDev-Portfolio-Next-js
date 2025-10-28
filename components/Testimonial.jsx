"use client";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper required modules
import { Autoplay } from "swiper/modules";
//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";

//data
const testimonial = [
  {
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus exercitationem cupiditate commodi quas veniam doloribus.",
    name: "Juan Perez",
  },
  {
    message:
      "Excelente servicio lo recomiendo por muy buenos que fueron con mi página web.",
    name: "Pedro López",
  },
  {
    message:
      "Los mejores sin duda, me ayudaron mucho con mi tienda en linea y mil gracias por todo.",
    name: "Carmen Salinas",
  },
];
const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
            <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
                <ImQuotesLeft className="hidden xl:flex text-8xl text-accent"/>
                <div className="flex flex-col gap-2">
                    <p>{person.message}</p>
                    <p className="self-end text-accent font-semibold">{person.name}</p>
                </div>
            </div>
            </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default Testimonial;
