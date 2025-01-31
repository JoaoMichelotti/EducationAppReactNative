export default [
    {
        id: 1,
        source: require("../../assets/HtmlBasic.jpg"),
        name: "Desenvolvimento web",
        lessons: "15 aulas",
        by: "by João",
        about: "Esse curso é um introdutório a HTML e CSS, todos os conceitos básicos são explicados.",
        topicos: [
            {id: 1, topico: "Introdução"}, 
            {id: 2, topico: "Tabelas"}, 
            {id: 3, topico:"Formulários"},
            {id: 4, topico :"Folhas de Estilo"},
            {id: 5, topico:"Bootstrap"}, 
            {id: 6, topico:"Portfolio"}
        ],
        Infos:  [
                {
                id: 1,
                imagens: [
                    require("../../assets/DesenvolvimentoWeb/IntroducaoImg1.png"),
                    require("../../assets/DesenvolvimentoWeb/IntroducaoImg2.png"),
                    require("../../assets/DesenvolvimentoWeb/IntroducaoImg3.png"),
                    require("../../assets/DesenvolvimentoWeb/IntroducaoImg4.png"),
                    require("../../assets/DesenvolvimentoWeb/IntroducaoImg5.png"),
                ]
                }
                ]
    },
    {
        id: 2,
        source: require("../../assets/pythonBasic.jpg"),
        name: "Introdução ao python",
        lessons: "15 aulas",
        by: "by João",
        about: "Esse curso é um introdutório a linguagem de programação python, todos os conceitos básicos são explicados.",
        topicos: ["Introdução", "Variaveis", "Condicionais",
            "Laços de Repetição", "Manipulação de Strings", "Listas", "Tuplas", "Dicionários"
        ]
    }
]