<template>
    <div class="container">
        <div class="contenido">
  <label for="isbn">isbn</label>
 <input type="text" id="isbn" v-model="isbn">

 <label for="titulo">Titulo</label>
 <input type="text" id="titulo" v-model="titulo">

 <label for="autor">autor</label>
 <input type="number" id="autor" v-model="autor">

 <label for="precio">Precio</label>
 <input type="number" id="precio" v-model="precio">
<button @click="ingresar">Guardar</button>
</div>
</div>
</template>



<script>
import {IngresarLibroFachada} from '../helpers/LibroCliente.js'
export default {
    data(){
        return{
            isbn:"",
            titulo:"",
            autor:null,
            precio:null,
        }
    },
    methods:{
        ingresar(){
            const libro={
            isbn:this.isbn,
            titulo:this.titulo,
            autor:this.autor,
            precio:this.precio,
            }
            IngresarLibroFachada(libro)
        }
    }

}
</script>

<style>

</style>