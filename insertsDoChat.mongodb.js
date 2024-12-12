const database = 'bd3-atv4-henrique_paixao';

const collection = 'bd3_atv4_chat';

use(database)

db[collection].insertMany(
    [
        {
            "mensagem": "Menina, cê não sabe da última! Lembra do fulano? Então, ele largou tudo pra virar streamer! 😂",
            "dt_hora": "2024-12-12T09:47:00Z"
        },
        {
            "mensagem": "Que?? Tá brincando? Kkkk, imagina ele tentando gravar vídeo todo certinho... Ele nem sabe falar direito com a galera!",
            "dt_hora": "2024-12-12T10:13:45Z"
        },
        {
            "mensagem": "Pois é, mas parece que tá dando certo, viu? Disseram que ele já tá com um monte de seguidores. Quem diria, hein? 🤯",
            "dt_hora": "2024-12-12T10:45:10Z"
        },
        {
            "mensagem": "Mds, que mundo é esse? A pessoa só começa a gravar vídeo e vira famosinho do nada? Kkk, quero também!",
            "dt_hora": "2024-12-12T11:07:22Z"
        },
        {
            "mensagem": "Vai nessa, amiga! Quem sabe você não vira a próxima sensação da internet? Já pensou, você fazendo aqueles vídeos de dança tosca? 😂",
            "dt_hora": "2024-12-12T11:25:39Z"
        },
        {
            "mensagem": "Hahaha, para! Mas falando sério, eu até curto ver essas coisas, mas não tenho coragem de aparecer assim, não. Muita exposição!",
            "dt_hora": "2024-12-12T11:47:03Z"
        },
        {
            "mensagem": "Ah, amiga, é tudo questão de prática! Começa gravando só pra vc, depois vai soltando aos poucos. Vai que cola!",
            "dt_hora": "2024-12-12T12:05:28Z"
        },
        {
            "mensagem": "Hm, não sei... Mas me conta, tem mais babado sobre o fulano ou acabou a fofoca? Quero detalhes! 👀",
            "dt_hora": "2024-12-12T12:34:16Z"
        },
        {
            "mensagem": "Amiga, pior que parece que ele tá saindo com a ciclana também! Tô chocada! 🤯 Já imaginou? Ela que jurava que ia ficar solteira pra sempre.",
            "dt_hora": "2024-12-12T13:02:49Z"
        },
        {
            "mensagem": "Kkkkk, para tudo! Eu tô amando essa novela da vida real. Já tô preparando a pipoca pra acompanhar os próximos capítulos. 🍿",
            "dt_hora": "2024-12-12T13:44:01Z"
        }
    ]    
)