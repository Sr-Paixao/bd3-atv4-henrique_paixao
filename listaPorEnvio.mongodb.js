// lista as mensagens na ordem de horário que foram enviadas

const database = 'bd3-atv4-henrique_paixao';

const collection = 'bd3_atv4_chat';

use(database);

db[collection].find().sort({ dt_hora: 1 })