<template>
  <div class="container" id="footer">
    <NuxtLink class="nav-link logo" to="/">ARCANO</NuxtLink>
    <p class="p">
      Explora nuestro catálogo de servicios de tarot y astrología. Conecta con
      los mejores tarotistas, disfruta de tiradas de tarot con IA gratuitas y
      consulta tu horóscopo semanal.
    </p>
    <div class="social-container">
      <svg
        class="w-8 h-8 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#272778"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
          clip-rule="evenodd"
        />
        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
      </svg>
      <svg
        class="w-8 h-8 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#272778"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        class="w-8 h-8 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#272778"
        viewBox="0 0 24 24"
      >
        <path
          fill="#272778"
          fill-rule="evenodd"
          d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
          clip-rule="evenodd"
        />
      </svg>
      <svg
        class="w-8 h-8 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#272778"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <p class="copyright">2024. All rights reserved.</p>
  </div>
</template>
  
  <style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 10%;
  /* margin-top: 30px; */
  position: relative;
  /* margin: 0 auto; */
  width: 100%;
  min-width: 100vw;
  /* max-width: 1200px; */
  gap: 32px;
  background: white;
}

.social-container{
    display: flex;
    gap: 10px;
}

.nav-link.logo {
  color: var(--primary-blue);
  font-size: 24px;
  text-align: center;
  width: 115px;
  letter-spacing: 0.5px;
}

.p {
  font-size: 16px;
  text-wrap: balance;
  text-align: center;
}

.copyright {
  color: #959595;
}
</style>
  