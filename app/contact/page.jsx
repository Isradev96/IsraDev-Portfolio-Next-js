"use client";

import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const notifySuccess = () => toast.success("Message sent successfuly!");
  const notifyError = () => toast.error("Error to send message!");

  const form = useRef();
  const [subject, setSubject] = useState(""); // 👈 controla el Select

  const sendEmail = (e) => {
    e.preventDefault();

    // 👇 Validación manual
          if (!subject) {
            toast.warning("Please select a service before submitting."); // o tu notificación personalizada
            return;
          } 

    emailjs
      .sendForm("service_55ewc5b", "template_rdzkrp6", form.current, {
        publicKey: "JLfysdnXNYuskkx07",
      })
      .then(
        () => {
            notifySuccess();
            console.log("SUCCESS!");
            e.target.reset();
            setSubject("");
        },
        (error) => {
          notifyError();
          console.log("FAILED...", error.text);
          e.target.reset();
          setSubject("");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0 md:relative md:z-35"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[37.5rem] flex flex-col gap-12">
              {/* text */}
              <div>
                <h2 className="h2 mb-6">
                  Get In <span>Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni provident, doloremque.
                </p>
              </div>
              {/* info */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+52 322 152 4047</span>
                </div>
                {/* email */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>isradev.cortespelayo@gmail.com</span>
                </div>
                {/* location */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>Guadalajara, Jalisco.</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-6 items-start"
              >
                {/* first and last name */}
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="name">
                      Fullname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your fullname"
                      required
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>
                {/* select */}
                <div className="w-full">
                  <Label htmlFor="name">
                    I'm interested in <span className="text-accent">*</span>
                  </Label>
                  <Select
                    name="subject"
                    value={subject}
                    onValueChange={setSubject}
                  >
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-white/20">
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="UI & UX Design">UI & UX Design</SelectItem>
                      <SelectItem value="Logo Design">Logo Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    required
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50 "
                  />
                </div>
                {/* btn */}
                <button type="submit" className="btn btn-lg btn-accent">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Send Message</span>
                    <HiOutlineArrowLongRight className="text-xl" />
                  </div>
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
