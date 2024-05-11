import Tippy, { tippy } from '@tippyjs/react';
import { getChildByType } from 'react-nanny';
import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// Prevent useEffect to run twice in dev mode
let lock = 0;

function Popover({
  placement = 'bottom-start',
  offset = [15, 0],
  onHide,
  onShow,
  autoClose,
  trigger,
  children,
}) {
  const handlerRef = useRef(null);

  const handler = getChildByType(children, ['PopoverHandler']);
  const content = getChildByType(children, ['PopoverContent']);

  const handleScroll = useCallback((e) => {
    handlerRef.current.click();
    handlerRef.current.blur();
  }, []);

  function handleShow() {
    if (onShow) onShow();
    if (!autoClose) return;
    document.getElementById('main').addEventListener('scroll', handleScroll);
  }

  function handleHide() {
    if (onHide) onHide();
    if (!autoClose) return;
    document.getElementById('main').removeEventListener('scroll', handleScroll);
  }

  return (
    <Tippy
      interactive
      animation={false}
      appendTo={document.body}
      trigger={trigger ? trigger : 'click'}
      onShow={handleShow}
      onHide={handleHide}
      offset={offset}
      placement={placement}
      render={(attrs) => <div {...attrs}>{content}</div>}
      onClickOutside={() => console.log('clicked outside')}
    >
      {React.cloneElement(handler, { ref: handlerRef })}
    </Tippy>
  );
}

export default Popover;
