import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import MyButton from './MyButton.jsx'
import MyApp from './MyApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MyButton />
    <MyButton />
    <MyButton />
    <MyApp />
  </StrictMode>,
)
