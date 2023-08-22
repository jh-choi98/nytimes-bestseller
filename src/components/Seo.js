import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | NY Times Best Seller</title>
    </Head>
  );
}
