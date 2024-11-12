<template>
  <nav class="nav">
    <NuxtLink class="nav-link logo" to="/">ARCANO</NuxtLink>
    <div class="nav-links">
      <!-- <NuxtLink class="nav-link" to="/about">¿Quienes Somos?</NuxtLink> -->
      <NuxtLink class="nav-link" @click="scrollTo('bloque2')"
        >¿Quienes Somos?</NuxtLink
      >
      <NuxtLink class="nav-link" @click="scrollTo('bloque3')"
        >Servicios</NuxtLink
      >
      <NuxtLink class="nav-link" @click="scrollTo('bloque3')"
        >Expertos</NuxtLink
      >
      <NuxtLink class="nav-link" @click="scrollTo('footer')">
        <button class="contact-button">Únete!</button>
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 8%;
  margin-bottom: 20px;
  align-items: center;
  /* max-width: 1200px; */
  /* background: red; */
}

.nav-link {
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-link.logo {
  color: var(--primary-blue);
  font-size: 24px;
  text-align: center;
  width: 115px;
  letter-spacing: 0.5px;
}

.contact-button {
  background-color: #272778;
  color: white;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: var(--primary-blue);
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .nav-links {
    flex-direction: column;
    gap: 15px;
    margin: 10px 0;
  }

  .contact-button {
    padding: 5px 30px;
  }
}

@media (max-width: 480px) {
  .nav {
    padding: 5px;
  }

  .nav-link.logo {
    font-size: 20px;
  }

  .nav-links {
    gap: 10px;
  }

  .contact-button {
    padding: 5px 20px;
    font-size: 14px;
  }
}
</style>
