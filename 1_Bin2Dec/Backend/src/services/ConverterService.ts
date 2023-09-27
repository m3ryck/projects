


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
  public async execute({value}:ConverterServiceDTO):Promise<number>{

    // Verificar se o usuário digitou apenas 0/1 
    // fazer mais validações se necessário

    const converterRepository = new ConverterRepository();


    const binValue = value

    const decValue = converterRepository.toConvert({value:binValue})

    return decValue
  }
}

export default ConverterService