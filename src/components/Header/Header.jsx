import Image from "next/image";
import ContactContainer from "./ContactContainer";
import ContactBubbles from "./ContactBubbles";
import Link from "next/link";

const Header = () => {
  const baseBlobUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;

  return (
    <header className="sticky top-0 left-0 right-0 z-9999999 px-4 pt-4 pointer-events-none">
      <div className="flex justify-center items-center ">
        <div className="flex flex-col items-center ">
          <Link
            href="/"
            className="rounded-full overflow-hidden bg-linear-to-b from-[#FF3C3C] to-[#5F1616] z-10 pointer-events-auto"
          >
            <Image
              src={`${baseBlobUrl}/memoji/memoji-classic.png`}
              width={80}
              height={80}
              alt="Memoji Valentin WESTERMEYER"
              className="h-20 w-20"
              loading="eager"
            />
          </Link>
          <ContactContainer>
            <ContactBubbles />
          </ContactContainer>
        </div>
      </div>
    </header>
  );
};

export default Header;
