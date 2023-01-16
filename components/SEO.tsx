import Head from "next/head";
import { useEffect, useState } from "react";

export default function SEO({
  title,
  description,
  domain,
  author,
  date,
  author_handle,
}: {
  title: string;
  description: string;
  domain: string;
  author?: string;
  date?: string;
  author_handle?: string;
}) {
  const [url, setUrl] = useState(`https://${domain}`);

  useEffect(() => {
    setUrl(window.location.href);
  });

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta name="description" content={description} />
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
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://theonedev.blog/banners/the-one-dev-tw-card.jpg"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@jackiewmacharia" />
      <meta property="twitter:domain" content={domain} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:url" content={url} />
      <meta
        name="twitter:creator"
        content={`@${author_handle}` || "@jackiewmacharia"}
      />
      <meta
        name="twitter:image"
        content="https://theonedev.blog/banners/the-one-dev-tw-card.jpg"
      />

      {/* Google site verification */}
      <meta
        name="google-site-verification"
        content="IhsaZQPdODpL7f9SZOm9CmzjEn068piaQJ9oskfRPOM"
      />
    </Head>
  );
}
