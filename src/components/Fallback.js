import React from 'react';
import '../style/errorbutton.css';
import '../style/content.css';

export default function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className="content">
      <p style={{ color: 'red', fontWeight: 'bolder', fontSize: 'xx-large' }}>
        Something went wrong!!!
      </p>
      <button className="btn" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}
