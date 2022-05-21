import React from 'react'
import styles from './Card.module.css'


const Card = (prop) => {

  return (


    <div className={styles.eachdiv}>
      <div className={styles.imgdiv}><img src={prop.img} alt="" /></div>
      <div className={styles.content}>
        <h2>{prop.name}</h2>
        <p>{prop.category}</p>
        <p>{prop.cost}</p>
        <div className={styles.flex}>
          <p>{prop.MinPrice}</p>
          <p>{prop.MinTime}</p>
        </div>
        <p>{prop.payment_Method}</p>
        <button>Add now</button>
      </div>   
      
    </div>



  )
}

export default Card