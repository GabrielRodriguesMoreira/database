import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MobileApp from './MobileApp'



var display = <App />
if (screen.width <= 950) {  display = <MobileApp /> }

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    {display}
  </React.StrictMode>
)
