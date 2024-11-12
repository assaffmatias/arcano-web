<template>
  <div class="containerrr">
    <!-- Div izquierdo -->
    <div class="left">
      <div class="left-label">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
        <span class="switch-text">Encontrar tarotista</span>
      </div>
      <h1 class="h1">La red de tarotistas freelance más grande</h1>
      <p class="subtitle">
        Aquí podras encontrar una gran cantidad de servicios de los tarotistas
        mejores calificados, a un precio único.
      </p>
      <div>
        <div class="small-images">
          <img src="../assets/image1.svg" alt="Imagen 1" />
          <img src="../assets/image2.svg" alt="Imagen 2" />
          <img src="../assets/image3.svg" alt="Imagen 3" />
        </div>
        <p class="p">Más de <span class="span">450</span> tarotistas verificados!</p>
      </div>
    </div>

    <!-- Div derecho -->
    <div class="right">
      <img
        src="../assets/cellOnHand.png"
        class="rightImage"
        alt="Imagen Principal"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomComponent",
};
</script>

<style scoped>
.containerrr {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 20px;
  max-width: 1200px;
  margin: 0 5%;
}

.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.rightImage {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 20px;
}
.subtitle{
  font-weight: 100;
  font-size: 24px;
}
.p {
  /* background: red; */
  font-size: 20px;
}
.h1 {
  font-size: 40px;
  /* margin-bottom: 10px; */
  font-weight: 700;
  line-height: 1;
  /* background: red; */
}

.span {
  color:#272778;
  font-weight: bold;
}
.small-images {
  display: flex;
  gap: 10px;
  /* background: blue; */
  margin-bottom: 10px;
}
.small-images img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.left-label {
  display: flex;
  align-items: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}
.switch-text {
  white-space: nowrap;
  margin-left: 10px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-color: #272778;
}
input:checked + .slider:before {
  transform: translateX(14px);
}
/* Responsive para tablet */
@media (max-width: 1024px) {
  .containerrr {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
  .left,
  .right {
    flex: none;
    width: 100%;
    padding: 10px;
  }
  .left {
    align-items: center;
  }
  .small-images img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 28px;
    text-align: center;
  }
  p {
    font-size: 16px;
    text-align: center;
  }
}
/* Responsivo para mobile */
@media (max-width: 600px) {
  .containerrr {
    flex-direction: column;
    padding: 10px;
  }
  .left,
  .right {
    width: 100%;
    padding: 5px;
  }
  .left {
    align-items: center;
  }
  .small-images {
    justify-content: center;
  }
  .small-images img {
    width: 30px;
    height: 30px;
  }
  h1 {
    font-size: 20px;
    text-align: center;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
  .switch {
    width: 28px;
    height: 16px;
  }
  .slider:before {
    width: 12px;
    height: 12px;
  }
  .rightImage {
    max-width: 80%;
  }
}
</style>
