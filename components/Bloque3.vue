<template>
    <div class="container" id="bloque3">
        <h1 class="h1">Disfruta del catalogo de servicios que <br> puede ofrecerte Arcano</h1>
        <p class="p">conecta con los mejores tarotistas freelance para obtener lecturas personalizadas que se adapten a tus necesidades. Explora nuestras tiradas de tarot con inteligencia artificial, disponibles de forma gratuita, y descubre respuestas instantáneas y perspicaces. Además, consulta tu horóscopo semanal para mantenerte en sintonía con las energías cósmicas que te rodean. En Arcano, cada consulta es una oportunidad para el crecimiento personal.</p>
        <div class="img-container">
            <img class="img" src="../assets/Google Play.png" alt="">
            <img class="img" src="../assets/App Store.png" alt="">
        </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 60px 10%;
    margin-top: 30px;
    /* margin: 0 auto; */
    width: 100vw; 
    min-width: 100vw;
    /* max-width: 1200px; */
    gap: 32px;
    background: #eff3f9;
    /* background: blueviolet; */
  }

  .h1{
    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }

  .p{
    text-wrap: balance;
    text-align: center;
  }

  .img-container{
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .img{
    width: 40%;
    height: auto;
  }
  </style>
  