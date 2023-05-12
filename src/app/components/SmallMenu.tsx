import React from 'react'
import styles from './smallscreen.module.css'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import bag from '../assets/bag.svg'
import notification from '../assets/notification.svg'
import help from '../assets/help.svg'
import closeham from '../assets/closeham.svg'
import Image from 'next/image'

interface smallMenuProps {
  handleClose: () => void;
}

export const SmallMenu:React.FC<smallMenuProps> = ({handleClose}) => {
  return (
    <div className={styles.menu} >
      <Image onClick={()=>handleClose()} className={styles.hamclose} src={closeham} alt='closeham' />
      <div className={styles.container} >
        <div className={styles.userprofile} >
          <Image src={logo} alt='logo' />
          <div className={styles.user} >
            <p>Jane Smith</p>
            <p>Sales Executive</p>
          </div>
        </div>
        <div className={styles.menulist} >
          <Image src={search} alt='search' />
          <p>Search</p>
        </div>
        <div className={styles.menulist} >
          <Image src={bag} alt='inboc' />
          <p>Inbox</p>
        </div>
        <div className={styles.menulist} >
          <Image src={notification} alt='notification' />
          <p>Notification</p>
        </div>
        <div className={styles.menulist} >
          <Image src={help} alt='help' />
          <p>Help</p>
        </div>
      </div>
    </div>
  )
}
