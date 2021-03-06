import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/SideBar';
import styles from '../styles/Home.module.css';
import HArt from '../components/Assets/Home-Art.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar/> 
      <div className={styles.HomeContainer}>
        <div className={styles.Context}>
          <div className={styles.TopLine}>
            || TOP NOTCH EXPERTISE SERVICES
          </div>
          <div className={styles.ByLine}>
            ACQUIRE TECHNOLOGY <span> AT
              <div>
                YOUR OWN WILL
              </div>
            </span>
          </div>
        </div>
        <div className={styles.Button}>

        </div>
        <div className={styles.HomeArt}>
          <img src={HArt}></img>
        </div>
      </div>
    </div>
  )
}
