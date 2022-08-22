function accordiontext_pluginAppObj_645_25() {
    
     var accordionContainer = "";
     var singolSlider = "";
     var heightFinal = 0;
     var widthFinal = 0;
     var widthSingolSlide = 0;
     var t_animation = "";
     var containerTitles = [];
     var containerDescriptions = [];
     var totBoxes = 0;
     var numStyle = 1;
     var descStyle = "";
     var svgOpened = "";
     var svgClosed = "";
     var svgArrow = "";
     var fontSizeTitle = 0;
     var boxOpenedOnLoad = "";
    
    x5engine.boot.push(function(){
        
    init();   
});

    function getNumStyle(nstyle){
        return (nstyle.match(/I/g)||[]).length;
    }

    function init(){
        initProperty();
        for(i=0; i < 15; i++){
            if(containerTitles[i] != undefined && containerTitles[i] != "" && containerDescriptions[i] != undefined && containerDescriptions[i] != ""){
                initBox(libBase.br(containerTitles[i]), containerDescriptions[i], totBoxes, i);  
                totBoxes += 1;
            }
        }
        setHeightDesc();
        initStyle();
        initEvent();   
    }

    function initProperty(){
        accordionContainer = $('#pluginAppObj_645_25_accordion_container');
        numStyle = getNumStyle("styleI");
        descStyle = "styleI";
        t_animation = 400;
        fontSizeTitle = 13.3;
        boxOpenedOnLoad = 0;

        svgOpened = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(0, 191, 191, 1)")+'" id="Group" transform="translate(-48.000000, -528.000000)"><path d="M56,544 C51.5817218,544 48,540.418278 48,536 C48,531.581722 51.5817218,528 56,528 C60.4182782,528 64,531.581722 64,536 C64,540.418278 60.4182782,544 56,544 Z M52,535 L52,537 L60,537 L60,535 Z M52,535" id="Oval 210 copy 2"/></g></g></svg>';
        
        svgClosed = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(64, 64, 64, 1)")+'" id="Group" transform="translate(0.000000, -528.000000)"><path d="M4,535 L4,537 L7,537 L7,540 L9,540 L9,537 L12,537 L12,535 L9,535 L9,532 L7,532 L7,535 Z M8,544 C3.58172178,544 0,540.418278 0,536 C0,531.581722 3.58172178,528 8,528 C12.4182782,528 16,531.581722 16,536 C16,540.418278 12.4182782,544 8,544 Z M8,544" id="Oval 210 copy"/></g></g></svg>';
        
        svgArrow = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>';
        
        containerTitles = ["Jogabilidade", "Multijogador", "Sinopse", "Lote", "Produção", "Tecnologia", "Release", "", "", "", "", "", "", "", ""];
        
        containerDescriptions = ["Doom 3 é um jogo de ação baseado em histórias, jogado de uma perspectiva em primeira pessoa . Como nos jogos anteriores de Doom , o objetivo principal é passar com sucesso por seus níveis, derrotando uma variedade de personagens inimigos que pretendem matar o personagem do jogador . A abordagem mais centrada na história de Doom 3 , no entanto, significa que o jogador geralmente encontra personagens não-jogadores amigáveis, que fornecem informações importantes sobre o enredo, objetivos e itens de inventário. O jogo incorpora dez armas para o uso do jogador, incluindo armas de fogo convencionais, como metralhadora, espingarda e granadas, armamento experimental de plasma e as poderosas armas BFG 9000 e motosserra da franquia Doom. Os inimigos vêm de várias formas e com diferentes habilidades e táticas, mas se enquadram em duas grandes categorias de zumbis ou demônios. Zumbis são seres humanos possuídos por forças demoníacas, que atacam o personagem do jogador usando suas mãos e armas brancas ou uma variedade de armas de fogo, enquanto os demônios são criaturas do Inferno, a maioria dos quais atacam usando garras e espinhos, ou convocando bolas de fogo baseadas em plasma. Os cadáveres dos demônios são reduzidos a cinzas após a morte, sem deixar vestígios de seu corpo para trás.&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;O jogador lutando com um Revenant em Doom 3 . A maior parte do jogo ocorre dentro da base futurista&lt;br /&gt;Os níveis do jogo são de natureza semi-linear e incorporam vários elementos de horror, o mais proeminente dos quais é a escuridão.  Essa opção de design não se destina apenas a promover sentimentos de apreensão e medo dentro do jogador, mas também a criar um ambiente de jogo mais ameaçador, no qual o jogador tem menos probabilidade de ver inimigos atacando. Esse aspecto é ainda mais aprimorado pelo fato de que o jogador deve escolher entre segurar uma arma e segurar a lanterna (até as edições da BFG lançadas em 2012 tornarem o &quot;duct tape mod&quot; um recurso padrão), forçando o jogador a escolher entre poder ver e ter uma arma pronta ao entrar em uma sala, o que consequentemente leva a um ritmo mais deliberado para o jogador. Além disso, os níveis são regularmente espalhados por cadáveres, partes do corpo cortadas e sangue, às vezes usados ​​em conjunto com a iluminação do jogo para desorientar o jogador.&lt;br /&gt;&lt;br /&gt;As transmissões de rádio freqüentes através do dispositivo de comunicação do jogador também aumentam a atmosfera, transmitindo certos sons e mensagens de personagens que não são do jogador, destinados a perturbar o jogador. No início do jogo, durante e logo após o evento que mergulha a base no caos, o jogador geralmente ouve sons de brigas, gritos e morte através de seu transmissor de rádio. O som ambiente é estendido para a própria base através de coisas como tubos sibilantes, passos e ocasionais ruídos estrondosos de máquinas ou outras fontes. Frequentemente, podem ser ouvidos sons do ambiente que se assemelham à respiração profunda, vozes inexplicáveis ​​e provocações demoníacas dos antagonistas do jogo.&lt;br /&gt;&lt;br /&gt;No início do jogo, o jogador recebe um assistente de dados pessoais (PDA). Os PDAs contêm níveis de autorização de segurança, permitindo ao jogador acessar determinadas áreas que estão bloqueadas e fora dos limites. Além disso, o PDA pode ser usado para ler e-mails e reproduzir vídeos que o personagem do jogador adquire durante o jogo. Sempre que o jogador pega qualquer um dos outros PDAs encontrados ao longo do jogo, seu conteúdo é baixado automaticamente para o próprio dispositivo do jogador. Outros PDAs geralmente contêm e-mails e registros de áudio para outros caracteres, que podem fornecer informações úteis, como códigos de armazenamento ou de chave de porta, além de detalhes significativos da plotagem.", "Doom 3 foi lançado com um elemento multiplayer para quatro jogadores, apresentando quatro modos de jogo. No entanto, a comunidade do jogo criou uma modificação para aumentar isso para oito ou dezesseis jogadores. A expansão Ressurreição do Mal aumentaria mais tarde oficialmente o limite de jogadores para oito. Os quatro modos de jogo são todos deathmatches . O modo de jogo padrão de deathmatch envolve cada jogador se movendo em um nível, coletando armas e matando os outros jogadores, sendo o jogador com as maiores mortes quando o tempo acabar vencendo. Uma variação da equipe envolve o mesmo princípio. O terceiro modo de jogo é o &quot;último homem em pé&quot;, no qual cada jogador tem uma quantidade limitada de respawns , com os jogadores perdendo uma vida quando são mortos. Eventualmente, todos, exceto um jogador, serão eliminados do jogo, deixando o sobrevivente como vencedor. O modo de jogo final é &quot;torneio&quot;, no qual dois jogadores lutam entre si enquanto os outros assistem como espectadores. O vencedor da batalha permanece na arena, enfrentando um ao outro, um de cada vez, até que o vencedor das rodadas anteriores seja derrotado. O perdedor então se move para os espectadores e o novo vencedor permanece para lutar contra o próximo jogador. A versão Xbox do Doom 3 também incorpora um modo cooperativo adicional para dois jogadores para o jogo principal para um jogador.&lt;br /&gt;&lt;br /&gt;Em 15 de abril de 2010, o serviço Xbox Live foi desativado, portanto, o multiplayer online do jogo original do Xbox não está mais disponível.", "Doom 3 se passa no planeta Marte no ano de 2145. De acordo com a história do jogo, a Union Aerospace Corporation (UAC) cresceu e se tornou a maior entidade corporativa existente com fundos quase ilimitados, e criou um centro de pesquisa em Marte. Nesta base, o UAC é capaz de conduzir pesquisas em diversas áreas científicas, incluindo desenvolvimento avançado de armas, pesquisa biológica, exploração espacial e teletransporte, fora dos limites legais e morais. À medida que o jogador avança no jogo, eles aprendem que os funcionários da base ficam inquietos devido a um grande número de incidentes envolvendo vozes, avistamentos inexplicáveis ​​e casos crescentes de paranóia e insanidade, muitas vezes levando a acidentes fatais com a instalação. maquinaria. Os rumores sobre a natureza dos experimentos na divisão Delta Labs da UAC são predominantes entre os funcionários da base.&lt;br /&gt;&lt;br /&gt;Grande parte da história e do diálogo de Doom 3 foi criada pelo autor Matthew J. Costello.&lt;br /&gt;&lt;br /&gt;Personagens&lt;br /&gt;&lt;br /&gt;Existem cinco personagens principais no Doom 3 . O jogador assume o papel de um cabo anônimo da Marinha Espacial que acaba de chegar à base de Marte do UAC. O oficial não comissionado do jogador encarregado é o sargento Thomas Kelly (dublado por Neil Ross ), que dá ao jogador objetivos e conselhos pelo rádio do jogador na primeira metade do jogo. O antagonista da história é o Dr. Malcolm Betruger ( Philip L. Clarke), o cientista chefe da enigmática divisão Delta Labs da UAC, que revelou estar trabalhando em colaboração com as forças do Inferno para causar a subjugação da humanidade. , e sua voz demoníaca freqüentemente provoca o jogador à medida que o jogo avança. Os dois principais personagens finais são Elliott Swann (Charles Dennis ), um representante do conselho de administração da UAC, e Jack Campbell ( Andy Chanley ), um fuzileiro espacial que atua como guarda-costas de Swann e está armado com um BFG. 9000 Swann é enviado a Marte para checar a pesquisa de Betruger e investigar o crescente número de acidentes na base após um pedido de assistência de um denunciante. Swann é quase sempre acompanhado por Campbell, e os dois geralmente são mostrados no jogo como alguns passos à frente do jogador, mas não podem ser alcançados e comunicados diretamente até o final do jogo. O jogo também incorpora uma grande variedade de personagens secundários que adicionam detalhes à história ou ajudam o jogador em certos segmentos. O jogador encontra vários cientistas envolvidos em vários programas de pesquisa e desenvolvimento e escavações arqueológicas através da base do UAC, bem como outros fuzileiros e guardas de segurança. Funcionários civis envolvidos em trabalhos burocráticos e de manutenção também são vistos.", "A história do Doom 3 é transmitida por meio de diálogos e cenas do jogo, além de e-mails, registros de áudio e arquivos de vídeo encontrados ao longo do jogo. Doom 3 é aberto com Elliott Swann, membro do conselho da UAC, e seu guarda-costas Jack Campbell chegando em Mars City, o principal acesso à base de Marte da UAC, desembarcando de um navio de transporte terrestre, com o fuzileiro anônimo do jogador logo atrás deles. Swann e Campbell, aqui para investigar vários incidentes, têm uma reunião acalorada com o homem encarregado dos laboratórios de Marte, Dr. Malcolm Betruger, enquanto o fuzileiro naval dirige-se ao sargento-mestre Thomas Kelly para receber ordens. Kelly dá instruções à marinha para encontrar um cientista do Delta Labs que desapareceu. O fuzileiro naval encontra o cientista em uma instalação de comunicações desativada nas proximidades, onde ele tenta freneticamente enviar um aviso ao UAC na Terra sobre os experimentos de teletransporte de Betruger. [20] No entanto, quando ele tenta explicar a situação para o fuzileiro naval, outro teste de teletransporte ocorre, mas perde a contenção, momento em que toda a base de Marte é varrida por uma onda de choque não natural. As forças do Inferno invadem o portal do teletransportador e transformam a maioria do pessoal da base em zumbis.&lt;br /&gt;&lt;br /&gt;Grande parte do Doom 3 , como esta seção no Delta Labs, foi planejada usando storyboards&lt;br /&gt;Agora forçado a repelir ataques do pessoal da base zumbificado e dos demônios do Inferno, o fuzileiro navega para Mars City, onde Kelly remotamente dá ordens aos fuzileiros navais para se conectarem com outro esquadrão de fuzileiros navais (Bravo Team) e obter uma placa de transmissão que contenha um problema. ligue para o principal centro de comunicações para pedir reforços. À medida que o fuzileiro naval avança pela base, ele descobre que Swann e Campbell sobreviveram e também estão a caminho do centro de comunicações para impedir que qualquer mensagem seja enviada na esperança de conter a situação em Marte. O esquadrão da marinha é emboscado por demônios e abatido na fábrica da EnPro, e embora o fuzileiro recupere a placa de transmissão, ele é tarde demais para impedir que a maior parte dos equipamentos nas instalações de comunicação seja destruída por Campbell. No entanto, Kelly direciona o fuzileiro naval para um sistema de backup, onde o fuzileiro naval tem a opção de obedecer às ordens de Kelly para pedir reforços ou aceitar o argumento de Swann de manter Marte isolado até que a natureza exata da invasão seja entendida, para não pôr em perigo a Terra. O fuzileiro naval é instruído a ir ao Delta Labs por Kelly ou Swann, dependendo se a transmissão é enviada ou não.&lt;br /&gt;&lt;br /&gt;No caminho para o Delta Labs, o fuzileiro naval é contatado por Betruger, que agora mostra claramente estar trabalhando em cooperação com o Inferno para invadir a Terra. Se o fuzileiro naval não enviou o chamado de socorro à Terra, Betruger o faz, esperando usar os navios que trazem reforços para transportar os demônios para a Terra. O Betruger tenta, sem sucesso, matar o meio marinho usando os gases tóxicos nas instalações de reciclagem da base. Ao chegar ao Delta Labs, o fuzileiro naval aprende os detalhes por trás dos experimentos de teletransporte, expedições ao inferno para recuperar espécimes e a crescente obsessão de Betruger pelos testes, bem como de uma escavação xenoarqueológica sob a superfície de Marte. A escavação está escavando as ruínas de uma civilização antiga descoberta em Marte e produziu uma relíquia conhecida como Cubo da Alma. Segundo um cientista que o fuzileiro naval encontra vivo nos laboratórios, o Cubo da Alma é uma arma criada pela civilização antiga para se defender das forças do Inferno. O cientista também revela que a invasão começou quando Betruger levou o Soul Cube para o portal no início do jogo, depositando-o no inferno. O fuzileiro naval persegue Betruger através dos laboratórios, mas é puxado para o portal principal de teletransporte depois de ser atraído para uma armadilha por Betruger.&lt;br /&gt;&lt;br /&gt;O portal leva o fuzileiro naval diretamente para o Inferno, onde ele segue seu caminho através do grande número de demônios até o Soul Cube, derrotando seu guardião demoníaco. O fuzileiro naval é capaz de reinicializar o equipamento de teletransporte deixado pelas expedições de pesquisa no inferno e retornar ao Delta Labs. Betruger, no entanto, diz à marinha que, embora o principal teletransportador do UAC tenha sido destruído, o Inferno está abrindo uma Boca do Inferno em Marte, capaz de trazer milhões de demônios para Marte. O fuzileiro naval encontra os Swann feridos ainda mais no Delta Labs, que informa o fuzileiro naval que Kelly trabalha com o Inferno por possivelmente o tempo todo e foi transformada pelos demônios. Dizendo ao fuzileiro naval que Campbell foi atrás de Kelly, Swann fornece seu PDA ao fuzileiro naval contendo informações sobre a localização na Boca do Inferno sob a superfície de Marte e garante que ele tentará sair da base sozinho.&lt;br /&gt;&lt;br /&gt;No entanto, quando o fuzileiro alcança Campbell no setor de processamento central de computadores da base, Campbell é mortalmente ferido e só tem força suficiente para dizer que Kelly pegou a arma BFG 9000 da Campbell antes de expirar. Kelly então começa a provocar o fuzileiro com uma voz demoníaca. O fuzileiro naval finalmente enfrenta Kelly no núcleo central do computador, revelando Kelly como um humano cibernético enxertado em uma base semelhante a um tanque. O fuzileiro naval é capaz de matar Kelly e leva o BFG 9000 antes de prosseguir mais fundo sob a superfície marciana até o Local 3, o local de escavação arqueológico onde o Soul Cube foi desenterrado. No local principal da escavação, o fuzileiro naval descobre a Boca do Inferno, defendida pelo guerreiro mais poderoso do Inferno, o Cyberdemon . Usando o Soul Cube, o fuzileiro naval derrota o Cyberdemon em combate, e o Soul Cube sela o Hellmouth. A cena final mostra os reforços da Terra chegando à base para descobrir a carnificina. Eles encontram a marinha viva, mas descobrem que Swann morreu. Eles são, no entanto, incapazes de localizar Betruger, que na cena final é mostrado no Inferno, reencarnado como um demônio semelhante a um dragão.", "Em junho de 2000 , o designer de mecanismos de jogos da id Software , John Carmack , publicou um plano interno da empresa anunciando um remake de Doom usando a tecnologia de próxima geração. Este plano revelou controvérsia crescente dentro da id Software sobre o remake de Doom . Kevin Cloud e Adrian Carmack , dois dos proprietários da id Software, sempre se opuseram fortemente a refazer o Doom , acreditando que a id voltaria às mesmas fórmulas e propriedades com muita frequência. No entanto, após a recepção positiva de Return to Castle Wolfenstein e as mais recentes melhorias na tecnologia de renderização, a maioria dos funcionários concordou que um remake era a ideia certa e apresentou aos dois proprietários um ultimato: permita que eles refizessem Doom ou os demitissem. Após o confronto razoavelmente amigável (embora o artista Paul Steed , um dos instigadores, tenha sido demitido em retaliação), o acordo para trabalhar em Doom 3 foi feito. A Id Software iniciou o desenvolvimento no Doom 3 no final de 2000, imediatamente após terminar o Quake III: Team Arena . Em 2001, foi exibido pela primeira vez ao público na Macworld Conference &amp; Expo em Makuhari Messe e mais tarde foi demonstrado na E3 2002 na LACC , onde uma demonstração de jogabilidade de quinze minutos foi exibida. Ganhou cinco prêmios na E3 naquele ano.&lt;br /&gt;&lt;br /&gt;No início do desenvolvimento de Doom 3 , Trent Reznor, da banda Nine Inch Nails , fã dos jogos de Doom , estava preparado para compor a música e os efeitos sonoros de Doom 3 . No entanto, devido ao &quot;tempo, dinheiro e má administração&quot;, nenhum dos efeitos sonoros ou músicas de Trent Reznor fez o produto final. Eventualmente, o ex-baterista do Nine Inch Nails, Chris Vrenna , produziu e o membro da banda Tweaker Clint Walsh compôs a trilha sonora do jogo.&lt;br /&gt;&lt;br /&gt;Nós realmente nunca chegamos a um acordo real com Trent. A idéia original era apenas para ele fazer todo o design de som do jogo. Não acho que Trent tenha antecipado quanto tempo e quão envolvido esse processo estava e o que está envolvido no design de jogos versus o que ele faz no lado da música e da produção. Simplesmente não era uma boa mistura com quanto tempo ele levaria, o valor que isso proporcionaria ao jogo e o que poderíamos pagar. Trent é um cara popular. Ele é uma estrela do rock e seu tempo é avaliado em dólares de estrelas do rock.&lt;br /&gt;&lt;br /&gt;O Doom 3 também teve a intenção de ser mais focado na história do que os títulos anteriores, como foi demonstrado pelo esforço consciente dos desenvolvedores em ter dublagens mais profissionais. No final de 2002, dois funcionários da ATI Technologies vazaram uma versão de desenvolvimento do Doom 3 para a Internet. Um ano depois, um novo trailer foi exibido na E3 2003 e logo depois o site da id Software foi atualizado para mostrar o Doom 3 como um projeto futuro, embora também tenha sido anunciado que o Doom 3 não estaria pronto para a temporada de férias de 2003. Segundo John Carmack, o desenvolvimento levou mais tempo do que o esperado. O desenvolvedor Splash Damage ajudou no design dos elementos multiplayer do jogo. Cerca de 3.000 testadores beta no local forneceram feedback via QuakeCon.", "De acordo com John Carmack, principal desenvolvedor de mecanismo de gráficos da id Software, a tecnologia do Doom 3 era suportada por três recursos principais: iluminação e sombreamento unificados, animações e scripts complexos que eram exibidos em tempo real com iluminação por pixel totalmente dinâmica e sombreamento de estêncil e superfícies da GUI que adicionam interatividade extra ao jogo. O principal avanço do mecanismo gráfico id Tech 4 desenvolvido para Doom 3 é a iluminação e a sombra unificadas. Em vez de computar ou renderizar mapas de luz durante a criação do mapa e salvar essas informações nos dados do mapa, a maioria das fontes de luz é calculada em tempo real. Isso permite que as luzes projetem sombras mesmo em objetos não estáticos, como monstros e máquinas, o que era impossível com mapas de luz não direcionais estáticos. Uma falha dessa abordagem é a incapacidade do mecanismo de renderizar sombras suaves e iluminação global.&lt;br /&gt;&lt;br /&gt;Para aumentar a interatividade com o mundo dos jogos, a id Software projetou centenas de telas animadas de alta resolução para computadores de jogos. Em vez de usar uma simples &quot;chave de uso&quot; para operar esses computadores, a mira atua como um cursor do mouse sobre as telas, permitindo que o jogador use um computador no mundo do jogo. Isso permite que um terminal de computador no jogo execute mais de uma função, desde a operação de códigos de portas de segurança, ativação de máquinas, alternância de luzes ou desbloqueio de armários de armas. De acordo com o manual do Doom 3 , o designer da GUI Patrick Duffy escreveu mais de 500.000 linhas de código de script e gerou mais de 25.000 arquivos de imagem para criar todas as interfaces gráficas, telas de computador e exibições no Doom 3. Outras características importantes do mecanismo de jogo são o mapeamento normal e o destaque especular das texturas, o manuseio realista da física dos objetos, uma trilha sonora dinâmica e ambiental e o som multicanal. Doom 3 no Xbox suporta resolução de vídeo widescreen de 480p e som surround Dolby Digital 5.1.", "Doom 3 alcançou status de ouro em 14 de julho de 2004 e um lançamento do Mac OS X foi confirmado no dia seguinte. Doom 3 foi lançado nos Estados Unidos em 3 de agosto de 2004 e no resto do mundo em 13 de agosto. Devido à alta demanda, o jogo foi disponibilizado em lojas selecionadas à meia-noite na data de lançamento. Além disso, uma versão do Linux foi lançada em 4 de outubro de 2004 por Timothee Besset . A versão do Mac OS X foi lançada em 14 de março de 2005 e em 20 de fevereiro de 2006 o patch 1.3 Rev A incluía um binário universal , adicionando suporte ao Mac OS X na arquitetura x86 . Finalmente, a conversão modificada do Xbox foi lançada em 3 de abril de 2005, apresentando uma edição limitada de livros em aço que incluía Ultimate Doom e Doom 2.&lt;br /&gt;&lt;br /&gt;Uma semana antes do lançamento do jogo, ficou conhecido que um acordo para incluir a tecnologia de áudio EAX no Doom 3, alcançado pela id Software e Creative Labs, foi fortemente influenciado por uma patente de software de propriedade da última empresa. A patente tratava de uma técnica para renderizar sombras chamada Reverse de Carmack , desenvolvida de forma independente por John Carmack e programadores do Creative Labs. A Id Software se colocaria sob responsabilidade legal pelo uso da técnica no jogo finalizado. Para neutralizar o problema, a id Software concordou em licenciar as tecnologias de som da Creative Labs em troca de indenização por ações judiciais. &lt;br /&gt;&lt;br /&gt;Durante o discurso na QuakeCon 2011, John Carmack anunciou que o código-fonte do mecanismo Doom 3 seria lançado. O código fonte foi de código aberto sob a GPL em 22 de novembro de 2011. Ele contém pequenos ajustes no código de renderização de sombra para evitar possíveis violações de patentes com uma patente mantida pela Creative Labs. Os materiais de arte, como modelos 3D, música, efeitos sonoros etc. permanecem sujeitos ao EULA.&lt;br /&gt;&lt;br /&gt;Expansão&lt;br /&gt;&lt;br /&gt;Artigo principal: Doom 3: Ressurreição do Mal&lt;br /&gt;Em 3 de abril de 2005, oito meses após o lançamento do Doom 3 , a id Software lançou um pacote de expansão para o Doom 3 no Windows . A expansão, intitulada Ressurreição do Mal , foi desenvolvida pela Nerve Software , uma empresa que fez parceria com a id Software em vários outros projetos, incluindo Return to Castle Wolfenstein e a conversão para Xbox do Doom . Mais uma vez publicada pela Activision , uma versão Linux foi lançada em 24 de maio de 2005 e uma versão Xbox foi seguida em 5 de outubro de 2005. A expansão apresentou uma nova campanha para um jogador de doze níveis, definida dois anos após a original. história, bem como três novas armas, uma das quais é voltada para a manipulação da física do jogo. Vários novos personagens inimigos também foram introduzidos. A jogabilidade multiplayer foi aprimorada, aumentando oficialmente o limite de jogadores para oito e adicionando novos modos de jogo, como capturar a bandeira . A recepção da Ressurreição do Mal não foi tão positiva quanto havia sido para Doom 3 , mas ainda recebeu críticas geralmente favoráveis ​​dos críticos da indústria. &lt;br /&gt;&lt;br /&gt;Edição BFG&lt;br /&gt;&lt;br /&gt;Artigo principal: Doom 3: Edição BFG&lt;br /&gt;Um relançamento do Doom 3 chamado Doom 3: BFG Edition , publicado pela Bethesda Softworks , foi lançado em 15 de outubro de 2012, na Austrália, 16 de outubro de 2012 na América do Norte e 19 de outubro de 2012 na Europa. A BFG Edition apresenta gráficos aprimorados, melhor som com mais efeitos de terror, um sistema de salvamento de pontos de verificação, suporte para telas 3D e HMDs e a capacidade de usar a lanterna enquanto segura uma arma, na forma das chamadas &quot;armaduras montadas&quot; lanterna&quot;. Também estão incluídos o pacote de expansão anterior Resurrection of Evil , uma nova expansão single-player chamada The Lost Mission , e cópias do Doom original (a edição Ultimate Doom com o quarto episódio adicional, Thy Flesh Consumed ) e Doom II (com a expansão No Rest for the Living , anteriormente disponível para o Xbox 360). As versões de Doom e Doom II lançadas com a BFG Edition sofreram algum grau de censura. As versões para PC do Doom 3: BFG Edition, exceto a versão GOG.com, exigem o cliente Steam e uma conta Steam válida para instalação, reprodução e conquistas.&lt;br /&gt;&lt;br /&gt;Doom 3 recebeu uma recepção favorável dos críticos, com a versão para PC do jogo com 87 por cento e 88 por cento nos sites de compilação de revisão Metacritic e GameRankings, respectivamente. Muitos elogios foram dados à qualidade dos gráficos e da apresentação de Doom 3 ; A GameSpot descreveu os ambientes do jogo como &quot;convincentemente realistas, densamente atmosféricos e surpreendentemente expansivos&quot; ,enquanto a PC Gamer UK descreveu os gráficos e a modelagem e animação de personagens que não são jogadores como simplesmente &quot;impecáveis&quot;, afirmando que Doom 3 sinalizou o retorno de a franquia Doom na vanguarda da indústria de computadores e videogames, onze anos após o lançamento do Doom original. Dan Adams, do IGN , observou que a apresentação do jogo compreendia uma proporção notavelmente alta do jogo, afirmando que &quot;sem a atmosfera, o Doom 3 é um jogo de tiro comum que remete aos dos anos 90&quot;. Além disso, vários revisores elogiaram a id Software por fazer o jogo ainda parecer surpreendentemente bom, mesmo em níveis mais baixos de gráficos.&lt;br /&gt;&lt;br /&gt;Vários revisores também elogiaram a atenção dada à premissa e ao cenário do jogo; Greg Kasavin, da GameSpot, descreveu ter &quot;a impressão de que Doom 3 ocorre em um mundo totalmente realizado&quot;, enquanto a IGN observou que &quot;a base do UAC também tem uma sensação muito desgastada e vivida que aumenta o realismo&quot;. A Eurogamer, em particular, destacou que a sequência de abertura do jogo &quot;parece um tributo adequado às excelentes idéias&quot; do Half-Life, que define o gênero da Valve . &lt;br /&gt;&lt;br /&gt;Muitos revisores notaram que o Doom 3 seguiu um estilo de jogo semelhante ao &quot; correr e disparar &quot; que foi bem-sucedido com seus antecessores, e o jogo foi elogiado e criticado alternadamente por esse elemento. Várias críticas foram críticas a uma repetitividade percebida na jogabilidade depois de um tempo. Além disso, a inteligência artificial do jogo não era considerada particularmente desafiadora, com a GameSpot notando que &quot;os inimigos seguem os mesmos tipos de padrões previsíveis que [os jogadores] podem se lembrar dos jogos anteriores do Doom &quot; enquanto o GameSpy declarou a maneira como os inimigos apareceriam para atacar o jogador era &quot;enigmática&quot;; o revisor observou que os jogadores perceberiam que pegar um colete de armadura solitário faria com que vários zumbis surgissem de compartimentos escondidos no escuro. Além disso, vários revisores notaram que os métodos do jogo de transmitir a história eram &quot;ineficazes&quot;, agravados pela falta de uma identidade para o personagem do jogador . Finalmente, o modo multiplayer do jogo era visto como falta de inovação, com seus baixos limites de jogadores e pequeno número de modos de jogo, particularmente em contraste com a influente Quake III Arena da id Software.&lt;br /&gt;&lt;br /&gt;A versão Xbox do Doom 3 recebeu um nível semelhante de suporte crítico, com 88% no Metacritic e 87,7% no GameRankings. O jogo foi elogiado e criticado por muitos dos mesmos problemas da versão para PC, embora o jogo tenha sido elogiado por manter controles suaves e fáceis de usar em um gamepad, bem como por incluir dois jogadores co-jogadores. modo multijogador operacional, que a IGN descreveu como &quot;vale o preço da entrada sozinho&quot;. No entanto, algumas críticas foram direcionadas a lentidão no jogo devido ao mecanismo do jogo, apesar de ter sido reduzido para o Xbox, ainda exigindo o hardware do Xbox. &lt;br /&gt;&lt;br /&gt;A Computer Games Magazine nomeou Doom 3 por seu prêmio de &quot;Melhor Tecnologia&quot;, que finalmente foi para o Half-Life 2 .", "", "", "", "", "", "", "", ""];
    }

    function initBox(title, description, pos, i){  
        
        $(accordionContainer).addClass(descStyle);
        var clEl = "accordion_el";
        var clDesc = "collapse";
        if(i == boxOpenedOnLoad){
            clEl += " selected";
            clDesc += " in";
        }
        var html = "";
        html += "<div class='"+clEl+"' data-position='"+pos+"'>";    
        
            html += "<div class='accordion_title'>";
         
            if (numStyle == 1){
                html += "<div class='accordion_title_text'>";
                    html += title;
                html += "</div>"; //close accordion_title_text       
            }
            else if (numStyle == 2){
                html += "<div class='accordion_title_text'>";
                    html += title;
                html += "</div>"; //close accordion_title_text
                
                html += "<div class='accordion_title_icon'>";
                    html += "<div class='ic'></div>";   
                html += "</div>"; //close accordion_title_icon             
            }
            else if(numStyle == 5 || numStyle == 6){ //without icon
               html += title;
            }
            else{ //with arrow icon
                html += "<div class='accordion_title_text'>";
                    html += title; 
                html += "</div>"; //close accordion_title_text

                if(pos == boxOpenedOnLoad){
                    html += "<div class='accordion_title_icon' style='visibility:hidden'>"; //I do not show the rotate initially   
                }
                else{
                    html += "<div class='accordion_title_icon'>";
                }
                
                html += svgArrow;
                html += "</div>"; //close accordion_title_icon
            }
        
            html += "</div>"; //close accordion_title
    
            html += "<div class='accordion_desc " +clDesc+ "'>";
                html += libBase.br(description);  
            html += "</div>"; //close accordion_description
        
        html += "</div>"; //close accordion_el
        $(accordionContainer).append(html);   
    }

    function setHeightDesc(){
         
        if(true){
           
            var availableSpace = ($("#pluginAppObj_645_25_accordion_container .accordion_el").outerHeight(true) * totBoxes);
            if(numStyle != 4){
                //remove distance from element
                availableSpace -= 10;
            }
            availableSpace = 600 - availableSpace;
            availableSpace = availableSpace < 40 ? 40 : availableSpace;

            //set height to first description box
            $('#pluginAppObj_645_25_accordion_container .accordion_el .accordion_desc.collapse').css("height", availableSpace);
        }
        //set height to first description box
        $('#pluginAppObj_645_25_accordion_container .accordion_el .accordion_desc.collapse.in').css("display", "block");
    }

    function initStyle(){
        //add class to first box
        $('#pluginAppObj_645_25_accordion_container').find("[data-position='" + boxOpenedOnLoad + "']").addClass("openedchild");
        
        var childAccordionContainer = document.getElementById("pluginAppObj_645_25_accordion_container").querySelectorAll('[data-position]');
        for (var i=0; i < childAccordionContainer.length; i++) {
            if(childAccordionContainer[i].dataset.position == totBoxes-1){
                //add class to last box because i need to set margin-bottom 0
                $(childAccordionContainer[i]).addClass("lastchild");
            }
        }
        
        if(numStyle == 2){
            $('#pluginAppObj_645_25_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').append(svgClosed);   
            $('#pluginAppObj_645_25_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon .ic').empty().append(svgOpened);
        }
        else if(numStyle == 3 || numStyle == 4){
            $('#pluginAppObj_645_25_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').addClass("opened");
            setTimeout(function(){ 
                $('#pluginAppObj_645_25_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').css("visibility", "visible");
            }, 75);   
        }
    }

    function initEvent(){   
        $('#pluginAppObj_645_25_accordion_container .accordion_el').click(function (e) { 
            var desc = $(this).find(".accordion_desc");
            var itemClickedIsClosed = !$(desc).hasClass("in");

            $('#pluginAppObj_645_25_accordion_container .accordion_el .accordion_desc.collapse').slideUp(t_animation);
            $('#pluginAppObj_645_25_accordion_container .accordion_el .accordion_desc.collapse').removeClass("in");

            if(itemClickedIsClosed){
                $(desc).slideDown(t_animation);
                $(desc).addClass("in");
            }

            $('#pluginAppObj_645_25_accordion_container .accordion_el').removeClass("selected");

            if(itemClickedIsClosed){
                $(this).addClass("selected");
            }

            //style with icon
            if(numStyle == 2 || numStyle == 3 || numStyle == 4){
                $('#pluginAppObj_645_25_accordion_container .accordion_el .accordion_title .accordion_title_icon').removeClass("opened"); 

                if(itemClickedIsClosed){
                    $(this).find("div.accordion_title_icon").addClass("opened");
                }

                if(numStyle == 2){    
                    $('#pluginAppObj_645_25_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').empty().append(svgClosed);

                    if(itemClickedIsClosed){
                        $('#pluginAppObj_645_25_accordion_container .accordion_el .accordion_title .accordion_title_icon.opened .ic').empty().append(svgOpened);
                    }
                }
            }
        });
    }
}