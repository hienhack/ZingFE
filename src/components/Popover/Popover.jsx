import Tippy, { tippy } from '@tippyjs/react';
import { getChildByType } from 'react-nanny';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// Prevent useEffect to run twice in dev mode
let lock = 0;

function Popover({ placement = 'bottom-start', offset = [15, 0], autoClose, children }) {
  const handlerRef = useRef(null);

  const handler = getChildByType(children, ['PopoverHandler']);
  const content = getChildByType(children, ['PopoverContent']);

  const handleScroll = (e) => {
    handlerRef.current.click();
  };

  function handleShow() {
    if (!autoClose) return;
    document.getElementById('main').addEventListener('scroll', handleScroll);
  }

  function handleHide() {
    if (!autoClose) return;
    document.getElementById('main').removeEventListener('scroll', handleScroll);
  }

  return (
    <Tippy
      interactive
      animation={false}
      appendTo={document.body}
      trigger="click"
      onShow={handleShow}
      onHide={handleHide}
      offset={offset}
      placement={placement}
      render={(attrs) => <div {...attrs}>{content}</div>}
    >
      {React.cloneElement(handler, { ref: handlerRef })}
    </Tippy>
  );
}

export default Popover;
