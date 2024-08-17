import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import GlobalStyles from './styles/globalStyles'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme='colored' />
   
  </React.StrictMode>
)
