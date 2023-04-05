import React from 'react';

const RowWithClick = ({ children, onClick }) => {
  return (
    <tr onClick={onClick}>{children}</tr>
  );
};

export default RowWithClick;