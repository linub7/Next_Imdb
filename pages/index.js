import Header from 'components/headerComponents';
import Navbar from 'components/navbarComponents';
import Results from 'components/resultsComponents';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-800">
      <Head>
        <title>IMDB-Clone App</title>
        <meta
          name="description"
          content="Generated by Mohammad Hadi - imdb clone - movies - series"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <Header />

      {/* Navbar Section */}
      <Navbar />

      {/* Results Section */}
      <Results />
    </div>
  );
}
