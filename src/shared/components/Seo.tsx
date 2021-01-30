import Head from 'next/head';
import { SeoProps } from '../interfaces';

const Seo = ({ title, description, image, shouldExcludeTitleSuffix = false, shouldIndexPage = true }: SeoProps): JSX.Element => {
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? ' | My Chat' : ''}`;
  const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`: '';
  return (
    <Head>
      <title>{pageTitle}</title>

      <meta name="description" content={description} />
      {pageImage && <meta name="image" content={pageImage} /> }

      { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}


      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta name="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:locale" content="pt_BR" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content={pageTitle} />
      <meta name="og:image" content={pageImage} />
      <meta name="og:image:secure_url" content={pageImage} />
      <meta name="og:image:alt" content="Thumbnail" />
      <meta name="og:image:type" content="image/png" />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rodrigogodoy__" />
      <meta name="twitter:creator" content="@rodrigogodoy__" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  );
};

export default Seo;