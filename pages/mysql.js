import {useState,useEffect} from 'react'
import Axios from 'axios'
export default function Home() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
const [user,setUser] = useState([])
  const register = () =>{
    Axios.post("http://localhost:3001/register", {
      username:name,
      password:password,
    }).then(()=>{
setName('')
setPassword('')
    });
    
  
  }

   useEffect(() =>{
    Axios.get("http://localhost:3001/getuser").then((response)=>{
setUser(response.data)
    })
  })

  return (
    <div className='justify-center items-center flex flex-col'>
      <input type='text' className='border border-2 border-blue-600 rounded-xl px-3 py-2 my-6'  placeholder='Name' onChange= {(e)=>{
setName(e.target.value)
      }}/>
      <input type='password' className='border border-2 border-blue-600 rounded-xl px-3 py-2 mb-6' placeholder='Password' onChange= {(e)=>{
setPassword(e.target.value) }}/>
<div className='flex flex-row justify-between space-evenly mx-4 px-8'>
<button onClick={register} className='bg-blue-600 rounded-md px-2 text-white py-1 font-bold'>Register</button>
</div>
{user.map((val,key)=>{
  return (
  <>
  <div className='flex'>
  <div className='text-xl font-bold'> {val.username}</div>
  </div>
  </>
  )
})}
    </div>

  )
}