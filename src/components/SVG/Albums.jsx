const Albums = ({ name, className }) => {
  return (
    <svg
      id={name}
      data-name={name}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 60"
      className={className}
    >
      <g data-name={name}>
        <g>
          <rect y="10" width="50" height="50" rx="8" ry="8" />
          <path d="M41.99,8c-1.47-1.83-3.71-3-6.24-3H14.25c-2.53,0-4.77,1.17-6.24,3h33.98Z" />
          <path d="M35.74,3c-1.47-1.83-3.71-3-6.24-3h-9c-2.53,0-4.77,1.17-6.24,3h21.48Z" />
        </g>
      </g>
    </svg>
  );
};

export default Albums;
