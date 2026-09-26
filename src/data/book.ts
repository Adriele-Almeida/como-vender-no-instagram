export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; kicker: string; text: string }
  | { type: "compare"; leftTitle: string; left: string; rightTitle: string; right: string }
  | { type: "cards"; items: { title: string; text: string }[] }
  | { type: "tool"; id: "bio" | "metric" | "semantic" | "diet" | "check" };

export type Chapter = {
  slug: string;
  title: string;
  kicker: string;
  minutes: number;
  lead: string;
  blocks: Block[];
};

export const book = {
  title: "Como vender no Instagram",
  author: "Adriele Almeida",
  role: "Estrategista digital",
  season: "Segundo semestre de 2026",
  dek: "O jogo deixou de ser de números. Agora é de intencionalidade.",
};

export const chapters: Chapter[] = [
  {
    slug: "propicio",
    title: "O Instagram nunca esteve tão propício",
    kicker: "O cenário",
    minutes: 5,
    lead: "Este guia é para quem já entendeu que o Instagram mudou e ainda não sabe o que fazer com isso. Para quem é leigo. Para quem se perdeu no digital novo. Para quem quer vender — não ficar famoso.",
    blocks: [
      {
        type: "p",
        text: "Meu nome é Adriele Almeida. Sou estrategista digital. Tenho uma bagagem de cerca de vinte anos como designer gráfica. Aos nove anos eu não brincava de pentear boneca: brincava no CorelDRAW. Sempre fui visual. Sempre fui apaixonada por tudo que envolve desenho, forma e intenção.",
      },
      {
        type: "p",
        text: "Cinco anos atrás entrei no marketing digital, e não foi de qualquer jeito. Entrei por tráfego pago, bem específico: o setor imobiliário. Fazia campanha junto com a minha irmã. Na cabeça eu tinha um hábito fixo — e se eu testar isso? E se eu não fizer nesse formato, e fizer naquele?",
      },
      {
        type: "p",
        text: "Na época, curso atrás de curso repetia a mesma frase: era preciso investir um dinheiro considerável na plataforma. Sem perceber, construí o meu próprio método. Enquanto o mercado colocava uma fortuna, eu investia R$ 10 por dia. E performava.",
      },
      {
        type: "quote",
        text: "O que muda o jogo não são os botões. São as estratégias. De nada adianta dominar o botão sem estratégia. De nada adianta ter estratégia sem dominar o botão. Mas a estratégia sempre sobressai.",
      },
      {
        type: "p",
        text: "Fiquei cerca de dois anos na imobiliária. Depois abri o método para outros segmentos, para levar a mais gente a possibilidade real de estar no marketing digital. Não como hobby de postagem. Como negócio.",
      },
      { type: "h", text: "O que mudou no fim de 2025" },
      {
        type: "p",
        text: "Com a inteligência artificial, o marketing acelerou e parou de entregar a qualquer custo. Quem já contratou gestor de tráfego ou agência percebeu: não importava mais a quantidade de dinheiro aplicada na plataforma. Dificilmente performava.",
      },
      {
        type: "p",
        text: "Quase ninguém viu a hora exata da virada. Ela aconteceu no fim de 2025, quando a Meta — dona do Instagram, do Facebook, do WhatsApp e de outras ferramentas — inseriu uma nova inteligência artificial, um novo algoritmo. O Instagram já tinha mudado de posicionamento. Na virada do ano, a mudança se escancarou, favorecendo negócios. Principalmente negócios locais.",
      },
      {
        type: "p",
        text: "Desde então, por instinto de quem observa o jogo de perto, eu venho dizendo a mesma frase: o Instagram nunca esteve tão propício para negócios como neste ano de 2026.",
      },
      {
        type: "callout",
        kicker: "Como ler este guia",
        text: "O material foi editado a partir da fala, com referência de julho de 2026, para o segundo semestre. Botão envelhece. Nome de função muda. A estratégia que está aqui não depende do botão da semana.",
      },
    ],
  },
  {
    slug: "porque",
    title: "Do quê para o porquê",
    kicker: "O novo algoritmo",
    minutes: 5,
    lead: "As pessoas perceberam que mudou. Não sabiam o que mudou. Agora está escancarado. Neste segundo semestre o Instagram acelerou de novo — e não vai parar.",
    blocks: [
      {
        type: "p",
        text: "Este guia existe para você crescer e performar sem virar refém da plataforma. O Instagram nunca esteve tão robusto, nem tão pronto. O que antes ficava debaixo do capô agora está visível para quase todo mundo. O jogo não é mais para amador. É jogo de gente grande.",
      },
      { type: "h", text: "O motor antigo contava. O novo entende." },
      {
        type: "p",
        text: "Antes, o algoritmo entendia números. A pessoa curtia um vídeo de cachorro. Um pouco adiante, via outro cachorro, curtia, comentava ou salvava. O Instagram mandava uma chuva de cachorro, porque entendia que aquele usuário gosta de cachorro. Não estava errado. Estava raso.",
      },
      {
        type: "p",
        text: "O motor antigo media o quê: quantas vezes você interagiu com aquele tipo de conteúdo. O motor novo mede o porquê. Aquele usuário curte cachorro porque tem um — e o cachorro dele é um Golden Retriever. A partir daí, o algoritmo deixa de empilhar posts aleatórios e passa a entregar o que conversa com a vida daquela pessoa.",
      },
      {
        type: "compare",
        leftTitle: "Motor antigo",
        left: "Conta curtidas, comentários e salvamentos por categoria. Entende o quê a pessoa consome. Entrega volume do mesmo tema, mesmo quando o tema é genérico.",
        rightTitle: "Motor novo",
        right: "Lê a intenção. Entende o porquê daquele interesse e entrega conteúdo ligado à vivência — mais específico, mais difícil de ignorar, mais tempo de tela.",
      },
      {
        type: "quote",
        text: "O pulo do gato é a intencionalidade. O novo algoritmo do Instagram mudou do quê para o porquê.",
      },
      {
        type: "p",
        text: "Daqui para a frente será uma mudança atrás da outra. Com várias inteligências artificiais ao mesmo tempo, ferramenta entra, ferramenta sai, botão muda de lugar, função nasce e função morre — conforme o mercado e conforme o comportamento do público.",
      },
      {
        type: "callout",
        kicker: "O que fica",
        text: "Quem corre atrás do botão se perde toda semana. Quem tem estratégia atravessa a mudança, porque a mudança passou a ser o estado normal da plataforma.",
      },
    ],
  },
  {
    slug: "vaidade",
    title: "Curtidas não pagam contas",
    kicker: "Métricas",
    minutes: 4,
    lead: "As métricas da vaidade perderam o peso. Curtida não paga conta. Seguidor, sozinho, também não muda a sua vida.",
    blocks: [
      {
        type: "p",
        text: "Quem quer vender no Instagram precisa se despir disso. O seu post pode ter dez curtidas. Se ele trouxe directs — mensagens de verdade — pesa mais do que mil curtidas e dez mil seguidores.",
      },
      {
        type: "p",
        text: "O que conta agora é interação que prova gente do outro lado: comentário, compartilhamento, salvamento e, principalmente, mensagem no direct.",
      },
      {
        type: "list",
        items: [
          "Comentário mostra que a pessoa parou e respondeu.",
          "Compartilhamento mostra que ela levou você para a rede dela.",
          "Salvamento mostra que o conteúdo tem uso, não só passagem.",
          "Direct mostra intenção. É ali que o negócio começa.",
        ],
      },
      {
        type: "p",
        text: "Se a meta é viralizar a qualquer custo, este material não serve. Eu não cresço número por número. Eu cresço negócio. Eu cresço relevância. Perfil cheio de seguidor, sem audiência, é cenário. Audiência é quem consome, compra, indica e acompanha. Isso tem valor.",
      },
      {
        type: "p",
        text: "Limpar o perfil pode fazer você perder seguidor. E ganhar audiência. É uma troca boa. O feed deixa de falar com plateia fantasma e passa a falar com quem pode comprar.",
      },
      {
        type: "quote",
        text: "Pessoas compram de pessoas. Nunca vai existir um CNPJ sem um CPF por trás. O Instagram é além do produto e além do serviço.",
      },
      { type: "h", text: "A métrica de ouro" },
      {
        type: "p",
        text: "No painel profissional tem número de sobra. O que embasa a estratégia é comparar visualização com interação. Dez mil visualizações e vinte interações mostram o tamanho da irrelevância. Um conteúdo com menos alcance e trezentas interações é conteúdo para repetir: as visualizações tendem a subir depois.",
      },
      {
        type: "p",
        text: "Postar em volume, sem intenção, só aumenta a irrelevância. Você não precisa de mais posts. Precisa de posts que prendem a pessoa na tela.",
      },
      { type: "tool", id: "metric" },
    ],
  },
  {
    slug: "tres-segundos",
    title: "Três perguntas em três segundos",
    kicker: "A bio",
    minutes: 4,
    lead: "O novo Instagram exige mais do que um perfil bonitinho e mais do que volume de postagem. Exige intencionalidade, conexão genuína e estratégia técnica.",
    blocks: [
      {
        type: "p",
        text: "O primeiro corte é a biografia. Ela precisa responder, em três segundos, três perguntas. Quem você é. O que você faz. Para quem você faz. Cirúrgico — para o algoritmo entender rápido o seu posicionamento, e para o público também.",
      },
      {
        type: "cards",
        items: [
          {
            title: "Quem você é",
            text: "O nome do ofício, não um adjetivo vazio. Estrategista, imobiliária, clínica, ateliê. A pessoa precisa saber com quem está falando.",
          },
          {
            title: "O que você faz",
            text: "O verbo do negócio. Não a lista de tudo que você sabe fazer. Uma frase que caiba na respiração de quem chegou agora.",
          },
          {
            title: "Para quem você faz",
            text: "O recorte. Sem isso, a bio fica elegante e muda. O algoritmo e o cliente precisam do mesmo endereço.",
          },
        ],
      },
      {
        type: "p",
        text: "Bio bem escrita sem público definido não segura. Você precisa saber quem é essa pessoa, o que ela compra de você e por que pararia o dedo no seu perfil. As três perguntas são a porta. O público é a casa.",
      },
      { type: "tool", id: "bio" },
    ],
  },
  {
    slug: "pilares",
    title: "Autoridade, conexão, confiança",
    kicker: "O alicerce",
    minutes: 3,
    lead: "Três perguntas na bio não bastam se o perfil não sustenta três pilares. Com o alicerce no lugar, negócio deixa de ser sorte.",
    blocks: [
      {
        type: "cards",
        items: [
          {
            title: "Autoridade percebida",
            text: "Você pode ser muito bom no que faz. Se as pessoas não percebem, não tem peso. Autoridade que não aparece não existe para o mercado.",
          },
          {
            title: "Conexão genuína",
            text: "Não basta ser forte no ofício. As pessoas compram de quem elas gostam e de quem elas se conectam. Sem ligação, não tem negócio.",
          },
          {
            title: "Confiança",
            text: "É o que fecha. Autoridade chama. Conexão aproxima. Confiança autoriza a pessoa a te chamar no direct e decidir.",
          },
        ],
      },
      {
        type: "p",
        text: "Tendo esses três, o alicerce fica matemático: não tem como não dar negócio — desde que você não fale com todo mundo ao mesmo tempo. Esse é o próximo corte, e é onde a maioria se perde.",
      },
      {
        type: "callout",
        kicker: "Ordem",
        text: "Primeiro a bio responde em três segundos. Depois os três pilares sustentam o perfil. Só então a comunicação escolhe um público. Sem essa ordem, conteúdo vira barulho bonito.",
      },
    ],
  },
  {
    slug: "um-publico",
    title: "Um público de cada vez",
    kicker: "Posicionamento",
    minutes: 6,
    lead: "Quem fala com todo mundo não fala com ninguém. Se você tem vários serviços ou vários produtos — a realidade da maioria — precisa escolher um público por vez.",
    blocks: [
      {
        type: "p",
        text: "Escolher não significa abandonar o resto do negócio. Significa não misturar comunicação em tempo real, como se todo mundo doesse da mesma coisa e rolando o feed no mesmo horário, com a mesma cabeça.",
      },
      { type: "h", text: "O exemplo da imobiliária" },
      {
        type: "p",
        text: "Uma imobiliária vende imóvel popular, médio e alto padrão. Também trabalha com locação. Esses públicos não são os mesmos. A comunicação não pode ser a mesma. O posicionamento no Instagram, por um tempo, escolhe um.",
      },
      {
        type: "p",
        text: "Mesmo dentro de um único produto já cabem pessoas diferentes. Imóvel popular, por exemplo:",
      },
      {
        type: "cards",
        items: [
          {
            title: "Quem quer sair do aluguel",
            text: "A dor é segurança. Vou assumir uma prestação e perder o emprego? Vou sair da casa dos pais e não dar conta?",
          },
          {
            title: "Investidor",
            text: "A dor é o erro. Será que este imóvel valoriza? Será que vale a pena mesmo?",
          },
          {
            title: "Casal jovem",
            text: "A dor é o tempo. Será que é cedo demais para comprar um apartamento agora?",
          },
          {
            title: "Casal com filho pequeno",
            text: "A dor é a localização. O trabalho de um, o trabalho do outro, a escola. A vida precisa fazer sentido naquele endereço.",
          },
        ],
      },
      {
        type: "p",
        text: "Não dá para vender o mesmo apartamento, do mesmo jeito, para essas quatro pessoas. Você escolhe o público mais propício pela sua experiência de mercado — o que já se mostra mais assertivo — e fala com ele.",
      },
      { type: "h", text: "Estudar a dor e narrar a solução" },
      {
        type: "p",
        text: "A técnica, na prática, é semântica aplicada à vida da pessoa. Você para de descrever o produto e passa a tocar a dor.",
      },
      {
        type: "quote",
        text: "A sua rotina está acabando com você. Você trabalha num lugar, sua esposa em outro, seu filho precisa ir à escola. Este apartamento de três quartos no Barreiro fica perto do Anel Rodoviário, com acesso ao centro, a Betim e à escola.",
      },
      {
        type: "p",
        text: "Aqui você deixa de vender metragem e vende solução. O produto continua lá. A frase começa na vida de quem lê.",
      },
      {
        type: "p",
        text: "No planejamento, as semanas se separam: uma semana o investidor, outra o casal com filho, outra o próximo público, até vender aquele imóvel. Não se mistura popular com alto padrão no mesmo posicionamento. O mercado imobiliário muda o tempo todo, e você pode reposicionar. Não em tempo real, no mesmo feed, como se fosse a mesma pessoa do outro lado. Comportamento dentro da plataforma também é outro. Isso entra na conta.",
      },
      {
        type: "p",
        text: "Produto funciona igual. Uma loja que vende capinha e assistência técnica não fala com “todo mundo que tem celular”. Quem troca capinha para combinar com a roupa tem idade, linguagem e hábito diferentes de quem só quer consertar a tela. O exemplo é genérico de propósito: o seu público se define com estudo, não com chute.",
      },
      {
        type: "callout",
        kicker: "Antes de ligar o motor",
        text: "Bio em três segundos. Três pilares de pé. Público nomeado: quem é, onde está, que horas rola o feed, qual é a dor. Só então a engrenagem liga. O nome dela, daqui a pouco, é marketing invisível. Antes, você precisa entender que cada formato do Instagram tem um algoritmo.",
      },
    ],
  },
  {
    slug: "dieta",
    title: "A dieta do Instagram",
    kicker: "Formatos",
    minutes: 4,
    lead: "O algoritmo do story não é o algoritmo do reel. Cada posicionamento tem função, critério e intencionalidade. O Instagram dança entre eles. Você também precisa dançar.",
    blocks: [
      {
        type: "p",
        text: "Story é a bolinha de cima, que dura cerca de vinte e quatro horas. Carrossel é o post que a pessoa vai passando, imagem depois de imagem. Reel é o vídeo que aparece enquanto ela rola. E existe ainda o post de imagem fixa, o post em si. Quatro lugares. Quatro critérios.",
      },
      { type: "tool", id: "diet" },
      {
        type: "p",
        text: "Isso é a dieta. Não pode ser só um alimento. Story sem reel não descobre gente nova. Reel sem carrossel não aprofunda. Carrossel sem story não cria confiança no dia a dia. Imagem estática também entra: o algoritmo lê o que você escreveu nela.",
      },
      {
        type: "p",
        text: "Ele lê a imagem. Lê a legenda. Escuta o que você fala no vídeo. Lê até o tipo de objeto que aparece. Tudo isso é metrificado com o critério daquele formato e amplificado a partir daí.",
      },
      {
        type: "callout",
        kicker: "Constância com critério",
        text: "Reels pedem constância porque são descoberta. Não é postar por postar. É aparecer com frequência no formato que apresenta você a quem ainda não te segue — já falando com um público, não com todo mundo.",
      },
    ],
  },
  {
    slug: "semantica",
    title: "A técnica da semântica",
    kicker: "Ser encontrado",
    minutes: 5,
    lead: "Quase ninguém percebeu: o Instagram virou um novo Google. O que ele lê na imagem, na legenda e no áudio entra como motor de busca. Aparecer assim é aparecer de graça. O nome disso é SEO.",
    blocks: [
      {
        type: "p",
        text: "Quem domina a técnica da semântica entra num dos critérios mais fortes do jogo novo. O Instagram está com sede de quem fala a língua desses critérios.",
      },
      {
        type: "p",
        text: "Semântica, aqui, não é enfileirar palavra-chave. É pegar a palavra e envolver numa narrativa que uma pessoa real diria, em voz alta, procurando aquilo.",
      },
      {
        type: "compare",
        leftTitle: "Só a chave",
        left: "Apartamento à venda no bairro Milionários.",
        rightTitle: "Chave dentro da narrativa",
        right: "Você que está procurando apartamento para comprar no bairro Milionários: esta é uma opção forte para quem precisa de acesso fácil.",
      },
      {
        type: "p",
        text: "A palavra continua lá — na legenda ou no roteiro do vídeo. O que muda é o entorno. O motor passa a ler intenção, não só termo. É a mesma lógica do capítulo anterior: do quê para o porquê, agora na frase.",
      },
      {
        type: "p",
        text: "No perfil, o prompt que eu publico para usar com qualquer inteligência artificial é simples. Você manda a imagem do post e pede a legenda com a técnica. A ferramenta ajuda. O critério continua sendo seu: se a frase não toca a dor de um público específico, não é semântica. É enfeite.",
      },
      { type: "tool", id: "semantic" },
    ],
  },
  {
    slug: "organico",
    title: "O orgânico voltou a valer",
    kicker: "Anúncio e mapa",
    minutes: 5,
    lead: "Pelo mesmo motivo que o Instagram nunca esteve tão propício para negócios, ele nunca esteve tão desafiador. Ele quer voltar à essência. Nasceu rede social.",
    blocks: [
      {
        type: "p",
        text: "Existem funções novas em que a pessoa escolhe o que vai ver. No ano passado, a cada poucos posts apareciam anúncios até ficar insuportável. Agora, quando o anúncio aparece, tende a fazer mais sentido — e ainda não está cirúrgico, porque isso acabou de ser implantado.",
      },
      {
        type: "p",
        text: "De um lado, quem paga para aparecer encontra um usuário que também pode filtrar o que vê. Lembra do cachorro: o algoritmo já entendeu o porquê. Mas se agora a pessoa está procurando apartamento, ela não quer mais cachorro. Ela escolhe. Anúncio de cachorro perde força. Entra o que ela decidiu ver.",
      },
      {
        type: "p",
        text: "É por isso que eu posso afirmar, mesmo com tantos desafios, que a plataforma está propícia. Do outro lado da moeda está o óbvio que o mercado esqueceu: negócio é feito de gente. Não existe CNPJ sem CPF. Parar de empurrar produto a qualquer custo e entender o que importa para a pessoa — isso é o que mudou. O poder é da intencionalidade.",
      },
      { type: "h", text: "Negócio local e o mapa" },
      {
        type: "p",
        text: "A atualização do Instagram Maps favorece pequeno negócio e, melhor, negócio local. As pessoas gostam de mostrar onde estão. Quando um lugar é registrado no mapa, e os amigos frequentam e marcam, o próprio Instagram passa a indicar aquele local para a rede deles. Se você está posicionado, você aparece. Não precisa de um filme de produção para isso.",
      },
      {
        type: "quote",
        text: "Não importa mais o vídeo extremamente perfeito. O Instagram está favorecendo conteúdo amador. Quanto mais humanizado, melhor. Quanto mais imperfeito, mais perfeito para ser entregue.",
      },
      {
        type: "p",
        text: "Estamos cercados de conteúdo plastificado, sem vida, mais do mesmo. É daí que vem o algoritmo da humanização radical. Enquanto a gente quer automatizar tudo, a plataforma penaliza conta de forma silenciosa — o que se chama de shadowban. Você não recebe um aviso. A entrega simplesmente esfria.",
      },
      {
        type: "p",
        text: "Interação que não dá para falsificar em escala pesa mais. Uma mensagem no direct vale mais do que mil seguidores. Um conteúdo salvo pesa mais do que dez curtidas. Volume sem estratégia só aumenta o tamanho da sua irrelevância.",
      },
    ],
  },
  {
    slug: "inteligencia",
    title: "Inteligência artificial, sem máscara",
    kicker: "Ferramenta",
    minutes: 4,
    lead: "Pode usar inteligência artificial? Pode. E deve. Ela está aí para te servir. O que não pode é depender dela, nem aceitar tudo o que ela entrega.",
    blocks: [
      {
        type: "p",
        text: "Inteligência artificial é ferramenta. No Instagram, use com ética e transparência — para o algoritmo e para o público. Se o perfil marca criador de conteúdo e o post tem o aviso de conteúdo criado por IA, não há problema. O problema é mascarar. Usar a ferramenta como engano.",
      },
      {
        type: "p",
        text: "Eu crio fluxo de automação. Tenho uma orquestra de mais de duzentos robôs ativos, trabalhando o dia inteiro. Eu poderia encher o Instagram de post infinito. Escolho o contrário: humanização radical. Tem post feito por IA em que a própria legenda assume — o carrossel que o robô fez, treinado a ponto de, se eu não dissesse, ninguém perceber. O objetivo não é esconder a ferramenta. O objetivo é conexão genuína pela confiança.",
      },
      { type: "h", text: "Onde ela ajuda de verdade" },
      {
        type: "list",
        items: [
          "Diagnóstico da sua imagem, para te direcionar.",
          "Design editorial, para sustentar o posicionamento.",
          "Legendas com a técnica da semântica.",
          "Pesquisa de público e de comportamento.",
        ],
      },
      {
        type: "p",
        text: "Ela não substitui o seu olhar. Se a frase não parece coisa que você diria para aquele público, não publica. Ferramenta que te serve aumenta o seu critério. Ferramenta que você serve diminui a sua conta.",
      },
    ],
  },
  {
    slug: "editorial",
    title: "A embalagem também fala",
    kicker: "Design editorial",
    minutes: 5,
    lead: "Bonito não resolve. Página bonitinha não vende. Mas faz parte, e ignorar isso é chegar no lugar errado com a roupa errada.",
    blocks: [
      {
        type: "p",
        text: "Design editorial é a rotina visual do seu posicionamento. Abrir um perfil padronizado, minimalista, alinhado com quem você é, com o que você faz e — principalmente — para quem você faz, é agradável aos olhos. É a primeira impressão. E a primeira impressão fica, porque as pessoas ainda não te conhecem.",
      },
      {
        type: "p",
        text: "A gente julga pela aparência. Você também julga. Não se chega de bermuda num casamento. Não se chega de terno numa praia. Não se chega hiperproduzido numa resenha na laje. O seu Instagram escolhe a ocasião: ele comunica o posicionamento e conecta com quem você atende. Desalinhado, o perfil mais potente do mundo parece embalado em papel de mortadela de padaria.",
      },
      {
        type: "quote",
        text: "A embalagem já filtra. Você bate o olho e sabe se entra na loja. O design editorial precisa estar alinhado com o propósito. A vitrine fala antes de você.",
      },
      { type: "h", text: "Destaques são a vitrine" },
      {
        type: "p",
        text: "Os destaques devem estar limpos, atualizados, com giro. Tirar a poeira do perfil é intencional. Destaque de anos atrás, que obriga a pessoa a rolar para sempre até chegar no novo, atrapalha a investigação. E quem está ali já está prestes a te chamar no direct.",
      },
      {
        type: "p",
        text: "O caminho de quem entra costuma ser este: uma olhada na bio, uma descida no feed, uma volta para os destaques. É nessa volta que o jogo acontece. O que colocar: quem você é, resultados, bastidores. Destaque dá permanência ao que o story deixaria sumir em vinte e quatro horas. Isso se faz com estratégia, não com arquivo morto.",
      },
      { type: "tool", id: "check" },
    ],
  },
  {
    slug: "invisivel",
    title: "Marketing invisível",
    kicker: "A cereja",
    minutes: 4,
    lead: "Se o perfil está alinhado com tudo o que veio até aqui, o que muda o jogo é parar de vender — e, mesmo assim, vender.",
    blocks: [
      {
        type: "p",
        text: "Ninguém gosta de vendedor. O nome já entrega: vender dói. É chato. Marketing invisível é você deixar de empurrar oferta todo dia. Você mostra quem você é. Mostra o que você faz. Mostra o que você resolve. Mostra o que você entrega. Você não está vivendo de convencer. A pessoa compra.",
      },
      {
        type: "quote",
        text: "Não é engano. É deixar de ser chato. Automaticamente as pessoas te chamam no direct. É ali que começam as técnicas de venda de verdade — nos bastidores, não no grito do feed.",
      },
      {
        type: "p",
        text: "O feed tem intencionalidade. O direct tem conversa. Quando alguém chega porque entendeu quem você é, o que você resolve e para quem você resolve, a venda não começa do zero. Ela começa de confiança.",
      },
      {
        type: "p",
        text: "Se você chegou até aqui, já entendeu três coisas. O Instagram esteve — e segue — propício para negócios. Ele mudou e vai continuar mudando. O que muda o seu jogo não é o botão da semana: são pessoas e posicionamento.",
      },
      {
        type: "p",
        text: "Seguindo isso, não tem como não haver negócio. Não tem como você não performar. É matemático.",
      },
      {
        type: "callout",
        kicker: "Se quiser ir além do guia",
        text: "No perfil tem mais ferramentas. Se ainda assim faltar profundidade, o caminho é a mentoria: diagnóstico e condução, caminhando junto — não um mapa jogado de longe.",
      },
      {
        type: "p",
        text: "Obrigada por ler até o fim.",
      },
    ],
  },
];

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function chapterIndex(slug: string) {
  return chapters.findIndex((chapter) => chapter.slug === slug);
}

export const totalMinutes = chapters.reduce((sum, chapter) => sum + chapter.minutes, 0);
