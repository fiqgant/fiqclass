import React from 'react';
import styles from '../style/Modules.module.css';

function Modules() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
              Styling Menggunakan CSS Modules</h1>
            <button className="button" onClick={() => 
              alert("TRPL")}>Click me!</button>
        </div>
    );
}

export default Modules;
