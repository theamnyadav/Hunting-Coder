import React from 'react'
import styles from '../styles/Home.module.css'
import Link  from 'next/link'
import { signOut, useSession} from 'next-auth/react'

function Navbar() {

const { data: session } = useSession()

  return (
    <nav className={styles.mainnav}>
        <ul>
          <Link className='hover:text-blue-500 focus:text-red-300' href='/' ><li>Home</li></Link>
          <Link className='hover:text-blue-500 focus:font-medium' href='/blog' ><li>Blog</li></Link>
          <Link className='hover:text-blue-500' href='/about' ><li>Image Library</li></Link>
          <Link className='hover:text-blue-500' href='/Image' ><li>Image Uploading</li></Link>
           
           
          
         <Link className='hover:text-blue-500' href='/todo' ><li>Crud</li></Link>
         <Link className='hover:text-blue-500' href='/message' ><li>Blog</li></Link>

         <li><>
        <button className='px-6
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
      ease-in-out' onClick={() => signOut()}>Sign out</button>
      </></li>
        </ul>
      </nav> 
  )
}

export default Navbar