import React from 'react'

import styles from './Details.module.css'
import imgReceta from './assets/receta.jpg'

export default function Details () {
  return (
    <section className={styles.container}>
      <div className={styles.box}>
        <div className={styles.images}>
          <div className={styles.imgHolder}>
            <img src={imgReceta} alt='Canolis'/>
          </div>
          <div className={styles.containerSummary}>
            <span>Summary</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
          </div>
        </div>
        <div className={styles.basicInfo}>
          <span>Title Recipe</span>
        </div>
        <div className={styles.description}>
          <ul className={styles.features}>
            <li><i className='fa-solid fa-circle-check'></i>Health Score</li>
            <li><i className='fa-solid fa-circle-check'></i>Diets</li>
            <li><i className='fa-solid fa-circle-check'></i>Preparation Minutes</li>
            <li><i className='fa-solid fa-circle-check'></i>Servings</li>
            <li><i className='fa-solid fa-circle-check'></i>Credits Text</li>
          </ul>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus temporibus corporis repudiandae, consectetur nostrum nisi commodi placeat rerum molestias numquam nihil accusantium deleniti! Enim, nesciunt a quis amet hic officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nemo accusantium tempora facere doloremque cum iusto, ut neque, fuga omnis libero laborum ullam. At dolorum qui atque labore illo dignissimos.</p>
        </div>
      </div>
    </section>
  )
}