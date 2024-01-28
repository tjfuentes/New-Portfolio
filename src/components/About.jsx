import React from "react";
import { Links } from "../side";
const About = () => (
  <section>
    <aside className="bg-primary h-[50vh] w-[10vw] flex flex-col justify-evenly items-center rounded-md">
      <img src="me.jpg" alt="me-img" />
      {Links.map((link) => (
        <h3 className="text-[30px] font-medium hover:text-[#ffffff] hover:cursor-pointer">
          {link}
        </h3>
      ))}
    </aside>
  </section>
);

export default About;
