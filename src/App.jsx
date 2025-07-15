import { useState } from 'react'
import NavBar from './components/navBar'
import ProductsPage from './features/products/productsPage'
import UsersPage from './features/users/usersPages'
import OdersPage from './features/oders/odersPages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="min-h-screen bg-gray-100">
   <NavBar />
   <ProductsPage />
   <UsersPage />
    <OdersPage />
      </div>
  )
}

export default App
