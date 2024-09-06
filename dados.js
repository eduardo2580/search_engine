let dados = [
  {
      titulo: "Livro dos Feitiços Proibidos",
      descricao: "Este antigo grimório contém feitiços perigosos e ilegais que foram banidos do uso pela comunidade bruxa. Ele é mantido trancado a sete chaves na Biblioteca Proibida, disponível apenas para bruxos corajosos (ou tolos) o suficiente para tentar estudá-lo.",
      link: "https://harrypotter.fandom.com/wiki/Restricted_Section",
      tags: "feitiços, proibidos, grimório, história, magia, harry potter"
  },
  {
      titulo: "Magia das Trevas: Uma História Completa",
      descricao: "Este livro detalha a ascensão e queda dos mais poderosos bruxos das trevas da história, explorando as artes proibidas que muitos temem e poucos ousam mencionar. Ele é uma leitura perigosa, mesmo para os bruxos mais experientes.",
      link: "https://harrypotter.fandom.com/wiki/Dark_Arts",
      tags: "magia, trevas, bruxos, história, harry potter"
  },
  {
      titulo: "O Enigma dos Horcruxes",
      descricao: "Um dos livros mais raros da Biblioteca Proibida, descreve o processo sombrio e aterrorizante de criação de Horcruxes, um segredo bem guardado que só os bruxos mais malévolos conhecem.",
      link: "https://harrypotter.fandom.com/wiki/Horcrux",
      tags: "horcruxes, magia, história, harry potter"
  },
  {
      titulo: "A Maldição dos Fundadores",
      descricao: "Este livro narra as histórias sombrias e os mistérios por trás dos quatro fundadores de Hogwarts. Ele contém segredos ocultos que nunca foram revelados ao público, escondendo um poder perigoso entre suas páginas.",
      link: "https://harrypotter.fandom.com/wiki/Hogwarts_Founders",
      tags: "fundadores, hogwarts, história, magia, harry potter"
  },
  {
      titulo: "As Relíquias da Morte: A Verdade por Trás do Mito",
      descricao: "Um estudo profundo sobre as Relíquias da Morte, desmascarando os mitos e revelando os verdadeiros perigos que essas poderosas ferramentas mágicas representam. Poucos tiveram acesso a esse conhecimento sem sofrer as consequências.",
      link: "https://harrypotter.fandom.com/wiki/Deathly_Hallows",
      tags: "relíquias, morte, história, magia, harry potter"
  },
  {
      titulo: "A Magia de Sangue Antiga",
      descricao: "Um dos volumes mais sombrios da Biblioteca Proibida, este livro explora a antiga magia de sangue, um tipo de feitiçaria considerada extremamente perigosa e poderosa, conectando feitiços à linhagem e ao sacrifício de sangue.",
      link: "https://harrypotter.fandom.com/wiki/Blood_Magic",
      tags: "magia, sangue, história, feitiços, harry potter"
  },
  {
      titulo: "O Livro das Maldições Imperdoáveis",
      descricao: "Este volume descreve detalhadamente as três Maldições Imperdoáveis: Avada Kedavra, Crucio e Imperius. Embora apenas mencionadas em público, seus detalhes completos e as formas de defesa contra elas estão trancados nas prateleiras proibidas.",
      link: "https://harrypotter.fandom.com/wiki/Unforgivable_Curses",
      tags: "maldições, imperdoáveis, feitiços, história, harry potter"
  },
  {
      titulo: "Animagia e Metamorfose",
      descricao: "Um dos livros mais avançados da Biblioteca Proibida, este guia detalha as intricadas técnicas e perigos de se transformar em um Animago, além de explorar formas proibidas de metamorfose e transfiguração.",
      link: "https://harrypotter.fandom.com/wiki/Animagus",
      tags: "animagia, metamorfose, transfiguração, história, magia, harry potter"
  },
  {
      titulo: "Runas Antigas e seus Mistérios",
      descricao: "Este livro aprofunda-se nas runas antigas, sua origem e poder. Muitas das inscrições nas paredes da Biblioteca Proibida são baseadas nessas runas, e compreendê-las pode desbloquear segredos ocultos.",
      link: "https://harrypotter.fandom.com/wiki/Ancient_Runes",
      tags: "runas, antigas, história, magia, harry potter"
  },
  {
      titulo: "A Vida e os Tempos de Grindelwald",
      descricao: "Este livro controverso descreve a vida de Gellert Grindelwald, suas ideologias e seus atos sombrios que abalaram o mundo bruxo. Contém detalhes sobre as batalhas que travou e os objetos mágicos que buscava.",
      link: "https://harrypotter.fandom.com/wiki/Gellert_Grindelwald",
      tags: "grindelwald, história, magia, bruxos, harry potter"
  },
  {
      titulo: "O Véu do Mistério: A Sala da Morte",
      descricao: "Este livro é o único que contém descrições detalhadas sobre o véu misterioso encontrado no Departamento de Mistérios do Ministério da Magia. Ele explora o fenômeno mágico por trás da sala da morte e teoriza sobre a conexão entre o mundo dos vivos e dos mortos.", 
      link: "https://harrypotter.fandom.com/wiki/Death_Chamber",
      tags: "véu, mistério, morte, magia, harry potter"
  }, 
  { 
      titulo: "A Origem dos Dementadores", 
      descricao: "Um livro proibido que explica a criação e a natureza dos Dementadores. Ele revela o processo obscuro por trás da formação dessas criaturas sugadoras de alma e os segredos de sua origem.", 
      link: "https://harrypotter.fandom.com/wiki/Dementor",
      tags: "dementadores, magia, história, harry potter"
  }, 
  { 
      titulo: "Poções Proibidas e seus Efeitos", 
      descricao: "Este livro detalha as receitas e efeitos de poções altamente perigosas e proibidas, incluindo aquelas capazes de controlar a mente ou induzir morte instantânea. Seu uso é estritamente regulado.", 
      link: "https://harrypotter.fandom.com/wiki/Potions",
      tags: "poções, proibidas, efeitos, história, magia, harry potter"
  }, 
  { 
      titulo: "O Livro de Merlin", 
      descricao: "Um lendário tomo escrito pelo próprio Merlin, contendo feitiços e encantamentos poderosos que são inacessíveis a qualquer bruxo comum. Poucos tiveram a coragem de tentar desvendá-lo.", 
      link: "https://harrypotter.fandom.com/wiki/Merlin",
      tags: "merlin, feitiços, encantamentos, história, magia, harry potter" 
  }, 
  { 
      titulo: "A Verdade sobre os Inferi", 
      descricao: "Este livro explora os macabros feitiços de necromancia usados para criar os Inferi, cadáveres reanimados por magia das trevas. Ele oferece advertências sobre os perigos e a imoralidade de tal prática.", 
      link: "https://harrypotter.fandom.com/wiki/Inferius",
      tags: "inferi, necromancia, feitiços, história, magia, harry potter" 
  } 
];