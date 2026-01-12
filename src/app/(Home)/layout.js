import Menu from "@/components/Layout/Menu";
import menuLinks from "@/lib/menus.json";

const layout = ({ children }) => {
  return (
    <>
      {children}
      <Menu menuLinks={menuLinks} />
    </>
  );
};

export default layout;
