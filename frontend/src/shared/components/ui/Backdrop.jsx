import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {

  return ReactDOM.createPortal(
    <div className={props.modalBackDrop ? "backdrop-modal" : "backdrop"} onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;