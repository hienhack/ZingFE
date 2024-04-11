import ReactDOM from 'react-dom';
import './style.scss';

// handleOpen is called to close modal

function Modal({ open, handleOpen, children }) {
  const body = document.getElementsByTagName('body')[0];

  const handleOutsideClick = (event) => {
    event.stopPropagation();
    handleOpen();
  };

  const handleInsideClick = (event) => {
    event.stopPropagation();
  };

  return (
    open &&
    ReactDOM.createPortal(
      <div className="modal" onClick={handleOutsideClick}>
        <div onClick={handleInsideClick}>{children}</div>
      </div>,
      body
    )
  );
}

export default Modal;
