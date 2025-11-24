import Link from "next/link";
import Image from "next/image";

const MenuLink = ({ name, href, onClick, cover, icon }) => {
  return (
    <li className="mb-4 last:mb-0 flex gap-2">
      {icon && (
        <Image
          src={
            cover
              ? `/assets/images/projects/${cover}.png`
              : "/assets/images/projects/pokey-cover.png"
          }
          alt={name}
          width={40}
          height={40}
          className="rounded-md max-h-10 object-cover max-w-10 aspect-square"
        />
      )}

      <Link
        href={href}
        className="text-white text-lg/6 font-regular hover:text-gray-300 transition-colors block py-2 px-2 truncate whitespace-nowrap"
        onClick={onClick}
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuLink;
