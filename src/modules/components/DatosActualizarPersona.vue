<template>
    <div class="container">
    <div class="contenido">
        <label for="nombre">Ingresa id</label>
<input type="text" id="id" v-model="id">
<label for="nombre">Ingresa nombre</label>
<input type="text" nombre="nombre" v-model="nombre">
  <label for="direccion">Ingresa la direccion</label>
<input type="text" nombre="direccion" v-model="direccion">
  <label for="">Edad</label>
  <input v-model ="edad" name="" nombre="">
  <button @click="actualizarPersona">Actualizar</button>
</div>
</div>
<div v-if="msj" class="alert alert-primary" role="alert">
    {{mensaje}}
</div>
</template>

<script>

import {actualizarPersonaFachada} from "../helpers/PersonaCliente.js"

export default {
 data(){
        return{
            id:null,
            direccion:null,
            nombre:null,
            
            edad:null,
            msj:false,
            mensaje:null
        }
    },
    methods:{
        async actualizarPersona(){

            const persona={
                id:this.id,
                nombre:this.nombre,
                direccion: this.autor,
                edad: this.edad
            }
            await actualizarPersonaFachada(persona, this.id);
            this.msj=true
            this.mensaje='Persona actualizado correctamente'
            this.id=null,
           this.direccion=null,
           this.nombre=null,
           
           this.edad=null
          
           
        }
    }

}
</script>

<style>

</style>
