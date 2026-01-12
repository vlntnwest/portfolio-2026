import Link from "next/link";

const Menu = ({ menuLinks }) => {
  return (
    <div className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50">
      <div className="background-dark-gradient rounded-full relative z-10 opacity-80">
        <div className="w-full py-6 px-8 flex justify-center items-center gap-16 text-white text-center flex gap-10 font-medium text-lg/6">
          {menuLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-wheel-buttons-color hover:text-wheel-buttons-hover-color transition pointer-events-auto"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
