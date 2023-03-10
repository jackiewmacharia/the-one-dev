import { GlobalData } from "./types";

export const getGlobalData = (): GlobalData => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : "the one dev";
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : "the one dev blog";
  const domain = process.env.BLOG_DOMAIN
    ? decodeURI(process.env.BLOG_DOMAIN)
    : "theonedev.blog";
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : "All rights reserved.";

  return {
    name,
    blogTitle,
    domain,
    footerText,
  };
};
