import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Lou Guerrig Mendoza My Hobbies are Playing, Powerlifting, my favorite music is Remember the name. my favorite food is
Pizza.</p>
  <ul>
  <li>My expection on this subject is to gain more knowledge about system intergration and architecture</li>
  <li>I want to learn the basic foundation of this subject</li>
  <li>I want be familiar with deploying website and gain more understanding about it</li>
  </ul>
  
     <p>10 Things That Require Zero Talent</p>
        <ul>
        <li>1. Being on Time</li>
        <li>2. Making An Effort</li>
        <li>3. Being High Energy</li>
        <li>4. Having A Positive Attitude</li>
        <li>5. Being Passionate</li>
        <li>6. Using Good Body Language</li>
        <li>7. Being Coachable</li>
        <li>8. Doing A Little Extra</li>
        <li>9. Being Prepared</li>
        <li>10. Having A Strong Work Ethic</li>
        </ul>

      </section>
    </Layout>
  );
}
