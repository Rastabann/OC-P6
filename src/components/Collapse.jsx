import React, { useState } from "react";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <p>{content}</p>;
    }
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleToggle}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : "closed"}`}></span>
      </div>
      {isOpen && <div className="collapse-content">{renderContent()}</div>}
    </div>
  );
}

export default Collapse;
