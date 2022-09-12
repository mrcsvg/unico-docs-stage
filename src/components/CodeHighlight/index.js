import React from 'react';

export default function CodeHighlight({children, color}) {
  return (

    <span>
      <code  style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
        }}>
        {children}
      </code>
  </span>

  );
}







