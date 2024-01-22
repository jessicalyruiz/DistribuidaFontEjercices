<template>
  <div class="container">
    <div class="contenido">
      <label for="nombre">nombre</label>
      <input type="text" id="nombre" v-model="nombre" />

      <label for="direccion">Direccion</label>
      <input type="text" id="direccion" v-model="direccion" />



      <label for="edad">Edad</label>
      <input type="number" id="edad" v-model="edad" />
      <button @click="ingresar">Guardar</button>
    </div>
  </div>
  <div v-if="msj" class="alert alert-primary" role="alert">
    {{mensaje}}
</div>
</template>



<script>
import { IngresarPersonaFachada } from "../helpers/PersonaCliente.js";
export default {
  data() {
    return {
      nombre: "",
      direccion: "",
      
      edad: null,
      msj:false,
            mensaje:null
    };
  },
  methods: {
    ingresar() {
      const persona = {
        nombre: this.nombre,
        title: this.direccion,
        author: this.autor,
        price: this.edad,
      };
      IngresarPersonaFachada(persona);
      this.msj=true
            this.mensaje='Persona ingresado correctamente'
            this.id=null,
           this.direccion=null,
           this.nombre=null,
           this.autor=null,
           this.edad=null
           console.log(persona)
    },
  },
};
</script>

<style>
</style>