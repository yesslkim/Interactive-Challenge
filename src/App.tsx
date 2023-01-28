import { Route } from 'wouter'
import './App.css'
import ContentsView from './components/ContentsView'
import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Header />
      <Route path='/' component={Home}/>
      <Route path='/view/:pageId' component={ContentsView}/>
      <Route path='/contact' component={Contact}/>
      <Footer/>
    </div>
  )
}

export default App
