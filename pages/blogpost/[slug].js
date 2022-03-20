import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/BlogPost.module.css'

function slug() {
    const router = useRouter();
    const {slug} = router.query;
  return (
    <div> <div className={styles.container}> 
      <main className={styles.main}>
      <h1> Title of the page{slug}</h1>
      <hr/>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit natus consectetur labore officia quidem quaerat, blanditiis eveniet deleniti facilis. Rem iste quos qui.
      </div>
      </main>
      </div>
      </div>
  )
}

export default slug