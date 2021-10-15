<template>
<div class="container-md align-items-center">
<Navbar />
<router-view></router-view>
<Footer />
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

body{
font-family: 'Montserrat', sans-serif;
}

h1,h2,h3,h4,h5{
font-family: 'Spartan', sans-serif;
}


#app {
 font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #11cc40;
  width: 70%;
  margin: auto;
}

</style>
