import React, { Children } from 'react';
import PropTypes from 'prop-types';

const PopoverHandler = React.forwardRef(function ({ children }, ref) {
  const element = Children.only(children);

  return React.cloneElement(element, { ref: ref });
});

PopoverHandler.propTypes = {
  children: PropTypes.node,
  __TYPE: PropTypes.string,
};

PopoverHandler.defaultProps = {
  __TYPE: 'PopoverHandler',
};

export default PopoverHandler;
