


/**
 * [X] Recebimento das info
 * [X] tratativa de erros e excessoes
 * [X] acesso ao repo
 */

import ConverterRepository from "../repositories/ConverterRepository"


interface ConverterServiceDTO{
  value: number
}

class ConverterService{
  public async execute({value}:ConverterServiceDTO):Promise<number|undefined>{

    // Verificar se o usuário digitou apenas 0/1 
    // fazer mais validações se necessário
    var decValue

    try{
      const regexValidate = /\D|[2-9]/;

      if(String(value).match(regexValidate)){
        throw new Error("Only binary values ​​are allowed")
      }

      const converterRepository = new ConverterRepository();

      decValue = await converterRepository.toConvert({value:value})
      
    }catch(err){
    }

    return decValue
  
  }
}

export default ConverterService