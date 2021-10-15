<template>
  <div class="container formulario">
    <div class="row align-items-centers">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-1">
      </div>
      <div class="col-8">
         <Cardproper />
        <Formproper />
       
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Formproper from "@/components/Formproper.vue";
import Cardproper from "@/components/Cardproper.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Formproper,
    Cardproper,
  },
};
</script>
<style scoped>
.formulario{
  margin: auto;
  width:80%;
  padding: 3rem;
}
</style>
