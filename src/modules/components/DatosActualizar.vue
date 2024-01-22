<template>
    <div class="container">
    <div class="contenido">
        <label for="isbn">Ingresa id</label>
<input type="text" id="id" v-model="id">
<label for="isbn">Ingresa isbn</label>
<input type="text" isbn="isbn" v-model="isbn">
  <label for="titulo">Ingresa la titulo</label>
<input type="text" isbn="titulo" v-model="titulo">
 <label for="">Autor</label>
  <input v-model ="autor" name="" isbn="">
  <label for="">Precio</label>
  <input v-model ="precio" name="" isbn="">
  <button @click="actualizarLibro">Actualizar</button>
</div>
</div>
<div v-if="msj" class="alert alert-primary" role="alert">
    {{mensaje}}
</div>
</template>

<script>

import {actualizarLibroFachada} from "../helpers/LibroCliente.js"

export default {
 data(){
        return{
            id:null,
            titulo:null,
            isbn:null,
            autor:null,
            precio:null,
            msj:false,
            mensaje:null
        }
    },
    methods:{
        async actualizarLibro(){

            const libro={
                id:this.id,
                isbn:this.isbn,
                author: this.autor,
                title: this.titulo,
                price: this.precio
            }
            await actualizarLibroFachada(libro, this.id);
            this.msj=true
            this.mensaje='Libro actualizado correctamente'
            this.id=null,
           this.titulo=null,
           this.isbn=null,
           this.autor=null,
           this.precio=null
          
           
        }
    }

}
</script>

<style>

</style>
