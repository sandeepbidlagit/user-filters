import {BrowserRouter, Routes, Route} from 'react-router'
import UsersList from './components/UserList'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersList/>}/>
        <Route path='users/:id' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
