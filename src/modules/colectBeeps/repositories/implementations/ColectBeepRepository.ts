import { ColectBeep } from '../../model/ColectBeep';
import { IColectBeepRepository } from '../IColectBeepRepository';
import knex from '../../../../database/db';

export class ColectBeepRepository implements IColectBeepRepository {
  private static INSTANCE: ColectBeepRepository;

  private constructor() { }
  public static getInstance(): ColectBeepRepository {
    if (!ColectBeepRepository.INSTANCE) {
      ColectBeepRepository.INSTANCE = new ColectBeepRepository();
    }
    return ColectBeepRepository.INSTANCE;
  }

  async get(): Promise<ColectBeep | Error> {

    // const url_SAMES = 'https://api-athenasaude.sensedia.com/desenvolvimento/api-transformacoes-allstrategy-sames-mv/interno/v1/dre'
    // const url_HEMO = 'https://api-athenasaude.sensedia.com/desenvolvimento/api-transformacoes-allstrategy-hemodinamica-mv/interno/v1/dre'

    try {
      const sql = `
                
        `;
      // INSERT INTO ******(
      //   reading_reader_ip,
      //   reading_epc_hex,
      //   reading_created_at,
      // )

      const result = await knex.raw(sql);

      return result;

      // await knex.raw(sql);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
