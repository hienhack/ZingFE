import { tippy } from '@tippyjs/react';
import { getChildByType } from 'react-nanny';
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// Prevent useEffect to run twice in dev mode
let lock = 0;

function Popover({ placement = 'bottom-start', offset = [15, 0], autoClose, children }) {
  const handlerRef = useRef(null);
  const popoverRef = useRef(null);

  const handler = getChildByType(children, ['PopoverHandler']);
  const content = getChildByType(children, ['PopoverContent']);

  const handleScroll = (e) => {
    popoverRef.current.hide();
    document.getElementById('main').removeEventListener('scroll', this);
  };

  useEffect(() => {
    if (lock > 0) return;
    lock++;

    const handleShow = () => {
      if (!autoClose) return;
      document.getElementById('main').addEventListener('scroll', handleScroll);
    };

    const handleHide = () => {
      if (!autoClose) return;
      document.getElementById('main').removeEventListener('scroll', handleScroll);
    };

    popoverRef.current = tippy(handlerRef.current, {
      interactive: true,
      appendTo: document.body,
      animation: false,
      placement: placement,
      offset: offset,
      onShow: autoClose && handleShow,
      onHide: handleHide,
      render(instance) {
        const popper = document.createElement('div');
        const root = ReactDOM.createRoot(popper);
        root.render(content);

        return { popper };
      },
      trigger: 'click',
    });
  }, []);

  return React.cloneElement(handler, { ref: handlerRef });
}

export default Popover;
