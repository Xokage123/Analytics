import { NextPage } from 'next';
import Head from 'next/head';

import Analytics from 'components/analytics';

const AnalyticsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Analytics</title>
      </Head>

      <Analytics />
    </>
  );
};

export default AnalyticsPage;
