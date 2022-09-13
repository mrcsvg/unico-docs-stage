import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageProducts from '@site/src/components/HomepageProducts';
import SupportArticles from '@site/src/components/SupportArticles';


import Cursor from '@site/src/components/Cursor';

import styles from './index.module.css';

function HomepageHeader() {
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <code> Start building with  </code>
        
        <h1 className="hero__title"> <code> {"<"}Unico{"/>"}</code> 
        <Cursor color='white' fontSize='20' />
        </h1>  
        
        <p className="hero__subtitle">Encontre aqui recursos e guias para iniciar sua integração com as soluções da Unico</p>
        
        <code>unico.startLearning(now());</code>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Unico - Developer Portal">
      <HomepageHeader />
      <main className={styles.home}>    
        <HomepageProducts />
        <SupportArticles />
      </main>
    </Layout>
  );
}
