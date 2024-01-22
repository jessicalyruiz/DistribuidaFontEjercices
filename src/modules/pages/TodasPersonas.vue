<template>
  <h1>Lista de Personas</h1>
  
  <div class="card" >
        
        <div class="card-body">
            <table class="table table-dark">
            <thead >
                <tr>
                    <th>Nombre</th>
                    <th>Direccion</th>

                    <th>Edad</th>
                    
                </tr>
            </thead>
            <tbody v-for="v in listaPersonas" :key="v.id">
                <tr>
                    <td>{{ v.nombre }}</td>
                    <td>{{ v.direccion }}</td>
                    <td>{{ v.edad }}</td>
                </tr>
            </tbody>
        </table>
        </div>
	</div>

</template>

<script>
import {mostrarTodosFachada} from '../helpers/PersonaCliente.js'
export default {
    data(){
        return{
            listaPersonas: null,

        }
    },
    methods:{
        async obtenerTodos(){
            this.listaPersonas=await mostrarTodosFachada();
            console.log(this.listaPersonas);
        }
    },
    mounted(){
        this.obtenerTodos();
    }
}


</script>

<style>

</style>