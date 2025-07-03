const SectionDivider = ({ flip = false, color = "#364030" }) => {
  return (
    <div className={`w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 100"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
