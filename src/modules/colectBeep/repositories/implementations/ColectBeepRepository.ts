import { ColectBeep } from '../../model/ColectBeep';
import { IColectBeepRepository } from '../IColectBeepRepository';
import knex from '../../../../database/db';

export class ColectBeepRepository implements IColectBeepRepository {
  private static INSTANCE: ColectBeepRepository;

  private constructor() {}
  public static getInstance(): ColectBeepRepository {
    if (!ColectBeepRepository.INSTANCE) {
      ColectBeepRepository.INSTANCE = new ColectBeepRepository();
    }
    return ColectBeepRepository.INSTANCE;
  }

  async create(data: ColectBeep): Promise<void | Error> {
    try {
      /*
      let [result] = await knex.raw(
        `SELECT cd_dti_beneficiario FROM dataintegra.tbl_dti_beneficiario WHERE cd_beneficiario = ${data.codigo_beneficiario}`,
      );
      console.log(result);
      if (result) {
        throw new Error('RegisteredAlreadyExists!');
      }*/

      const sql = `INSERT INTO ******(
        EPC,
        DATA,
        )        
        VALUES 
        ('${data.epc}',
        '${data.date}',
        `;

      await knex.raw(sql);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
