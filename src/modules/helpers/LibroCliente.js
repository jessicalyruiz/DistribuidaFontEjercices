import axios from "axios"


export const obtenerLibroFachada = async (id) => {
    return await obtenerLibroAPI(id);
  } 

export const mostrarTodosFachada= async()=>{
    console.log("Mostrar todos");
   return await mostrarTodos();
}


export const IngresarLibroFachada=(bodyLibro)=>{
    IngresarLibro(bodyLibro)
}

export const actualizarLibroFachada = (bodyLibro, id) => {
    actualizarLibro(bodyLibro,id);
  }
  
  export const eliminarLibroFachada = (id) => {
   return eliminarLibro(id);
  }
  









const IngresarLibro=async(bodyLibro)=>{
    axios.post('http://localhost:8081/API/v1.0/Supermaxi/libros', bodyLibro,{headers:header}).then(r=>r.data);
}


const mostrarTodos=async()=>{

  return  axios.get('http://localhost:8081/books').then(r=>r.data);
}


const obtenerLibroAPI = async (id) => {
  //en el config vamos a enviar todos los dartos de cabecera

  const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/libros/${id}`,{headers:headers}).then(r => r.data)
  console.log(data)
  return data
}



const actualizarLibro = (bodyLibro, id) => {

 
    axios.put(`http://localhost:8082/API/v1.0/Matricula/libros/${id}`, bodyLibro, {headers:headers}).then(r => r.data)
  
  }
  
  const eliminarLibro = (id) => {
   
   return  axios.delete(`http://localhost:8082/API/v1.0/Matricula/libros/${id}`, {headers:headers}).then(r => r.data)
  
  }



const header={
    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqZXNzaTIiLCJpYXQiOjE2OTM2NDA2MjcsImV4cCI6MTY5NDAwMDYyN30.6NE3VBd32-WXjhf0W_IG65FGLDhwhNihAXh_m_fhQJ0e9_sE9CsouQMlR9aIywpGxG_nj6nZfLcWiW_bGc6cdw"
}