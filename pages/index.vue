<template>
  <!-- jorge -->
  <div class="bloque">
    <Bloque1 class='bloque1' />
    <hr>
    <img class="img" src="../assets/Search box.png" alt="">
    <!-- <MidleBar /> -->
    <!-- <hr> -->
     <div class="bloque2-container">
          <Bloque2 class='bloque2' />
     </div>
     <Bloque3 />
     <Footer />
  </div>

</template>

<script>
import Bloque1 from '~/components/Bloque1.vue';
import Bloque2 from '~/components/Bloque2.vue';
import Bloque3 from '~/components/Bloque3.vue';
import MidleBar from '~/components/MidleBar.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: "CustomComponent"
};
</script>

<style scoped>
.bloque{
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: yellowgreen; */
  /* background-color: red; */
}

.img{
  position: relative;
  top: -40px;
}
  .bloque2-container{
  /* background-color: red; */
  /* z-index: 100; */
/* height: 670px; */
/* flex-shrink: 0; */
/* background-color: gray; */
  /* background-color: white; */
  height: 1080x;
  }
  /* .bloque2{} */
</style>
