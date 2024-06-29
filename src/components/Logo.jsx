import PropTypes from 'prop-types';

const Logo = ({ fontSize}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={200} height={50}>
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FF9800', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF5722', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="30"
        style={{ fontSize: fontSize, fontFamily: "'Brush Script MT', cursive" }}
        fill="url(#grad)"
        cursor='pointer'
      >
        <tspan fill="#474747" style={{ fontFamily: "'Brush Script MT', cursive" }}>Fully</tspan>Furnished
      </text>
    </svg>
  );
};

Logo.propTypes = {
  fontSize: PropTypes.number.isRequired, // Example: fontSize should be a number and is required
  width: PropTypes.number.isRequired,    // Example: width should be a number and is required
};

export default Logo;
