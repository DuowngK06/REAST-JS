import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
interface User {
  id: number,
  name: string,
  email: string
}
function App() {
  const [users, setUsers] = useState<User[]>([])
  async function getAlLUser() {
    const res= await axios.get ("http://localhost:8000/users")
           
    console.log ("Giá trị trả về ",res);
    setUsers([...res.data])
  }
  useEffect(() => {
    getAlLUser()
  }, [])
  return (
    <div>
      <h1>Hoc API</h1>
      <h2>Danh sach use</h2>
      <ul>
        {users.map((user: User, index: number ) =>{
          return <li key={index}>{user.name} - {user.email}</li>;
        })}
      </ul>
    </div>
  )
}

export default App
