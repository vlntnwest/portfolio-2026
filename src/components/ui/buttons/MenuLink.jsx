import Link from "next/link";
import Image from "next/image";

const MenuLink = ({ name, href, cover, icon, target }) => {
  const baseBlobUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;
  return (
    <li className="mb-4 flex gap-2">
      {icon && (
        <Image
          src={
            cover
              ? `${baseBlobUrl}/covers/${cover}.png`
              : `${baseBlobUrl}/covers/pokey-cover.png`
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
        target={target}
      >
        {name}
      </Link>
    </li>
  );
};

export default MenuLink;
