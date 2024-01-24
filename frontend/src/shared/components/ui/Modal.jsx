import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import "./Modal.css";

const ModalOverlay = ({ onOpen, onClose, imgContent, msg, ...props }) => {
  const handleModalOpen = () => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
  };

  const handleModalClose = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  };

  useEffect(() => {
    handleModalOpen();
    return handleModalClose;
  }, [onOpen, onClose]);

  const content = (
    <>
      <div className="left-modal-arrow">
      <IoIosArrowDropleftCircle />
      </div>
      <div className="modal-section">
        <div className="modal-close" onClick={onClose}>
          <RxCrossCircled />
        </div>
        <img src={imgContent.imgUrl} alt={imgContent.header} />
      </div>
      <div className="right-modal-arrow">

      <IoIosArrowDroprightCircle />
      </div>
    </>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <>
      <Backdrop modalBackDrop onClick={props.onClose} />
      <ModalOverlay {...props} />
    </>
  );
};

export default Modal;
