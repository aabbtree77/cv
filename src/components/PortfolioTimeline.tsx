import React from "react";

const PortfolioTimeline: React.FC = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-base lg:text-xl timeline-end mb-10">
          <time className="font-mono italic">2024</time>
          <div className="text-xl lg:text-2xl font-black">
            Pet Project: Authentication Starter (
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/auth-starter-frontend"
            >
              Frontend
            </a>
            ,{" "} 
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/auth-starter-backend"
            >
              Backend
            </a>)
          </div>
          A session-based user-password authentication which does not rely on any 3rd party services or auth libs.
          Frontend: Vite, React, Tailwind, daisyUI. Backend: Hono, SQLite, Drizzle. Local tests so far.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-base lg:text-xl timeline-start md:text-end mb-10">
          <time className="font-mono italic">2024</time>
          <div className="text-xl lg:text-2xl font-black">
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/law2"
            >
              lawtrust.eu
            </a>
          </div>
          Built a multilingual website{" "}
          <a className="link link-accent" href="https://lawtrust.eu/">
            lawtrust.eu
          </a>{" "}
          as a modern alternative to{" "}
          <a className="link link-accent" href="https://lawlt.eu/">
            lawlt.eu
          </a>
          , for a lawyer who speaks nine languages. Tailwind CSS, a bit of Go,
          DeepL, Porkbun, and Github Pages.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-base lg:text-xl timeline-end mb-10">
          <time className="font-mono italic">2023</time>
          <div className="text-xl lg:text-2xl font-black">
          Pet Project:{" "} 
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/miniguestlog"
            >
              Guest Log
            </a>
          </div>
          Wrote A MERN app to log geolocation of the last 50 visitors of my
          homepage{" "}
          <a className="link link-accent" href="http://aabbtree77.github.io/">
            aabbtree77.github.io
          </a>{" "}
          visible at{" "}
          <a
            className="link link-accent"
            href="https://aabbtree77.github.io/miniguestlog/loadGuestsSpinner.html"
          >
            this link
          </a>
          . MongoDB Atlas, Render, Github Pages, ipify API, and geoip-lite API.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-base lg:text-xl timeline-start md:text-end mb-10">
          <time className="font-mono italic">2022</time>
          <div className="text-xl lg:text-2xl font-black">
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/esp32-vpn"
            >
              IoT with P2P (Home Automation)
            </a>
          </div>
          A joint work with Saulius Rakauskas (Infovega): A remote plant
          watering system with ESP32, MicroPython, Mosquitto MQTT, Ubuntu and
          awl VPN based on golibp2p. I wrote software which replaced paid 3rd
          party services. We also did numerous tests with Wi-Fi resilience and
          hole punching through layers of routers.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-base lg:text-xl timeline-end mb-10">
          <time className="font-mono italic">2021</time>
          <div className="text-xl lg:text-2xl font-black">
          Pet Project:{" "} 
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/twinpeekz2"
            >
              Volumetric Sponza
            </a>
          </div>
          Implemented volumetric lighting in Go and Nim (forward rendering,
          shadow mapping, PBR, 3D ray marching, OpenGL) following Balázs Tóth,
          Tamás Umenhoffer (2009), and Tomas Öhberg (2017).
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-base lg:text-xl timeline-start md:text-end mb-10">
          <time className="font-mono italic">2020</time>
          <div className="text-xl lg:text-2xl font-black">
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/adast"
            >
              Paper Guillotine
            </a>
          </div>
          A joint work with Saulius Rakauskas (Infovega). We have been
          maintaining a real factory machine since February 2020 (last update
          February 2024). I wrote microcontroller code in C (avr-gcc).
        </div>
        <hr />
      </li>
    </ul>
  );
};

export default PortfolioTimeline;
