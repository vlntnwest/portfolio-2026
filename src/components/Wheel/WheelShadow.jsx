const WheelShadow = ({ position }) => {
  return (
    <span
      className="absolute size-16 rounded-full bg-radial from-white from-0% to-black opacity-10 blur-xs"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transformOrigin: "center center",
      }}
    />
  );
};

export default WheelShadow;
