import ReactDOM from 'react-dom';
import './style.scss';

// handleOpen is called to close modal

function Modal({ open, handleOpen, children, onClose }) {
  const body = document.body;

  const handleOutsideClick = (event) => {
    event.stopPropagation();
    handleOpen();
    try {
      onClose();
    } catch (error) {}
  };

  const handleInsideClick = (event) => {
    event.stopPropagation();
  };

  return open ? (
    ReactDOM.createPortal(
      <div className="modal" onClick={handleOutsideClick}>
        <div onClick={handleInsideClick}>{children}</div>
      </div>,
      body
    )
  ) : (
    <></>
  );
}

export default Modal;
