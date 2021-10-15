<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 300px;">
    <router-link to="/dash"  class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Dashboard</span>
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/"  class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Lista de propiedades
        </router-link>
      </li>
      <li>
        <router-link to="/dash"  class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          Registro de propiedades
        </router-link>
      </li>
      <li>
        <router-link to="/dash"  class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Propiedades reservadas
        </router-link>
      </li>
      <li>
        <router-link to="/dash"  class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Mis propiedades
        </router-link>
      </li>
      <li>
        <router-link to="/dash"  class="nav-link link-dark">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Cuenta personal
        </router-link>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
  }
}
</script>