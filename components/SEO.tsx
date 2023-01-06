import Head from "next/head";

export default function SEO({
  title,
  description,
  author,
  date,
}: {
  title: string;
  description: string;
  author?: string;
  date?: string;
}) {
  return (
    <Head>
      <title>{title}</title>

      {/* Open Graph */}
      <meta
        name="description"
        property="og:description"
        content={description}
      />
      <meta name="author" content={author || ""} />
      <meta
        name="publish_date"
        property="og:publish_date"
        content={
          (date &&
            new Intl.DateTimeFormat("en-US", {
              dateStyle: "full",
              timeStyle: "long",
            }).format(new Date(date))) ||
          ""
        }
      />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://theonedev.blog" />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/banners/the-one-dev-tw-card.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content={description} />
      <meta name="twitter:site" content="@jackiewmacharia" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/banners/the-one-dev-tw-card.jpg" />
      
      {/* Google search verification */}
      <meta name="google-site-verification" content="IhsaZQPdODpL7f9SZOm9CmzjEn068piaQJ9oskfRPOM" />
    </Head>
  );
}
