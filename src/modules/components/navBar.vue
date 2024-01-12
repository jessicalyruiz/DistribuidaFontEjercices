<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style="background-color: #B76E79;">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active text-dark" aria-current="page" to="/librosAll">Todos</router-link> 
          </li>
          <li class="nav-item">

            <router-link class="nav-link active text-dark" aria-current="page" to="/consultar/:id">Buscar</router-link> 
          </li>
          <li class="nav-item">

<router-link class="nav-link active text-dark" aria-current="page" to="/actualizar">Actualizar</router-link> 
</li>
<li class="nav-item">

<router-link class="nav-link active text-dark" aria-current="page" to="/guardar">Guardar</router-link> 
</li>
<li class="nav-item">

<router-link class="nav-link active text-dark" aria-current="page" to="/eliminar">Eliminar</router-link> 
</li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {

}
</script>

<style>

</style>