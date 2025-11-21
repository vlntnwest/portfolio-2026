const Nav = ({ name, className }) => {
  return (
    <svg
      id={name}
      data-name={name}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 62.56 36.45"
      className={className}
    >
      <g id={name} data-name={name}>
        <polygon points="51.79 0 51.79 16.33 25.9 0 25.9 16.33 0 0 0 36.45 25.9 20.12 25.9 36.45 51.79 20.12 51.79 36.45 62.56 36.45 62.56 0 51.79 0" />
      </g>
    </svg>
  );
};

export default Nav;
