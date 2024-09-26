import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="text-2xl lg:text-3xl font-bold text-center">
        More Details
      </div>
      <div>
        <div className="flex flex-col gap-2 text-base lg:text-2xl items-center">
          <div>
            <a
              className="link link-accent"
              href="https://aabbtree77.github.io/"
            >
              More Projects
            </a>
          </div>

          <div>
            <a
              className="link link-accent"
              href="https://github.com/aabbtree77?tab=repositories"
            >
              Github
            </a>
          </div>
          
          <div>
            <a
              className="link link-accent"
              href="https://aabbtree77.github.io/tensors/"
            >
              Algebra{" "}
            </a>{" "}
          </div>

          <div>
            <a
              className="link link-accent"
              href="https://aabbtree77.github.io/pdfs/RamunasGirdziusasResume.pdf"
            >
              resume.pdf{" "}
            </a>{" "}
          </div>

          <div>
            <a
              className="link link-accent"
              href="https://aabbtree77.github.io/pdfs/RamunasGirdziusasCV.pdf"
            >
              cv.pdf{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
