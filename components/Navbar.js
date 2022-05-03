import React from 'react'
import styles from '../styles/Home.module.css'
import Link  from 'next/link'
import { signOut, useSession} from 'next-auth/react'

function Navbar() {

const { data: session } = useSession()

  return (
    <nav className={styles.mainnav}>
        <ul>
          <Link href='/' ><li>Home</li></Link>
          <Link href='/blog' ><li>Blog</li></Link>
          <Link href='/about' ><li>Image Library</li></Link>
          <Link href='/Image' ><li>Image Uploading</li></Link>
           
           
          
         <Link href='/todo' ><li>Crud</li></Link>
         <Link href='/message' ><li>Message</li></Link>

         <li><>
        <button onClick={() => signOut()}>Sign out</button>
      </></li>
        </ul>
      </nav> 
  )
}

export default Navbar