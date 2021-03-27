import Head from 'next/head';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto'>
        <h1 className='text-4xl text-bold text-green-700 text-center'>
          Welcome to Next Store
        </h1>
      </main>
    </div>
  );
}
