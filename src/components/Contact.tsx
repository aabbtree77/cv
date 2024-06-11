import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="text-2xl lg:text-3xl font-bold text-center">Contact</div>
      <div>
        <div className="flex flex-col gap-2 text-base lg:text-2xl items-center">
          <div>+37061042349</div>

          <div>aabbtree77 (at) gmail.com</div>

          <div className="max-lg:w-min">
            Viber (&ldquo;Ramūnas Girdziušas&rdquo;)
          </div>

          <div>
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77?tab=repositories"
            >
              github.com/aabbtree77
            </a>
          </div>

          <div>
            <a
              className="link link-accent"
              href="https://aabbtree77.github.io/"
            >
              aabbtree77.github.io{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
