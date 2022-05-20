import React from 'react'
import styles from './Card.module.css'


const Card = (prop) => {
    
  return (
      <div className={styles.eachdiv}>
          <img src={prop.img} alt="" />
          <div className={styles.content}>
              <h2>{prop.name}</h2>
              <p>{prop.category}</p>
              <p>{prop.cost}</p>
              <div className={styles.flex}>
                  {prop.MinPrice}
                  {prop.MinTime}
              </div>
              <p>{ prop.payment_Method}</p>
          </div>
          
    </div>
  )
}

export default Card