import React from "react";
import styles from "./Index.module.css"; 

const Index = () => {
  return (
        <div className={styles.main}>
          <div className={styles.cheekyText}>
            It’sss...
            <br />
            time for a birichka
          </div>
          <p className={styles.p}>
            Lorem ipsum
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae molestie leo. Curabitur at convallis arcu,
            et aliquam ex. Integer imperdiet diam at purus consequat rhoncus.
          </p>
          <img className={styles.rectangle} alt="Rectangle" src="/img/rectangle-2.png" />
        </div>
  );
};


export default Index;