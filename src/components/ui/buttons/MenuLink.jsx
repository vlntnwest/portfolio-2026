import Link from "next/link";

const MenuLink = ({ name, href, onClick }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-white text-sm/4 hover:text-gray-300 transition-colors block py-2 px-4"
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuLink;
