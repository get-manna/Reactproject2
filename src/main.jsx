import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
import Layout from './Layout/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Layout>
    <App />
    </Layout>



    </BrowserRouter>
  </React.StrictMode>,
)
