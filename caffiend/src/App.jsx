import CoffeeForm from './components/CoffeeForm.jsx'
import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import History from './components/History.jsx'


function App() {

  const isAuthenticated = false

  const authenticatedContent = (
    <>
      <Stats />
      <History />
    </>
  )

  return (
    <Layout>
      <Hero />
      <CoffeeForm isAuthenticated={isAuthenticated} />
      { isAuthenticated && (authenticatedContent) }
    </Layout>
  )
}

export default App
