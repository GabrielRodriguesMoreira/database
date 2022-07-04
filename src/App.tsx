import './styles/app.css'
import {Header} from './pages/Header'
import {Profile} from './pages/Profile'

function App() {

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Profile />
      </div>
    </div>
  )
}

export default App
