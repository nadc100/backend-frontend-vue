<template>
<div class="salida">
<table class="table">
  <thead>
    <tr>
      <th scope="col">tipo</th>
      <th scope="col">estado</th>
      <th scope="col">estrato</th>
      <th scope="col">precio</th>
      <th scope="col">ciudad</th>
      <th scope="col">cuartos</th>
      <th scope="col">baños</th>
      <th scope="col">parq.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>casa</th>
      <td>nueva</td>
      <td>4</td>
      <td>150M</td>
      <th>Villavicencio</th>
      <td>4</td>
      <td>3</td>
      <td>2</td>
    </tr>

  </tbody>
</table>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{}
  },
  methods:{

}
}

</script>

<style scoped>
.salida{
  width: 66%;
  margin: auto;
  color:midnightblue;
}
</style>

