import axios from "axios"


export const obtenerPersonaFachada = async (id) => {
    return await obtenerPersonaAPI(id);
  } 

export const mostrarTodosFachada= async()=>{
    console.log("Mostrar todos");
   return await mostrarTodos();
}


export const IngresarPersonaFachada=(bodyPersona)=>{
    IngresarPersona(bodyPersona)
}

export const actualizarPersonaFachada = (bodyPersona, id) => {
    actualizarPersona(bodyPersona,id);
  }
  
  export const eliminarPersonaFachada = (id) => {
   return eliminarPersona(id);
  }
  









const IngresarPersona=(bodyPersona)=>{
    axios.post('http://localhost:8081/personas', bodyPersona).then(r=>r.data);
}


const mostrarTodos=async()=>{

  return  axios.get('http://localhost:8081/personas').then(r=>r.data);
}


const obtenerPersonaAPI = async (id) => {
  

  const data = await axios.get(`http://localhost:8081/personas/${id}`).then(r => r.data)
  console.log(data)
  return data
}



const actualizarPersona = (bodyPersona, id) => {

 
    axios.put(`http://localhost:8081/personas/${id}`, bodyPersona, {headers:header}).then(r => r.data)
  
  }
  
  const eliminarPersona = (id) => {
   
   return  axios.delete(`http://localhost:8081/personas/${id}`, {headers:header}).then(r => r.data)
  
  }



const header={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZXNzaTIiLCJpYXQiOjE2OTM2NDA2MjcsImV4cCI6MTY5NDAwMDYyN30.6NE3VBd32-WXjhf0W_IG65FGLDhwhNihAXh_m_fhQJ0e9_sE9CsouQMlR9aIywpGxG_nj6nZfLcWiW_bGc6cdw"
}