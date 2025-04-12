"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import { motion } from "framer-motion";

import Image from "next/image";
import { GlobalHeading } from "../../components/GlobalHeading";

const testimonials = [
  {
    text: "“Absolutely mind-blowing! The project was a game changer. I got top grade in the college presentation.”",
    name: "Aayushi Vaishnav",
    title: "Student @ SRM University",
    avatarImg: avatar1,
  },
  {
    text: "“The process was so simple, and the results were beyond my expectations.”",
    name: "Himanshu Gupta",
    title: "Student @ Amity University",
    avatarImg: avatar2,
  },
  {
    text: "“It saved my grades. I was able to focus on my interviews as the tedious task was handled by Projectverse.”",
    name: "Satyajit Chakraborty",
    title: "Student @ VIT, Vellore",
    avatarImg: avatar3,
  },
  {
    text: "“Absolutely Value for money! My resume was uplifted and I indeed got offers by virtue of this project.”",
    name: "Meghna Das",
    title: "Student @ UEM, Kolkata",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24 w-[90%] m-auto md:container">
      <div className="container">
        <GlobalHeading
          title="User Reviews"
          subTitle="Hear from Our Community.!"
        />

        <div className="  mt-10 flex overflow-hidden  md:gap-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{
              translateX: "0%",
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: "50",
              },
            }}
            className="flex gap-5 flex-none  pl-1 "
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="p-6 md:p-10 rounded-lg border-white/15 flex-none border bg-[linear-gradient(to_bottom_left,rgb(226,83,25,.3),black)] max-w-xs md:max-w-md"
              >
                <div className="mb-4 text-lg tracking-tight md:text-lg font-tomorrow">
                  {testimonial.text}
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative after:contents-[''] after:absolute after:inset-0 after:bg-[rgba(25,65,226,0.3)] after:mix-blend-soft-light before:contents-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt=""
                      className="rounded-lg w-11 grayscale"
                    />
                  </div>
                  <div className="font-tomorrow">
                    <p>{testimonial.name}</p>
                    <p className="text-sm text-white/50 font-light ">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
