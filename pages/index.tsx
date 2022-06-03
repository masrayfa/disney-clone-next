import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { TV, Movie } from '../typings'

interface Props {
  DisneyTV: TV[]
  DisneyMovie: Movie[]
}

const Home: NextPage = () => {
  return (
    <div>
      {/* <Head></Head> */}

      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/disney-plus-tab.png" />
      </Head>

      <main>
        <Header />
        <div>Home</div>
      </main>
    </div>
  )
}

export default Home
