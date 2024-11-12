<template>
  <div class="main-content">
    <h1 class="title">👋 Bienvenido!</h1>
    <!-- <p class="emoji" @click="openModal">💭</p> -->

    <!-- Modal de texto -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2 class="title-modal">😃 Guía</h2>
        <p class="p">1. Cada campo corresponde a una carta con su respectivo mes.</p>
        <p class="p">2. En un principio las cartas en la aplicación no tendrán texto. Por primera vez deberan completar todos los campos.</p>
        <p class="p">3. Si no queremos modificar los textos de las 12 cartas podemos modificar una o más en específico y dejar los demas campos vacíos, ya que esto no afectará a los textos ya definidos.</p>
        <!-- <button class="button" @click="closeModal">Cerrar</button> -->
      </div>
    </div>

    <!-- Contenido de los inputs -->
    <div class="input-container">
      <div v-for="(month, index) in months" :key="index" class="input-content">
        <p>{{ month.label }}</p>
        <input
          v-model="cardData[month.key]"
          class="input"
          type="text"
          :placeholder="'Horóscopo para ' + month.label"
        />
      </div>
    </div>
    <button class="button" @click="submitCard">Guardar Cambios</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false, // Controla la visibilidad del modal
      horoscopeText: "", // Texto del modal
      cardData: {
        enero: "",
        febrero: "",
        marzo: "",
        abril: "",
        mayo: "",
        junio: "",
        julio: "",
        agosto: "",
        septiembre: "",
        octubre: "",
        noviembre: "",
        diciembre: "",
      },
      months: [
        { label: "Acuario", key: "enero" },
        { label: "Piscis", key: "febrero" },
        { label: "Aries", key: "marzo" },
        { label: "Tauro", key: "abril" },
        { label: "Géminis", key: "mayo" },
        { label: "Cáncer", key: "junio" },
        { label: "Leo", key: "julio" },
        { label: "Virgo", key: "agosto" },
        { label: "Libra", key: "septiembre" },
        { label: "Escorpio", key: "octubre" },
        { label: "Sagitario", key: "noviembre" },
        { label: "Capricornio", key: "diciembre" },
      ],
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async submitCard() {
      // Filtrar los campos vacíos del objeto y asegurarte de que el campo esté en el formato correcto
      const filteredData = Object.entries(this.cardData)
        .filter(([_, value]) => value.trim() !== "") // Solo filtra los valores no vacíos
        .reduce((acc, [month, text]) => {
          acc[month] = text;
          return acc;
        }, {});

      if (filteredData.length === 0) {
        return alert("No hay campos para enviar.");
      }

      const route = import.meta.env.VITE_BACKEND_URL;

      try {
        const response = await fetch(`${route}/card`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filteredData),
        });

        if (!response.ok) {
          throw new Error("Error en la solicitud al servidor.");
        }

        if(response.ok) alert('Datos Actualizados')

        const result = await response.json();
        console.log("Respuesta del servidor:", result);
      } catch (error) {
        console.error("Error al enviar la información:", error);
      }
    },
  },
};
</script>

<style scoped>
.main-content {
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Krub";
  background: linear-gradient(135deg, #f3f7fa 50%, rgba(41, 157, 242, 0.5) 100%);
  background-color: #f3f7fa;
  position: relative;
}

.title {
  font-size: 40px;
  margin-top: 50px;
  font-weight: bold;
}

.emoji {
  position: absolute;
  font-size: 50px;
  cursor: help;
  right: 20px;
  top: 10px;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 5%;
  width: 100%;
}

.input {
  background-color: #fff;
  padding: 5px;
  border-radius: 8px;
  outline: none;
  width: 60vw;
  height: 50px;
}

.button {
  margin-bottom: 40px;
  cursor: pointer;
  background-color: white;
  padding: 10px 20px;
  border-radius: 8px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80vw;
  width: 600px;
  text-align: center;
}

.title-modal{
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
}

.p{
  font-weight: 100;
  margin-bottom: 10px;
}

@media (max-width: 1024px) {
  .input {
    width: 90vw;
  }
}
</style>
