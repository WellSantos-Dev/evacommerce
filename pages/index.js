// Components
import Head from 'next/head'

// Pages
import { Header } from '../components/Header/Header'
import { InitialPageContainer } from '../components/InitalPage/InitialPageContainer'
import { CommerceProvider } from '../context/commerceContext'

export default function Home(props) {
  
  return (
      <CommerceProvider value={props}>
        <Head>
          <title>Eva Commerce</title>
        </Head>

        {/* Header */}
        <div className="max-w-full bg-black-custom">
          <Header />
        </div>

        <InitialPageContainer />
      </CommerceProvider>
  )
}

export async function getServerSideProps(context) {
  const baseUrl = 'https://www.eva-test-api.plataformaeva.com'

  const fetchAllCategories = await fetch(`${baseUrl}/categories`)
  .then((res) => res.json())

  const fetchAllProducts = await fetch(`${baseUrl}/products`)
  .then((res) => res.json())

  // Function for Randowmic array
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  return {
    props: {
        allCategories: fetchAllCategories,
        allProducts: shuffleArray(fetchAllProducts)
    }
  }
}