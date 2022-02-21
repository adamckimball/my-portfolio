import React from 'react';
import { UserCircleIcon } from '@heroicons/react/solid';

export default function About() {
  return (
    <section id="about">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <UserCircleIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            About Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I am awesome
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-1/2 h-1/2 rounded-full mx-auto"
            alt="profile_image"
            src="./profile_image.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
