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
        <div className="text-2xl timeline-end mb-10">
          <time className="font-mono italic">2024</time>
          <div className="text-2xl font-black">
            Pet Project: Work in Progress
          </div>
          Developing a web service which would help teachers automate massive
          student testing. Still in the early stages testing the waters. Marked{" "}
          <a
            className="link link-accent"
            href="https://github.com/ugurkellecioglu/next-14-lucia-auth-postgresql-drizzle-typescript-example/issues/1"
          >
            Next.js
          </a>{", "}
          <a
            className="link link-accent"
            href="https://github.com/edwardspresume/sveltekit-lucia-auth-v3-example/issues/3"
          >
            SvelteKit
          </a>{", "}
          and{" "}
          <a
            className="link link-accent"
            href="https://github.com/aabbtree77/session-auth-starter"
          >
          Astro
          </a>{" "}
          as unreliable.
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
        <div className="text-2xl timeline-start md:text-end mb-10">
          <time className="font-mono italic">2024</time>
          <div className="text-2xl font-black">
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
          DeepL, Porkbun.com and github pages.
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
        <div className="text-2xl timeline-end mb-10">
          <time className="font-mono italic">2023</time>
          <div className="text-2xl font-black">
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/miniguestlog"
            >
              Pet Project: Guest Log
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
          . MongoDB Atlas, render.com, github pages, ipify.org, and geoip-lite
          API for the GeoLite data from MaxMind.
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
        <div className="text-2xl timeline-start md:text-end mb-10">
          <time className="font-mono italic">2022</time>
          <div className="text-2xl font-black">
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/esp32-vpn"
            >
              IoT with P2P (Home Automation)
            </a>
          </div>
          A joint work with Saulius Rakauskas (Infovega): A remote plant
          watering system with ESP32, MicroPython, Mosquitto MQTT, Ubuntu and
          awl VPN based on golibp2p. I wrote software which removed the need for
          paid 3rd party services. We also did numerous tests of hole punching
          through layers of routers.
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
        <div className="text-2xl timeline-end mb-10">
          <time className="font-mono italic">2021</time>
          <div className="text-2xl font-black">
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/twinpeekz2"
            >
              Pet Project in 3D Graphics
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
        <div className="text-2xl timeline-start md:text-end mb-10">
          <time className="font-mono italic">2020</time>
          <div className="text-2xl font-black">
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77/adast"
            >
              Paper Guillotine
            </a>
          </div>
          A joint work with Saulius Rakauskas (Infovega). We have been
          maintaining a real factory machine since February 2020 (last update
          February 2024). I wrote a microcontroller code in C (avr-gcc).
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
        <div className="text-2xl timeline-end mb-10">
          <time className="font-mono italic">2018</time>
          <div className="text-2xl font-black">
            <a
              className="link link-accent"
              href="https://aabbtree77.github.io/shankland/shankland.html"
            >
              Pet Project in Theoretical Physics
            </a>
          </div>
          Verified Shankland's tensor algebra both manually, and with group
          theory.
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
        <div className="text-2xl timeline-start md:text-end mb-10">
          <time className="font-mono italic">2013</time>
          <div className="text-2xl font-black">
            <a
              className="link link-accent"
              href="https://hal.archives-ouvertes.fr/hal-00723427"
            >
              PostDoc Research
            </a>
          </div>
          Optimization of the fluid flow which was implemented before me with
          OpenFOAM, CATIA, STAR CCM+ and ParaView, running on the ProActive PACA
          Grid cloud (INRIA) via the Scilab-to-Java bridge managed by Fabien
          Viale. The optimization involved kriging and CMA-ES as the
          meta-optimizer of the expected multi-point improvement whose MC
          integration I sped up with a specialized unscented transform.
        </div>
      </li>
    </ul>
  );
};

export default PortfolioTimeline;