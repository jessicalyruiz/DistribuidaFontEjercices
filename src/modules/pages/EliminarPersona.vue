<template>
   
  
  
  <div class="container">
    <div class="contenido">
        <h3>Eliminar</h3>
   
    <label for="id">Ingresa id</label>
  <input type="text" id="id" v-model="id">
  <button @click="eliminarPersona">Eliminar</button>  

    </div>
  </div>
  <div v-if="msj" class="alert alert-primary" role="alert">
    {{mensaje}}
</div>
  </template>
  
  <script>
  import {eliminarPersonaFachada} from '../helpers/PersonaCliente'
  export default {
  
  data(){
      return{
          id:null,
          
      msj:false,
            mensaje:null
      }
  },
  methods:{
       eliminarPersona(){
         eliminarPersonaFachada(this.id)
         this.msj=true
            this.mensaje='Persona eliminado correctamente'
         
      }
  }
  }
  </script>
  
  <style>
  
  </style>