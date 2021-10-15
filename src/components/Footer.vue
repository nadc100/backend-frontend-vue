<template>
<div class="card text-center mt-5">
  <div class="card-body">
    <h3 class="card-title">Sistema para registrar propiedades</h3>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
      <form>
    <h3>Subscribe to our newsletter</h3>
    <p>Monthly digest of whats new and exciting from us.</p>
    <div class="d-flex w-100 gap-2">
      <label for="newsletter1" class="visually-hidden">Email address</label>
      <input
        id="newsletter1"
        type="text"
        class="form-control"
        placeholder="Email address"
      />
      <button class="btn btn-primary" type="button">Subscribe</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>
<style scoped>
.card{
  margin: auto;
  width:70%;
  padding: 3rem;
  color:steelblue;
}
</style>