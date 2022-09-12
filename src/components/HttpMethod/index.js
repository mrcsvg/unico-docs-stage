import React from 'react';
import styles from "./styles.module.css";

export default function HttpMethod({children, method}) {
  return (

    <span className={styles.url}>
        <span className={styles.method}>
            {method}        
        </span>            
        {children}
    </span>


  );
}







