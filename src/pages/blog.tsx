import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function BlogRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/blogs");
  }, [router]);

  return (
    <>
      <Head>
        <title>The AceHost Blog | Redirecting...</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Redirecting to blog...</p>
      </div>
    </>
  );
}
