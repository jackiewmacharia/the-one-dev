import Head from "next/head";

export default function SEO({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@jackiewmacharia" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://theonedev.blog" />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/banners/the-one-dev-orng.jpg" />
    </Head>
  );
}
