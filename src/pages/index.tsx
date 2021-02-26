import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile'

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Rockeseat Trainer</title>
      </Head>


      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <ChallengeBox />
        <div>

        </div>
      </section>


    </div>
  )
}
