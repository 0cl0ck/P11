import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./InformationSection.scss";
import PropTypes from "prop-types";

function InformationSection({ title, content }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="information__section--description">
      <div className="information__section--title">
        <p>{title}</p>
        <FontAwesomeIcon
          onClick={toggleExpand}
          icon={isExpanded ? "chevron-down" : "chevron-up"}
        />
      </div>
      <div className={isExpanded ? "content expanded" : "content"}>
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
