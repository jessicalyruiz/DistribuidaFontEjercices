<template>
  <div class="container">
    <div class="contenido">
      <label for="isbn">isbn</label>
      <input type="text" id="isbn" v-model="isbn" />

      <label for="titulo">Titulo</label>
      <input type="text" id="titulo" v-model="titulo" />

      <label for="autor">autor</label>
      <input type="text" id="autor" v-model="autor" />

      <label for="precio">Precio</label>
      <input type="number" id="precio" v-model="precio" />
      <button @click="ingresar">Guardar</button>
    </div>
  </div>
  <div v-if="msj" class="alert alert-primary" role="alert">
    {{mensaje}}
</div>
</template>



<script>
import { IngresarLibroFachada } from "../helpers/LibroCliente.js";
export default {
  data() {
    return {
      isbn: "",
      titulo: "",
      autor: null,
      precio: null,
      msj:false,
            mensaje:null
    };
  },
  methods: {
    ingresar() {
      const libro = {
        isbn: this.isbn,
        title: this.titulo,
        author: this.autor,
        price: this.precio,
      };
      IngresarLibroFachada(libro);
      this.msj=true
            this.mensaje='Libro ingresado correctamente'
            this.id=null,
           this.titulo=null,
           this.isbn=null,
           this.autor=null,
           this.precio=null
           console.log(libro)
    },
  },
};
</script>

<style>
</style>