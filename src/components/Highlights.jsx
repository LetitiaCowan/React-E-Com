import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library?</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              para="Get access to the book you purchased online instantly."
              title="Quick and Easy"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              para="Library has books in all your favourite categories."
              title="10,000+ Books"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              para="Get your hands on popular books for as little as $10."
              title="Affordable"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
