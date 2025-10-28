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
      "Me ayudaron a crear un sitio elegante y fácil de navegar. Desde el lanzamiento, he ganado visibilidad. Fue justo lo que necesitaba para profesionalizar mi presencia digital.",
    name: "Natalia GGG",
  },
  {
    message:
      "El sitio no solo refleja bien lo que hacemos, también nos ayudó a aparecer en Google y recibir más mensajes por WhatsApp. Todo fue claro, rápido y con mucha atención al detalle. Recomendado al 100%.",
    name: "TecnoPro",
  },
  {
    message:
      "¡Me encantó el sitio web! Es moderno, rápido y permite que los clientes reserven en línea sin complicaciones. Incluso agregaron una galería de cortes y una sección con reseñas reales.",
    name: "La Costa Barbershop",
  },
  {
    message:
      "La página es rápida, atractiva y se adapta perfecto al celular. Hemos notado más visitas y mejores comentarios. ¡Sin duda fue una gran inversión para crecer digitalmente!",
    name: "Restaurante Soraya",
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
            <div className="flex flex-col px-8 py-6 gap-6">
                <ImQuotesLeft className="xl:flex text-2xl text-accent"/>
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
