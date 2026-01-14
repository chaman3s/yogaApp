import React from "react";
import "./Text.css";

function Text({ children, variant = 'body', color = 'default', as = 'span', className = '', style = {} }) {
  const Tag = as;
  const classNames = `text text-${variant} text-${color} ${className}`.trim();
  
  return (
    <Tag className={classNames} style={style}>
      {children}
    </Tag>
  );
}

export default Text;
