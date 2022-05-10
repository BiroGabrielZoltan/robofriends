import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '3px solid rgb(50, 200, 140)', height: '53.3em'}}>
      {props.children}
    </div>
  );
};

export default Scroll;