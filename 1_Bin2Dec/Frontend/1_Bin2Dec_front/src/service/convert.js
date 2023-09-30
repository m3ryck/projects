import api from ".";

export default async function Convert(value){
    const response = await api.post('/converter',{value:value}).then((resp)=>{
      return(resp.data.value)
    }).catch((err)=>{
      console.log(err)
    })

    return response
}

// export async function Teste(){
//   api.get().then((resp)=>{
//     return resp.data
//   }).catch((err)=>{
//     console.log(err)
//     return null
//   })
// }
