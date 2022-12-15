import React from "react";
import { MailIcon } from "@heroicons/react/solid";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <MailIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1>
        </div>
        <div className="lg:w-4/5 sm:mx-auto bg-gray-800 py-6 px-6 mx-auto flex flex-wrap">
          <div className="sm:w-1/2 w-full px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-s">
              EMAIL
            </h2>
            <p className="leading-relaxed">
              adamkimballdev@gmail.com
            </p>
          </div>
          <div className="sm:w-1/2 w-full px-6 sm:mt-0 mt-4"></div>
        </div>
      </div>
    </section>
  )
}
