<template>
  <h1>Lista de Libros</h1>
  
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
            <tbody v-for="v in listaLibros" :key="v.id">
                <tr>
                    <td>{{ v.isbn }}</td>
                    <td>{{ v.title }}</td>
                    <td>{{ v.author }}</td>
                    <td>{{ v.price }}</td>
                </tr>
            </tbody>
        </table>
        </div>
	</div>

</template>

<script>
import {mostrarTodosFachada} from '../helpers/LibroCliente.js'
export default {
    data(){
        return{
            listaLibros: null,

        }
    },
    methods:{
        async obtenerTodos(){
            this.listaLibros=await mostrarTodosFachada();
            console.log(this.listaLibros);
        }
    },
    mounted(){
        this.obtenerTodos();
    }
}


</script>

<style>

</style>