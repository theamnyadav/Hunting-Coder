import React, { useEffect } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'


function Blog() {
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
  <div className={styles.blogItem}>
    <Link href={'/blogpost/learn-Javascript'}>
    <h3>How to learn javascript </h3></Link>
    <p>Javascript is the language used to design for logic in wev </p>
    </div>
    <div className="blogItem">
    <h3>How to learn javascript in 2022</h3>
    <p>Javascript is the language used to design for logic in wev </p>
    </div>
    <div className="blogItem">
    <h3>How to learn javascript in 2022</h3>
    <p>Javascript is the language used to design for logic in wev </p>
    </div>
    </main>
    </div>
  )
}

export default Blog 