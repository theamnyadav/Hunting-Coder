import React,{useState, useEffect} from 'react'
import { db } from "../components/firebase";
import {collection, addDoc,getDocs} from 'firebase/firestore'
function message() {
    const [message, setMessage] = useState('');
   const [firedata, setFiredata] = useState([])
//     const handleonSubmit = async (e)=>{
//       e.preventDefault();
// if(message !==""){
// await addDoc(collection(db,'Messages'),{
//   message,
//   completed:false,
// });
// setMessage('');
// }
//     }

useEffect(()=>{
getData()
},[])

const databaseRef = collection(db,'Newmsg');
const addData = (e) =>{
  e.preventDefault();

  addDoc(databaseRef,{
message:message
  }).then(()=>{
    setMessage('')
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
  return (
    <div>
      {/* <form onClick={handleonSubmit}>
        <input type='text' value={message} placeholder='Enter Message Here' onChange={(e)=>setMessage(e.target.value)}/>
        <button>Add</button>
      </form> */}
      <input placeholder='Msg' value={message} onChange={event=> setMessage(event.target.value)}/>
      <button onClick={addData}>Add</button>
      <div>
        {firedata.map((data)=>{
          return (
            <h1>{data.message}</h1>
          )
        })}
        </div>
    </div>
  )
}

export default message