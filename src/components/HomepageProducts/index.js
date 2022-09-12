import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {useLocation} from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

  



const FeatureList = [
  {
    title: 'Unico Check',
    img: require('@site/static/img/unico-check-vert-roxo-dark-1.png').default,
    subTitle: (
      <>
        Solução em Biometria Facial para autenticação.        
      </>
    ),
    description: (
      <>
        Documentação e recursos de nossos SDKs Web, iOS, Android e Flutter
      </>
    ),
    path:"docs"


  },
  {
    title: 'Unico Sign',
    img: require('@site/static/img/sign-negativo.png').default,
    subTitle: (
      <>
        Assinaturas eletrônicas descomplicadas e seguras.        
      </>
    ),
    description: (
      <>
        Documentação e recursos de nossa API REST.
      </>
    ),
    path:"docs/sign/intro"

  },
];

function Feature({img, path, title, subTitle, description}) {

  var pathBase = ""
  if (ExecutionEnvironment.canUseDOM) {
    const location = useLocation();
     pathBase = location.pathname 
  } else {
     pathBase = "/"
  }

  return (


    <a href={pathBase + path} className={styles.card}>

      {/* <div className={styles.cardHome}> */}
      
      <div className={styles.icone}>
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img className={styles.logo} src={img} />
      </div>

      <strong> {subTitle} </strong>

      <p>  {description} </p>

      <span> Comece já! =)</span> 



    </a>

  );
}

export default function HomepageProducts() {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <div className="row ">
          <div className="col text--center padding-horiz--md">
            <div className={styles.line}> </div>
            <h2>Navegue por produto</h2>
            {/* <p>Navegue por produto:</p> */}
          </div>            
        </div>

        {/* <div className="row">      */}

        <ul className={styles.content}>


            {FeatureList.map((props, idx) => (
                                      
              <li>
                              
                  <Feature key={idx} {...props} />
                
              </li>

                

            ))}          

        </ul>



        {/* </div> */}
      </div>
      <div className={styles.separator}>

      </div>
    </section>

    
  );
}
