import Tippy from '@tippyjs/react';

function Tooltip({ content, children }) {
  return (
    <Tippy content={content} theme="root" zIndex={10000000000}>
      {children}
    </Tippy>
  );
}

export default Tooltip;
