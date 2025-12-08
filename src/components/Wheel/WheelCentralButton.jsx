import { useRouter } from "next/navigation";
import { useWheelContext } from "../../contexts/WheelContext";

const WheelCentralButton = () => {
  const { projectLink } = useWheelContext();

  const router = useRouter();

  const handleClick = () => {
    if (!projectLink) return;

    if (projectLink.startsWith("#")) {
      history.replaceState(null, "", projectLink);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      router.push(projectLink);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="w-[var(--wheel-button-size)] h-[var(--wheel-button-size)] bg-wheel-button rounded-full z-10 border-[var(--wheel-button-border-color)] border-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:color-[var(--wheel-button-hover-color)] active:scale-95 transition ease-in-out cursor-pointer"
    />
  );
};

export default WheelCentralButton;
