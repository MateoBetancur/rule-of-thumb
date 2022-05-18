import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import {
  BannerTop, BannerBottom, NavBar,
  Header, Footer, MainContent
} from '../components/Organisms';
import { DataResponse, Character } from '../interfaces/characters.interface';
import api from '../utils/axiosConfig';
interface Props {
  characters: Character[];
}
const Home: NextPage<Props> = ({ characters }) => {
  return (
    <div >
      <Head>
        <title>🗳 Rule of Thumb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <div className="max-centered">
        <BannerTop />
        <MainContent characters={characters} />
        <BannerBottom />
        <hr role="separator" />
        <Footer />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<DataResponse<Character[]>>('/api/getCharacters');
  return {
    props: {
      characters: data.data
    },
  }
}

export default Home
