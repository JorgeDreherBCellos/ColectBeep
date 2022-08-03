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
      const sql = `INSERT INTO ******(
        reading_reader_ip,
        reading_epc_hex,
        reading_created_at,
        )        
        VALUES 
        ('${data.reading_reader_ip}',
        '${data.reading_epc_hex}',
        '${data.reading_company_id}',
        '${data.reading_created_at}',)
        `;

      await knex.raw(sql);
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
