export const PrevArrow = ({ onClick, className, style }) => {
    return (
      <div
        className={`max-lg:!hidden absolute z-30 left-6 bottom-6 cursor-pointer ${className}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <span>
          <svg
            width="21"
            height="36"
            viewBox="0 0 21 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 1L2 18L20 35" stroke="#9800B0" stroke-width="1.5" />
          </svg>
        </span>
      </div>
    );
  };
  export const NextArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={`max-lg:!hidden absolute z-30 left-24 bottom-6 cursor-pointer ${className}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <span>
          <svg
            width="21"
            height="36"
            viewBox="0 0 21 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L19 18L1 35" stroke="white" stroke-width="1.5" />
          </svg>
        </span>
      </div>
    );
  };