
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
 
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <App />
    </div>

)
