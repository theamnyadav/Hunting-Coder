import React,{useState, useEffect} from 'react'
import { db } from "../components/firebase";
import {collection, addDoc,getDocs, deleteDoc, doc} from 'firebase/firestore'
import {  useSession} from 'next-auth/react'

function message() {
    const [message, setMessage] = useState('');
   const [firedata, setFiredata] = useState([])
   const [about, setAbout] = useState('');
   const [ID, setID] = useState(null);
  const { data: session } = useSession()



useEffect(()=>{
getData()
},[])

const databaseRef = collection(db,'Newmsg');
const addData = (event) =>{
  event.preventDefault();
 
  addDoc(databaseRef,{
message:message,
about:about,
completed: false,

  }).then(()=>{
    setMessage('')
    setAbout('')
  })
}

const getData = async () =>{
await  getDocs(databaseRef)
.then((response)=>{
  setFiredata(response.docs.map((data)=> {
    return {...data.data(), id:data.id}
  }))
})
}

const getID = (id) =>{
  setID(id)
}

const deleteDocument = (id) => {
  let fieldToEdit = doc(db,'Newmsg',id);
  deleteDoc(fieldToEdit).then(()=>{
    getData();
  })
}

  return (
    <div className='m-10'>
    <div className='block justify-center  p-6 rounded-lg shadow-lg bg-white max-w-full '>
 <form>
 <div className='form-group mb-6 flex'>
      <input className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='Title of Your blog' value={message} onChange={event=> setMessage(event.target.value)}/>
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"/>
<span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"/>
</div>
<div className='form-group mb-6 f;lex'>
      <textarea className='form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='About Your Blog' value={about} onChange={event=> setAbout(event.target.value)}/>
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"/>
<span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"/>
</div>
<div className='form-group mb-6'>

      <button className='w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out' onClick={addData}>Publish</button>
      </div>
      </form>
      </div>
      <hr className='my-4'/>
      <div>
        {firedata.map((data)=>{
          return (
            <div className=' border-[1px] p-6 rounded-xl'>
              <div className='justify-evenly'>
              <p className='font-semibold'>{session.user.name}</p>
            <button className='text-red-600' onClick={()=>deleteDocument(data.id)} >Delete</button>
</div>
            <h1 className='text-4xl font-bold'>{data.message}</h1>
            <p className='font-medium py-4'>{data.about}</p>
            </div>

          )
        })}
        <hr className='my-6'/>

        </div>

    </div>
  )
}

export default message