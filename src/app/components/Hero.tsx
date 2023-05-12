import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'
import maskgroup from '../assets/maskgroup.jpg'
import Vector from '../assets/Vector.png'
import wework1 from '../assets/wework1.png'
import salesforce from '../assets/salesforce.png'
import skewbg from '../assets/skewbg.png'


export const Hero = () => {
  return (
    <div>
        <div className={styles.hero_header} >
          <p className={styles.textv1} >WeWork + Salesforce</p>
          <button>Publish/Share</button>
        </div>
        <div className={styles.hero} >
           <div className={styles.heroimg} >
           < Image src={maskgroup} alt='mask-group'/>
            <div className={styles.skewimgcontainer} >
              <div>
                <Image src={skewbg} alt='skewbg' />
                 <p>Workspace Proposal</p>
              </div>
            </div>
           </div>
            <div className={styles.herocard} >
                <Image src={wework1} alt='wework' />
                <Image src={Vector} alt='vector' />
                <Image src={salesforce} alt='salesforce' />
            </div>
        </div>
    </div>
  )
}
