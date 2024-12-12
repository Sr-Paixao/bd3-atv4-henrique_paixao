// lista a mensagem por uma palavra específica

const database = 'bd3-atv4-henrique_paixao';

const collection = 'bd3_atv4_chat';

use(database);

db[collection].find({ mensagem: { $regex: "quem", $options: "i" } });