<template>
  <h1>Buscar libro</h1>
  <div class="container">
    <div class="contenido">
      <label for="id"> Ingrese el Id del libro</label>
      <input type="text" id="id" v-model="id"/>
      <button v-on:click="buscar()">Buscar</button>

      <div v-if="show">
        <div class="card" >
        
        <div class="card-body">
            <table class="table table-dark">
            <thead >
                <tr>
                    <th>Isbn</th>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Precio</th>
                    
                </tr>
            </thead>
            <tbody >
                <tr>
                    <td>{{ book.isbn }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.price }}</td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {obtenerLibroFachada} from '../helpers/LibroCliente.js'

export default {
  data() {
    return{
    id:null,
    book: null,
    show:false
    }
  },
  methods: {
    async buscar(){
        console.log("metodo buscar: "+ this.id)
        this.book=await obtenerLibroFachada(this.id);
        console.log(' buscar book:' + this.book)
        this.show=true;
    }
  },
};
</script>

<style>
</style>