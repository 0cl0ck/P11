import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InformationSection.scss";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

function InformationSection({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const adjustMaxHeight = () => {
      setMaxHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    };

    adjustMaxHeight();
    window.addEventListener("resize", adjustMaxHeight);
    return () => window.removeEventListener("resize", adjustMaxHeight);
  }, [isExpanded, content]);

  return (
    <div className="information__section--description">
      <div className="information__section--title">
        <p>{title}</p>
        <FontAwesomeIcon
          onClick={toggleExpand}
          icon={isExpanded ? "chevron-down" : "chevron-up"}
        />
      </div>
      <div
        ref={contentRef}
        className={`content ${isExpanded ? "expanded" : ""}`}
        style={{ maxHeight: `${maxHeight}px` }}
      >
        {Array.isArray(content) ? (
          <ul className="information__section--list">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="information__section--content">{content}</p>
        )}
      </div>
    </div>
  );
}

InformationSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default InformationSection;
