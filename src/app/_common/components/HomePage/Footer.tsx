import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-400">
      <div className="max-w-4xl mx-auto text-sm space-y-2">
        <p>© 2025 Chinmai C R. All rights reserved.</p>
        <div className="flex flex-row gap-2 justify-center">
          <a
            href="mailto:chinmaichromium@gmail.com"
            className="text-primary hover:underline"
          >
            chinmaichromium@gmail.com
          </a>
        </div>
        <div className="flex flex-row gap-2 justify-center">
          <p>
            <a
              href="https://www.linkedin.com/in/chinmai-c-r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </p>{" "}
          <p>
            <a
              href="https://github.com/chinmaichromium"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Github
            </a>
          </p>
        </div>
        <p>Bengaluru, India</p>
      </div>
    </footer>
  );
};

export default Footer;
