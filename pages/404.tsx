import Link from "next/link";
import Image from "next/image";
import Layout, { GradientBackground } from "../components/Layout";
import SEO from "../components/SEO";
import { getGlobalData } from "../utils/global-data";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { GlobalData } from "../utils/types";

const NotFound = ({ globalData }: { globalData: GlobalData }) => {
  return (
    <Layout>
      <SEO
        title={globalData.name}
        description={globalData.blogTitle}
        domain={globalData.domain}
      />
      <Header name={globalData.name} />

      <Image
        width={4608}
        height={2304}
        priority={true}
        src="/banners/404-transparent.png"
        alt="banner graphic of a guy seemingly getting caught up in a 404 graphic while running from it"
      />

      <Link href="/">
        <button
          type="button"
          aria-label="go back home"
          className="flex items-center h-full pr-2 bg-gradient-2 dark:text-gradient-4 rounded-3xl flex justify-center align-center p-2 w-40 h-10"
        >
          Go Back Home
        </button>
      </Link>

      <Footer />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
};

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}

export default NotFound;
