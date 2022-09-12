import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function SupportArticles() {
  return (
    <section className={styles.articles}>
      <div className="container">
        <div className="row ">
          <div className="col text--center padding-horiz--md">
            
            <div className={styles.line}> </div>
            <h2>Artigos de suporte</h2>
            {/* <p>Navegue por produto:</p> */}



            <div className="container">
          <div className="row ">

          <div className="col col--4 col--offset-4 text--center padding-horiz--md">              

          <div className={styles.cardHome}>
            <div class="card__header">
              <h3>Outros materiais de suporte</h3>
            </div>
            <div class="card__body">
              <p>
                Se você chegou aqui por acaso e busca materias de suporte sobre nossos produtos, que nao sejam técnicos, acesse nosso portal de ajuda através do link abaixo.                
              </p>
            </div>
            <div class="card__footer">
              
              <a href="https://ajuda.unico.io/hc/pt-br">   Explore nossos artigos de suporte  </a>         
            </div>
          </div>
          
          </div>        

          </div>
      
          
        </div>





          </div>            
        </div>


      </div>
    </section>
  );
}


