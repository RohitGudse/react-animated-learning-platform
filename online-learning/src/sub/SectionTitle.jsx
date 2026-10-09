
import React from "react";

const SectionTitle = ({
  title = "Section Title",
  subtitle = "",
  align = "left",
  variant = "default",
  showAccent = true,
  className = "",
  id,
}) => {
  const titleClasses = [
    "section-title",
    `section-title--${variant}`,
    `section-title--${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header
      id={id}
      className={titleClasses}
      aria-label={title}
    >
      <div className="section-title__content">
        {showAccent && (
          <span
            className="section-title__accent"
            aria-hidden="true"
          />
        )}

        <h2 className="section-title__heading">
          {title}
        </h2>

        {subtitle && (
          <p className="section-title__subtitle">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default SectionTitle;