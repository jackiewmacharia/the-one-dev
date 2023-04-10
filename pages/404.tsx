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
      <Header />

      <Image
        width={4608}
            height={2304}
        priority={true}
        src="/banners/404.png"
        alt="404 banner graphic of a guy seemingly lost in space captioned '404, page not found"
      />

      <Link href="/">
        <button
          type="button"
          aria-label="go back home"
          className="flex items-center pr-2 mt-20 bg-gradient-2 dark:text-gradient-3 rounded-3xl justify-center align-center p-2 w-40 h-10"
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
