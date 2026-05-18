import {HashRouter, Routes, Route} from 'react-router-dom'
import UsersList from './components/UserList'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<UsersList/>}/>
        <Route path='users/:id' element={<UserDetails/>}/>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
