import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationSection({ title, content }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="information__section--description">
      <div className="information__section--title">
        <p>{title}</p>
        <FontAwesomeIcon
          onClick={toggleExpand}
          icon={isExpanded ? "chevron-up" : "chevron-down"}
        />
      </div>
      {isExpanded &&
        (Array.isArray(content) ? (
          <ul className="information__section--list">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="information__section--content">{content}</p>
        ))}
    </div>
  );
}

export default InformationSection;
