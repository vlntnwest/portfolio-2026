import Link from "next/link";

const WheelCentralButton = ({ project }) => {
  return (
    <Link
      href={`/projects/${project.href}`}
      className="w-[var(--wheel-button-size)] h-[var(--wheel-button-size)] bg-wheel-button rounded-full z-10 border-[var(--wheel-button-border-color)] border-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:color-[var(--wheel-button-hover-color)] active:scale-95 transition ease-in-out"
    />
  );
};

export default WheelCentralButton;
