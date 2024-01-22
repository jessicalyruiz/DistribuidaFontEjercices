<template>
  <h1>Buscar persona</h1>
  <div class="container">
    <div class="contenido">
      <label for="id"> Ingrese el Id del persona</label>
      <input type="text" id="id" v-model="id"/>
      <button v-on:click="buscar()">Buscar</button>

      <div v-if="show">
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
            <tbody >
                <tr>
                    <td>{{ persona.nombre }}</td>
                    <td>{{ persona.direccion }}</td>
                    <td>{{ persona.edad }}</td>
                    
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
import {obtenerPersonaFachada} from '../helpers/PersonaCliente.js'

export default {
  data() {
    return{
    id:null,
    persona: null,
    show:false
    }
  },
  methods: {
    async buscar(){
        console.log("metodo buscar: "+ this.id)
        this.persona=await obtenerPersonaFachada(this.id);
        console.log(' buscar persona:' + this.persona)
        this.show=true;
    }
  },
};
</script>

<style>
</style>