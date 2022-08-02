import { v4 as uuidV4 } from 'uuid';

class ColectBeep {

  reading_reader_ip: string; //'192.168.18.200',
  reading_epc_hex: string; //'E280116060000217A5DD62B1',
  reading_company_id: string; //' ',
  reading_created_at: Date; //'2022-08-02 16:56:47.0486'

  /*constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }*/
}

export { ColectBeep };
