<template>
  <div class="container">
    <select class="form-select" id="dropp" required>
      <option selected disabled value="">tipo</option>
      <option>...</option>
    </select>

    <select class="form-select" id="dropp" required>
      <option selected disabled value="">estado</option>
      <option>...</option>
    </select>
    <select class="form-select" id="dropp" required>
      <option selected disabled value="">estrato</option>
      <option>...</option>
    </select>
    <select class="form-select" id="dropp" required>
      <option selected disabled value="">precio</option>
      <option>...</option>
    </select>
    <select class="form-select" id="dropp" required>
      <option selected disabled value="">ciudad</option>
      <option>...</option>
    </select>
    <select class="form-select" id="dropp" required>
      <option selected disabled value="">cuartos</option>
      <option>...</option>
    </select>
    <select class="form-select" id="dropp" required>
      <option selected disabled value="">baños</option>
      <option>...</option>
    </select>
    <select class="form-select" id="dropp" required>
      <option selected disabled value="">parq.</option>
      <option>...</option>
    </select>
    <div class="col-12">
      <Botonnewsletter />
    </div>
  </div>
</template>


<script>
import Botonnewsletter from "@/components/Botonnewsletter";

export default {
  name: "Formproper",
  components: {
    Botonnewsletter,
  },
  props: {},
};
</script>
<style scoped>
.form-select {
  margin-bottom: 1rem;
}
</style>