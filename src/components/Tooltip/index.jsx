import Tippy from '@tippyjs/react';
import React from 'react';

const Tooltip = React.forwardRef(function ({ content, children }, ref) {
  return (
    <Tippy ref={ref} content={content} theme="root" zIndex={10000000000}>
      {children}
    </Tippy>
  );
});

export default Tooltip;
