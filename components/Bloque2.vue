<template>
  <div class="container" id="bloque2">
    <!-- Primer bloque -->
    <div class="block first-block">
      <div class="text">
        <h2>La App que conecta prestigiosos psíquicos con usted a la palma de su mano</h2>
        <p>Arcano, una aplicación nacida de la unión entre la magia ancestral y la inteligencia artificial moderna, te permite acceder a ese poder oculto con un solo toque. A través de un portal digital, los mejores tarotistas freelance del mundo están disponibles para guiarte en tu camino, resolver tus dudas y arrojar luz sobre tu destino.</p>
      </div>
      <div class="image">
        <img src="../assets/arcanoLogo.png" alt="Imagen del Primer Bloque" class="image-right"/>
      </div>
    </div>

    <!-- Segundo bloque -->
    <div class="block second-block">
      <div class="image">
        <img src="../assets/aiImage.png" alt="Imagen del Segundo Bloque"/>
      </div>
      <div class="text">
        <h2>La magia de lo intangible, facilitada por la tecnología</h2>
        <p>En el corazón de Arcano, los algoritmos de inteligencia artificial no solo procesan información, sino que colaboran con el misticismo de las cartas. Estas no son simples tiradas automáticas: son una extensión del conocimiento antiguo, diseñado para brindarte lecturas precisas y personalizadas. La IA no reemplaza la sabiduría de un tarotista, sino que la complementa.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0; 
  /* margin: 0 auto; */
  width: 100%; 
  max-width: 1200px; 
}
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;    
  margin: 30px 0;  
}
.text {
  flex: 2;
}
.image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
h2 {
  font-size: 24px;
  font-weight: 700;
  word-spacing: 4px;
  padding-bottom: 20px;
}
p {
  font-size: 16px;
  line-height: 1.5;
}
/* Responsive para Desktop */
@media (min-width: 1025px) {
  .container {
    padding: 50px 20px; 
  }

  .block {
    gap: 60px 
  }

  h2 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
  }
}

/* Responsive para Tablet */
@media (max-width: 1024px) {
  .block {
    flex-direction: column; 
    align-items: center;
    text-align: center;  
  }
  .text, .image {
    width: 100%;  
  }
  .container {
    padding: 20px;
  }
  h2 {
    font-size: 22px;
  }
  p {
    font-size: 16px;
  }
  .image img {
    width: 80%; 
  }
}

/* Responsive para mobile */
@media (max-width: 600px) {
  .block {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
  .image img {
    width: 100%; 
  }

  .container {
    padding: 10px;
  }
}
</style>
