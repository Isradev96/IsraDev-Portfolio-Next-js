"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper modules
import { Autoplay, Pagination } from "swiper/modules";
//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

//Data
const projects = [
  {
    id: 1,
    category: "Frontend",
    title: "Real State Landing Page",
    description: "React + Tailwind landing page",
    image: "/assets/work/work2.png",
    link: "https://homely-real-state.netlify.app/",
    github: "https://github.com/Isradev96/Real-state-webpage",
    tech: ["React", "Tailwind CSS", "Swiper js"],
  },
  {
    id: 2,
    category: "Frontend",
    title: "Dental Website",
    description: "Next.js Dental Website",
    image: "/assets/work/work3.png",
    link: "https://dentaly-bussiness.netlify.app/",
    github: "https://github.com/Isradev96/Dental-webpage",
    tech: ["Next.js", "Tailwind CSS", "Swiper js"],
  },
  // {
  //   id: 3,
  //   category: "Fullstack",
  //   title: "AuthBoard Dashboard",
  //   description: "MERN app with authentication",
  //   image: "/assets/work/thumb3.png",
  //   link: "",
  //   github: "",
  //   tech: ["MongoDB", "Express", "React", "Node.js"],
  // },
  // {
  //   id: 4,
  //   category: "Fullstack",
  //   title: "ChatSync Platform",
  //   description: "Real-time MERN app with chat functionality",
  //   image: "/assets/work/thumb4.png",
  //   link: "",
  //   github: "",
  //   tech: ["MERN", "Socket.IO", "Redux"],
  // },
  {
    id: 5,
    category: "UI/UX",
    title: "FlowMobile App Design",
    description: "Mobile-first Figma design",
    image: "/assets/work/thumb1.png",
    link: "https://nataliaggg.com/",
    github: "",
    tech: ["Figma", "Adobe XD"],
  },
  {
    id: 6,
    category: "UI/UX",
    title: "ShopEase Dashboard Redesign",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb2.png",
    link: "https://nataliaggg.com/",
    github: "",
    tech: ["Figma", "Framer", "Photoshop"],
  },
  {
    id: 7,
    category: "Branding",
    title: "Brewhaus Brand Identity",
    description: "A bold and earthy visual identity for a modern coffee brand",
    image: "/assets/work/thumb3.png",
    link: "https://tecnoprobadeba.com/",
    github: "",
    tech: ["Figma", "Ilustrator", "Photoshop"],
  },
  {
    id: 8,
    category: "Branding",
    title: "LunaSkin Luxury Branding",
    description: "Elegant branding for a premium skincare product line",
    image: "/assets/work/thumb4.png",
    link: "https://nataliaggg.com/",
    github: "",
    tech: ["Figma", "Canva", "Photoshop"],
  },
  {
    id: 9,
    category: "Branding",
    title: "NovaTech Brand Kit",
    description:
      "Full branding kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb1.png",
    link: "https://nataliaggg.com/",
    github: "",
    tech: ["Ilustrator", "Figma", "Notion"],
  },
  {
    id: 10,
    category: "Frontend",
    title: "AI Agency Landing Page",
    description: "React & Tailwind CSS project",
    image: "/assets/work/work4.png",
    link: "https://ai-agency-pixelart.netlify.app/",
    github: "https://github.com/Isradev96/AI-Agency-webpage",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Swiper js"],
  },
  {
    id: 11,
    category: "Frontend",
    title: "TecnoPro Landing Page",
    description: "HTML, CSS, JavaScript Project",
    image: "/assets/work/work6.png",
    link: "https://tecnoprobadeba.com/",
    github: "",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 12,
    category: "Frontend",
    title: "Natalia GGG Landing Page",
    description: "HTML, CSS, JavaScript Project",
    image: "/assets/work/work5.png",
    link: "https://nataliaggg.com/",
    github: "https://github.com/Isradev96/Natalia-GGG",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 13,
    category: "Frontend",
    title: "PixelArt Web & Design Website",
    description: "WordpPress Project",
    image: "/assets/work/work7.png",
    link: "https://pixelartweb.com/",
    github: "",
    tech: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    id: 14,
    category: "Frontend",
    title: "Pokedex With React",
    description: "Pokedex Project",
    image: "/assets/work/work8.png",
    link: "https://pokedex-react-isradev.netlify.app/",
    github: "https://github.com/Isradev96/Pokedex-React",
    tech: ["React", "Fetch API", "CSS"],
  },
];

const categories = ["Frontend"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="Frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true, dynamicBullets: true}}
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: true }}
                  spaceBetween={30}
                  className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* btns */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
                                  <Link href={project.link} target="blank">
                                    <button aria-label="Live Projects" className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward aria-hidden="true" className="text-xl"/>
                                      <span>Live Projects</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github} target="blank">
                                    <button aria-label="Git Repo" className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub aria-hidden="true" className="text-xl"/>
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
