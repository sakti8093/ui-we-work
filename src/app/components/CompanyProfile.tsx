import React from "react";
import styles from "./companyprofile.module.css";
import downloads from "../assets/downloads.svg";
import hide from "../assets/hide.svg";
import del from "../assets/del.svg";
import messages from "../assets/messages.svg";
import share from '../assets/share.svg'
import weworkimg from "../assets/weworkimg.png";
import weworklogo from "../assets/weworklogo.png";
import downloadwork from "../assets/downloadwork.svg";
import searchminus from "../assets/searchminus.svg";
import searchplus from "../assets/searchplus.svg";
import send from "../assets/send.svg";
import pdf from "../assets/pdf.svg";
import threedots from "../assets/threedots.svg";
import Image from "next/image";

export const CompanyProfile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileleft}>
        <div className={styles.active} >
          <p>Overview</p>
        </div>
        <div className={styles.separator} ></div>
        <div>
          <p>welcome</p>
        </div>
        <div className={styles.separator} ></div>
        <div>
          <p>Product Capabilities</p>
        </div>
        <div className={styles.separator} ></div>
        <div>
          <p>Customer Success Stories</p>
        </div>
        <div className={styles.separator} ></div>
        <div>
          <p>File Sharing</p>
        </div>
        <div className={styles.separator} ></div>
        <div>
          <p>Our deck</p>
        </div>
      </div>
      <div className={styles.profileright}>
        <div className={styles.profileheader}>
          <p className={styles.textv2}>Company Profile</p>
          <div className={styles.profileoptions}>
            <div>
              <Image src={downloads} alt="downloads" />
            </div>
            <div>
              <Image src={hide} alt="hide" />
            </div>
            <div>
              <Image src={del} alt="del" />
            </div>
          </div>
          <div className={styles.threedots} >
            <Image src={threedots} alt="threedots" />
          </div>
        </div>
        <div className={styles.weworkcontainer} >
          <Image src={weworkimg} alt="weworkimg" className={styles.workimg} />
          <div className={styles.weworkbg} >
            <Image src={weworklogo} alt="weworklogo" />
            <p>For all the ways you work, we're here</p>
          </div>
          <div className={styles.wework_bg_options} >
            <Image src={pdf} alt="pdf"/>
            <div className={styles.work_option_separator} ></div>
            <Image src={downloadwork} alt="downloads work" />
            <div className={styles.work_option_separator} ></div>
            <Image src={searchminus} alt="searchminus" />
            <div className={styles.work_option_separator} ></div>
            <Image src={searchplus} alt="searchplus" />
            <div className={styles.work_option_separator} ></div>
            <Image src={send} alt="send" />
          </div>
        </div>
        <div className={styles.workoptions} >
          <div className={styles.messages} >
            <Image src={messages} alt="message" />
            <div className={styles.message_number} ><p>8</p></div>
          </div>
          <div></div>
          <div><Image src={share} alt="share" /></div>
        </div>
      </div>
    </div>
  );
};
