import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import NotFound from './pages/NotFound'
import Partnerships from './pages/Partnerships'
import Page from './components/Page/Page'

function App() {
  return (
    <div className='app'>
      <NavBar />
       <Routes>
          <Route path='/' element={RenderPage("Home", <Home />)}/>
          <Route path='/page-not-found' element={RenderPage("Page Not Found", <NotFound />)} />
          <Route path='*' element={RenderPage("Page Not Found", <NotFound />)} />
          <Route path='/partnerships' element={RenderPage("Partnerships", <Partnerships />)} />
        </Routes>
      <Footer />
    </div>
  );
}

function RenderPage(title: string, pageToRender: JSX.Element) {
  return <Page title={`KatyCodesStuff - Katy Ashby - ${title}`}>{pageToRender}</Page>
}

export default App;
