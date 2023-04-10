import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    // TODO: switch on theme change without need to reload
    setLightMode(localStorage.getItem("theme") === "light");
  }, []);

  return (
    <header className="pb-2">
      <p className="text-5xl dark:text-white text-center">
        <Link href="/">
          <Image
            width={4608}
            height={2304}
            priority={true}
            style={{ cursor: "pointer" }}
            src={
              lightMode
                ? "/banners/tod-full-website-banner-transparent-black.png"
                : "/banners/tod-full-website-banner-transparent-white.png"
            }
            alt="banner logo of full name of the blog, The One Dev"
          />
        </Link>
      </p>
    </header>
  );
}
