import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForm from './components/UsersForm'
import axios from 'axios'
import UsersList from './components/UsersList'

function App() {
  const [userList, setUserList] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(()=>{
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res=>setUserList(res.data))
  },[])

  const getUsers = () =>{
    axios.get('https://users-crud.academlo.tech/users/')
    .then(res=>setUserList(res.data))
  }

  const onClickusersSelected = (users)=>{
    setUserSelected(users)
  }
  

  return (
    <div className="App">
      <UsersForm
                  getUser ={getUsers}
                  userSelected={userSelected}
                  onClickusersSelected={onClickusersSelected}
                  />
      <UsersList 
                userList={userList}
                getUser ={getUsers}
                onClickusersSelected={onClickusersSelected}
                />
    </div>
  )
}

export default App
