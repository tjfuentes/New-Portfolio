import React from "react";

const Home = () => (
  <section className="flex">
    <article>
      <h2 className="text-[50px]">HI THERE!</h2>
      <h1 className="text-[64px]">
        I'M <span className="text-primary font-bold">TYNNETH</span>
      </h1>
      <h4 className="text-[18px] font-bold">FULL STACK WEB DEVELOPER</h4>
      <p className="text-justify my-4 w-[20vw]">
        Passionate and versatile Full Stack Web Developer with a strong
        foundation in front-end and back-end technologies. Skilled in building
        dynamic and responsive web applications using{" "}
        <span className="text-primary font-medium">HTML</span>,
        <span className="text-primary font-medium">CSS</span>,{" "}
        <span className="text-primary font-medium">JavaScript</span>,{" "}
        <span className="text-primary font-medium">PHP</span>, and modern
        framworks like <span className="text-primary font-medium">REACTJS</span>
        , and <span className="text-primary font-medium">Laravel</span>. Adept
        at collaborating with cross-functional teams to deliver high-quality
        software solutions that meet user needs and exceed expectations.
      </p>

      <button className="bg-primary py-2 px-4 rounded-xl font-medium">
        MORE ABOUT ME
      </button>
    </article>
  </section>
);

export default Home;
