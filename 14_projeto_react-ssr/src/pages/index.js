import styles from "./style.module.css";
import React from 'react';

const Index = () => {
  const [background, setBackground] = React.useState(null);

  const updateBackground = () => {
    const url = "https://source.unsplash.com/random"
    setBackground(url)
  };

  React.useEffect(() => {
    updateBackground()
  }, []);

  return (
    <div id="root" className={styles.root}>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          #root {
            background: url(${background}) center no-repeat;
            background-size: cover;
          }
        `}
      </style>
       <div className={styles.container}>
         <h1>Fundos aleatórios</h1>
         <h3>Clique para mudar o fundo</h3>
         <button onClick={() => window.location.reload(false)}>Mudar</button>
       </div>
    </div>
  );
};

export default Index;
