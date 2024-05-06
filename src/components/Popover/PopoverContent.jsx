import PropTypes from 'prop-types';

function PopoverContent({ children }) {
  return children;
}

PopoverContent.propTypes = {
  children: PropTypes.node,
  __TYPE: PropTypes.string,
};

PopoverContent.defaultProps = {
  __TYPE: 'PopoverContent',
};

export default PopoverContent;
