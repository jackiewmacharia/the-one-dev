import Link from "next/link";

export default function Header({ name }: { name: string }) {
  return (
    <header className="pt-20 pb-12">
      <p className="text-5xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
