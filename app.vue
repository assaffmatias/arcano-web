<template>
  <div class="appContainer">
    <Navbar v-if="showNavbar"/>
    <NuxtPage />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showNavbar() {
      // Oculta el Navbar si la ruta actual es /admin
      return this.$route.path !== '/admin';
    },
  },
};
</script>

<style>
.appContainer {
  color: black;
    /* margin: 20px; */
    font-family: 'Krub';
    background: linear-gradient(135deg, #f3f7fa 50%, rgba(41, 157, 242, 0.5) 100%);
    background-color: #f3f7fa; /* Color de respaldo */
    background-repeat: no-repeat;
}
</style>
