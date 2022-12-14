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
        
        containerTitles = ["Jogabilidade", "Multijogador", "Sinopse", "Lote", "Produ????o", "Tecnologia", "Release", "", "", "", "", "", "", "", ""];
        
        containerDescriptions = ["Doom 3 ?? um jogo de a????o baseado em hist??rias, jogado de uma perspectiva em primeira pessoa . Como nos jogos anteriores de Doom , o objetivo principal ?? passar com sucesso por seus n??veis, derrotando uma variedade de personagens inimigos que pretendem matar o personagem do jogador . A abordagem mais centrada na hist??ria de Doom 3 , no entanto, significa que o jogador geralmente encontra personagens n??o-jogadores amig??veis, que fornecem informa????es importantes sobre o enredo, objetivos e itens de invent??rio. O jogo incorpora dez armas para o uso do jogador, incluindo armas de fogo convencionais, como metralhadora, espingarda e granadas, armamento experimental de plasma e as poderosas armas BFG 9000 e motosserra da franquia Doom. Os inimigos v??m de v??rias formas e com diferentes habilidades e t??ticas, mas se enquadram em duas grandes categorias de zumbis ou dem??nios. Zumbis s??o seres humanos possu??dos por for??as demon??acas, que atacam o personagem do jogador usando suas m??os e armas brancas ou uma variedade de armas de fogo, enquanto os dem??nios s??o criaturas do Inferno, a maioria dos quais atacam usando garras e espinhos, ou convocando bolas de fogo baseadas em plasma. Os cad??veres dos dem??nios s??o reduzidos a cinzas ap??s a morte, sem deixar vest??gios de seu corpo para tr??s.&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;O jogador lutando com um Revenant em Doom 3 . A maior parte do jogo ocorre dentro da base futurista&lt;br /&gt;Os n??veis do jogo s??o de natureza semi-linear e incorporam v??rios elementos de horror, o mais proeminente dos quais ?? a escurid??o.  Essa op????o de design n??o se destina apenas a promover sentimentos de apreens??o e medo dentro do jogador, mas tamb??m a criar um ambiente de jogo mais amea??ador, no qual o jogador tem menos probabilidade de ver inimigos atacando. Esse aspecto ?? ainda mais aprimorado pelo fato de que o jogador deve escolher entre segurar uma arma e segurar a lanterna (at?? as edi????es da BFG lan??adas em 2012 tornarem o &quot;duct tape mod&quot; um recurso padr??o), for??ando o jogador a escolher entre poder ver e ter uma arma pronta ao entrar em uma sala, o que consequentemente leva a um ritmo mais deliberado para o jogador. Al??m disso, os n??veis s??o regularmente espalhados por cad??veres, partes do corpo cortadas e sangue, ??s vezes usados ??????em conjunto com a ilumina????o do jogo para desorientar o jogador.&lt;br /&gt;&lt;br /&gt;As transmiss??es de r??dio freq??entes atrav??s do dispositivo de comunica????o do jogador tamb??m aumentam a atmosfera, transmitindo certos sons e mensagens de personagens que n??o s??o do jogador, destinados a perturbar o jogador. No in??cio do jogo, durante e logo ap??s o evento que mergulha a base no caos, o jogador geralmente ouve sons de brigas, gritos e morte atrav??s de seu transmissor de r??dio. O som ambiente ?? estendido para a pr??pria base atrav??s de coisas como tubos sibilantes, passos e ocasionais ru??dos estrondosos de m??quinas ou outras fontes. Frequentemente, podem ser ouvidos sons do ambiente que se assemelham ?? respira????o profunda, vozes inexplic??veis ??????e provoca????es demon??acas dos antagonistas do jogo.&lt;br /&gt;&lt;br /&gt;No in??cio do jogo, o jogador recebe um assistente de dados pessoais (PDA). Os PDAs cont??m n??veis de autoriza????o de seguran??a, permitindo ao jogador acessar determinadas ??reas que est??o bloqueadas e fora dos limites. Al??m disso, o PDA pode ser usado para ler e-mails e reproduzir v??deos que o personagem do jogador adquire durante o jogo. Sempre que o jogador pega qualquer um dos outros PDAs encontrados ao longo do jogo, seu conte??do ?? baixado automaticamente para o pr??prio dispositivo do jogador. Outros PDAs geralmente cont??m e-mails e registros de ??udio para outros caracteres, que podem fornecer informa????es ??teis, como c??digos de armazenamento ou de chave de porta, al??m de detalhes significativos da plotagem.", "Doom 3 foi lan??ado com um elemento multiplayer para quatro jogadores, apresentando quatro modos de jogo. No entanto, a comunidade do jogo criou uma modifica????o para aumentar isso para oito ou dezesseis jogadores. A expans??o Ressurrei????o do Mal aumentaria mais tarde oficialmente o limite de jogadores para oito. Os quatro modos de jogo s??o todos deathmatches . O modo de jogo padr??o de deathmatch envolve cada jogador se movendo em um n??vel, coletando armas e matando os outros jogadores, sendo o jogador com as maiores mortes quando o tempo acabar vencendo. Uma varia????o da equipe envolve o mesmo princ??pio. O terceiro modo de jogo ?? o &quot;??ltimo homem em p??&quot;, no qual cada jogador tem uma quantidade limitada de respawns , com os jogadores perdendo uma vida quando s??o mortos. Eventualmente, todos, exceto um jogador, ser??o eliminados do jogo, deixando o sobrevivente como vencedor. O modo de jogo final ?? &quot;torneio&quot;, no qual dois jogadores lutam entre si enquanto os outros assistem como espectadores. O vencedor da batalha permanece na arena, enfrentando um ao outro, um de cada vez, at?? que o vencedor das rodadas anteriores seja derrotado. O perdedor ent??o se move para os espectadores e o novo vencedor permanece para lutar contra o pr??ximo jogador. A vers??o Xbox do Doom 3 tamb??m incorpora um modo cooperativo adicional para dois jogadores para o jogo principal para um jogador.&lt;br /&gt;&lt;br /&gt;Em 15 de abril de 2010, o servi??o Xbox Live foi desativado, portanto, o multiplayer online do jogo original do Xbox n??o est?? mais dispon??vel.", "Doom 3 se passa no planeta Marte no ano de 2145. De acordo com a hist??ria do jogo, a Union Aerospace Corporation (UAC) cresceu e se tornou a maior entidade corporativa existente com fundos quase ilimitados, e criou um centro de pesquisa em Marte. Nesta base, o UAC ?? capaz de conduzir pesquisas em diversas ??reas cient??ficas, incluindo desenvolvimento avan??ado de armas, pesquisa biol??gica, explora????o espacial e teletransporte, fora dos limites legais e morais. ?? medida que o jogador avan??a no jogo, eles aprendem que os funcion??rios da base ficam inquietos devido a um grande n??mero de incidentes envolvendo vozes, avistamentos inexplic??veis ??????e casos crescentes de paran??ia e insanidade, muitas vezes levando a acidentes fatais com a instala????o. maquinaria. Os rumores sobre a natureza dos experimentos na divis??o Delta Labs da UAC s??o predominantes entre os funcion??rios da base.&lt;br /&gt;&lt;br /&gt;Grande parte da hist??ria e do di??logo de Doom 3 foi criada pelo autor Matthew J. Costello.&lt;br /&gt;&lt;br /&gt;Personagens&lt;br /&gt;&lt;br /&gt;Existem cinco personagens principais no Doom 3 . O jogador assume o papel de um cabo an??nimo da Marinha Espacial que acaba de chegar ?? base de Marte do UAC. O oficial n??o comissionado do jogador encarregado ?? o sargento Thomas Kelly (dublado por Neil Ross ), que d?? ao jogador objetivos e conselhos pelo r??dio do jogador na primeira metade do jogo. O antagonista da hist??ria ?? o Dr. Malcolm Betruger ( Philip L. Clarke), o cientista chefe da enigm??tica divis??o Delta Labs da UAC, que revelou estar trabalhando em colabora????o com as for??as do Inferno para causar a subjuga????o da humanidade. , e sua voz demon??aca freq??entemente provoca o jogador ?? medida que o jogo avan??a. Os dois principais personagens finais s??o Elliott Swann (Charles Dennis ), um representante do conselho de administra????o da UAC, e Jack Campbell ( Andy Chanley ), um fuzileiro espacial que atua como guarda-costas de Swann e est?? armado com um BFG. 9000 Swann ?? enviado a Marte para checar a pesquisa de Betruger e investigar o crescente n??mero de acidentes na base ap??s um pedido de assist??ncia de um denunciante. Swann ?? quase sempre acompanhado por Campbell, e os dois geralmente s??o mostrados no jogo como alguns passos ?? frente do jogador, mas n??o podem ser alcan??ados e comunicados diretamente at?? o final do jogo. O jogo tamb??m incorpora uma grande variedade de personagens secund??rios que adicionam detalhes ?? hist??ria ou ajudam o jogador em certos segmentos. O jogador encontra v??rios cientistas envolvidos em v??rios programas de pesquisa e desenvolvimento e escava????es arqueol??gicas atrav??s da base do UAC, bem como outros fuzileiros e guardas de seguran??a. Funcion??rios civis envolvidos em trabalhos burocr??ticos e de manuten????o tamb??m s??o vistos.", "A hist??ria do Doom 3 ?? transmitida por meio de di??logos e cenas do jogo, al??m de e-mails, registros de ??udio e arquivos de v??deo encontrados ao longo do jogo. Doom 3 ?? aberto com Elliott Swann, membro do conselho da UAC, e seu guarda-costas Jack Campbell chegando em Mars City, o principal acesso ?? base de Marte da UAC, desembarcando de um navio de transporte terrestre, com o fuzileiro an??nimo do jogador logo atr??s deles. Swann e Campbell, aqui para investigar v??rios incidentes, t??m uma reuni??o acalorada com o homem encarregado dos laborat??rios de Marte, Dr. Malcolm Betruger, enquanto o fuzileiro naval dirige-se ao sargento-mestre Thomas Kelly para receber ordens. Kelly d?? instru????es ?? marinha para encontrar um cientista do Delta Labs que desapareceu. O fuzileiro naval encontra o cientista em uma instala????o de comunica????es desativada nas proximidades, onde ele tenta freneticamente enviar um aviso ao UAC na Terra sobre os experimentos de teletransporte de Betruger. [20] No entanto, quando ele tenta explicar a situa????o para o fuzileiro naval, outro teste de teletransporte ocorre, mas perde a conten????o, momento em que toda a base de Marte ?? varrida por uma onda de choque n??o natural. As for??as do Inferno invadem o portal do teletransportador e transformam a maioria do pessoal da base em zumbis.&lt;br /&gt;&lt;br /&gt;Grande parte do Doom 3 , como esta se????o no Delta Labs, foi planejada usando storyboards&lt;br /&gt;Agora for??ado a repelir ataques do pessoal da base zumbificado e dos dem??nios do Inferno, o fuzileiro navega para Mars City, onde Kelly remotamente d?? ordens aos fuzileiros navais para se conectarem com outro esquadr??o de fuzileiros navais (Bravo Team) e obter uma placa de transmiss??o que contenha um problema. ligue para o principal centro de comunica????es para pedir refor??os. ?? medida que o fuzileiro naval avan??a pela base, ele descobre que Swann e Campbell sobreviveram e tamb??m est??o a caminho do centro de comunica????es para impedir que qualquer mensagem seja enviada na esperan??a de conter a situa????o em Marte. O esquadr??o da marinha ?? emboscado por dem??nios e abatido na f??brica da EnPro, e embora o fuzileiro recupere a placa de transmiss??o, ele ?? tarde demais para impedir que a maior parte dos equipamentos nas instala????es de comunica????o seja destru??da por Campbell. No entanto, Kelly direciona o fuzileiro naval para um sistema de backup, onde o fuzileiro naval tem a op????o de obedecer ??s ordens de Kelly para pedir refor??os ou aceitar o argumento de Swann de manter Marte isolado at?? que a natureza exata da invas??o seja entendida, para n??o p??r em perigo a Terra. O fuzileiro naval ?? instru??do a ir ao Delta Labs por Kelly ou Swann, dependendo se a transmiss??o ?? enviada ou n??o.&lt;br /&gt;&lt;br /&gt;No caminho para o Delta Labs, o fuzileiro naval ?? contatado por Betruger, que agora mostra claramente estar trabalhando em coopera????o com o Inferno para invadir a Terra. Se o fuzileiro naval n??o enviou o chamado de socorro ?? Terra, Betruger o faz, esperando usar os navios que trazem refor??os para transportar os dem??nios para a Terra. O Betruger tenta, sem sucesso, matar o meio marinho usando os gases t??xicos nas instala????es de reciclagem da base. Ao chegar ao Delta Labs, o fuzileiro naval aprende os detalhes por tr??s dos experimentos de teletransporte, expedi????es ao inferno para recuperar esp??cimes e a crescente obsess??o de Betruger pelos testes, bem como de uma escava????o xenoarqueol??gica sob a superf??cie de Marte. A escava????o est?? escavando as ru??nas de uma civiliza????o antiga descoberta em Marte e produziu uma rel??quia conhecida como Cubo da Alma. Segundo um cientista que o fuzileiro naval encontra vivo nos laborat??rios, o Cubo da Alma ?? uma arma criada pela civiliza????o antiga para se defender das for??as do Inferno. O cientista tamb??m revela que a invas??o come??ou quando Betruger levou o Soul Cube para o portal no in??cio do jogo, depositando-o no inferno. O fuzileiro naval persegue Betruger atrav??s dos laborat??rios, mas ?? puxado para o portal principal de teletransporte depois de ser atra??do para uma armadilha por Betruger.&lt;br /&gt;&lt;br /&gt;O portal leva o fuzileiro naval diretamente para o Inferno, onde ele segue seu caminho atrav??s do grande n??mero de dem??nios at?? o Soul Cube, derrotando seu guardi??o demon??aco. O fuzileiro naval ?? capaz de reinicializar o equipamento de teletransporte deixado pelas expedi????es de pesquisa no inferno e retornar ao Delta Labs. Betruger, no entanto, diz ?? marinha que, embora o principal teletransportador do UAC tenha sido destru??do, o Inferno est?? abrindo uma Boca do Inferno em Marte, capaz de trazer milh??es de dem??nios para Marte. O fuzileiro naval encontra os Swann feridos ainda mais no Delta Labs, que informa o fuzileiro naval que Kelly trabalha com o Inferno por possivelmente o tempo todo e foi transformada pelos dem??nios. Dizendo ao fuzileiro naval que Campbell foi atr??s de Kelly, Swann fornece seu PDA ao fuzileiro naval contendo informa????es sobre a localiza????o na Boca do Inferno sob a superf??cie de Marte e garante que ele tentar?? sair da base sozinho.&lt;br /&gt;&lt;br /&gt;No entanto, quando o fuzileiro alcan??a Campbell no setor de processamento central de computadores da base, Campbell ?? mortalmente ferido e s?? tem for??a suficiente para dizer que Kelly pegou a arma BFG 9000 da Campbell antes de expirar. Kelly ent??o come??a a provocar o fuzileiro com uma voz demon??aca. O fuzileiro naval finalmente enfrenta Kelly no n??cleo central do computador, revelando Kelly como um humano cibern??tico enxertado em uma base semelhante a um tanque. O fuzileiro naval ?? capaz de matar Kelly e leva o BFG 9000 antes de prosseguir mais fundo sob a superf??cie marciana at?? o Local 3, o local de escava????o arqueol??gico onde o Soul Cube foi desenterrado. No local principal da escava????o, o fuzileiro naval descobre a Boca do Inferno, defendida pelo guerreiro mais poderoso do Inferno, o Cyberdemon . Usando o Soul Cube, o fuzileiro naval derrota o Cyberdemon em combate, e o Soul Cube sela o Hellmouth. A cena final mostra os refor??os da Terra chegando ?? base para descobrir a carnificina. Eles encontram a marinha viva, mas descobrem que Swann morreu. Eles s??o, no entanto, incapazes de localizar Betruger, que na cena final ?? mostrado no Inferno, reencarnado como um dem??nio semelhante a um drag??o.", "Em junho de 2000 , o designer de mecanismos de jogos da id Software , John Carmack , publicou um plano interno da empresa anunciando um remake de Doom usando a tecnologia de pr??xima gera????o. Este plano revelou controv??rsia crescente dentro da id Software sobre o remake de Doom . Kevin Cloud e Adrian Carmack , dois dos propriet??rios da id Software, sempre se opuseram fortemente a refazer o Doom , acreditando que a id voltaria ??s mesmas f??rmulas e propriedades com muita frequ??ncia. No entanto, ap??s a recep????o positiva de Return to Castle Wolfenstein e as mais recentes melhorias na tecnologia de renderiza????o, a maioria dos funcion??rios concordou que um remake era a ideia certa e apresentou aos dois propriet??rios um ultimato: permita que eles refizessem Doom ou os demitissem. Ap??s o confronto razoavelmente amig??vel (embora o artista Paul Steed , um dos instigadores, tenha sido demitido em retalia????o), o acordo para trabalhar em Doom 3 foi feito. A Id Software iniciou o desenvolvimento no Doom 3 no final de 2000, imediatamente ap??s terminar o Quake III: Team Arena . Em 2001, foi exibido pela primeira vez ao p??blico na Macworld Conference &amp; Expo em Makuhari Messe e mais tarde foi demonstrado na E3 2002 na LACC , onde uma demonstra????o de jogabilidade de quinze minutos foi exibida. Ganhou cinco pr??mios na E3 naquele ano.&lt;br /&gt;&lt;br /&gt;No in??cio do desenvolvimento de Doom 3 , Trent Reznor, da banda Nine Inch Nails , f?? dos jogos de Doom , estava preparado para compor a m??sica e os efeitos sonoros de Doom 3 . No entanto, devido ao &quot;tempo, dinheiro e m?? administra????o&quot;, nenhum dos efeitos sonoros ou m??sicas de Trent Reznor fez o produto final. Eventualmente, o ex-baterista do Nine Inch Nails, Chris Vrenna , produziu e o membro da banda Tweaker Clint Walsh comp??s a trilha sonora do jogo.&lt;br /&gt;&lt;br /&gt;N??s realmente nunca chegamos a um acordo real com Trent. A id??ia original era apenas para ele fazer todo o design de som do jogo. N??o acho que Trent tenha antecipado quanto tempo e qu??o envolvido esse processo estava e o que est?? envolvido no design de jogos versus o que ele faz no lado da m??sica e da produ????o. Simplesmente n??o era uma boa mistura com quanto tempo ele levaria, o valor que isso proporcionaria ao jogo e o que poder??amos pagar. Trent ?? um cara popular. Ele ?? uma estrela do rock e seu tempo ?? avaliado em d??lares de estrelas do rock.&lt;br /&gt;&lt;br /&gt;O Doom 3 tamb??m teve a inten????o de ser mais focado na hist??ria do que os t??tulos anteriores, como foi demonstrado pelo esfor??o consciente dos desenvolvedores em ter dublagens mais profissionais. No final de 2002, dois funcion??rios da ATI Technologies vazaram uma vers??o de desenvolvimento do Doom 3 para a Internet. Um ano depois, um novo trailer foi exibido na E3 2003 e logo depois o site da id Software foi atualizado para mostrar o Doom 3 como um projeto futuro, embora tamb??m tenha sido anunciado que o Doom 3 n??o estaria pronto para a temporada de f??rias de 2003. Segundo John Carmack, o desenvolvimento levou mais tempo do que o esperado. O desenvolvedor Splash Damage ajudou no design dos elementos multiplayer do jogo. Cerca de 3.000 testadores beta no local forneceram feedback via QuakeCon.", "De acordo com John Carmack, principal desenvolvedor de mecanismo de gr??ficos da id Software, a tecnologia do Doom 3 era suportada por tr??s recursos principais: ilumina????o e sombreamento unificados, anima????es e scripts complexos que eram exibidos em tempo real com ilumina????o por pixel totalmente din??mica e sombreamento de est??ncil e superf??cies da GUI que adicionam interatividade extra ao jogo. O principal avan??o do mecanismo gr??fico id Tech 4 desenvolvido para Doom 3 ?? a ilumina????o e a sombra unificadas. Em vez de computar ou renderizar mapas de luz durante a cria????o do mapa e salvar essas informa????es nos dados do mapa, a maioria das fontes de luz ?? calculada em tempo real. Isso permite que as luzes projetem sombras mesmo em objetos n??o est??ticos, como monstros e m??quinas, o que era imposs??vel com mapas de luz n??o direcionais est??ticos. Uma falha dessa abordagem ?? a incapacidade do mecanismo de renderizar sombras suaves e ilumina????o global.&lt;br /&gt;&lt;br /&gt;Para aumentar a interatividade com o mundo dos jogos, a id Software projetou centenas de telas animadas de alta resolu????o para computadores de jogos. Em vez de usar uma simples &quot;chave de uso&quot; para operar esses computadores, a mira atua como um cursor do mouse sobre as telas, permitindo que o jogador use um computador no mundo do jogo. Isso permite que um terminal de computador no jogo execute mais de uma fun????o, desde a opera????o de c??digos de portas de seguran??a, ativa????o de m??quinas, altern??ncia de luzes ou desbloqueio de arm??rios de armas. De acordo com o manual do Doom 3 , o designer da GUI Patrick Duffy escreveu mais de 500.000 linhas de c??digo de script e gerou mais de 25.000 arquivos de imagem para criar todas as interfaces gr??ficas, telas de computador e exibi????es no Doom 3. Outras caracter??sticas importantes do mecanismo de jogo s??o o mapeamento normal e o destaque especular das texturas, o manuseio realista da f??sica dos objetos, uma trilha sonora din??mica e ambiental e o som multicanal. Doom 3 no Xbox suporta resolu????o de v??deo widescreen de 480p e som surround Dolby Digital 5.1.", "Doom 3 alcan??ou status de ouro em 14 de julho de 2004 e um lan??amento do Mac OS X foi confirmado no dia seguinte. Doom 3 foi lan??ado nos Estados Unidos em 3 de agosto de 2004 e no resto do mundo em 13 de agosto. Devido ?? alta demanda, o jogo foi disponibilizado em lojas selecionadas ?? meia-noite na data de lan??amento. Al??m disso, uma vers??o do Linux foi lan??ada em 4 de outubro de 2004 por Timothee Besset . A vers??o do Mac OS X foi lan??ada em 14 de mar??o de 2005 e em 20 de fevereiro de 2006 o patch 1.3 Rev A inclu??a um bin??rio universal , adicionando suporte ao Mac OS X na arquitetura x86 . Finalmente, a convers??o modificada do Xbox foi lan??ada em 3 de abril de 2005, apresentando uma edi????o limitada de livros em a??o que inclu??a Ultimate Doom e Doom 2.&lt;br /&gt;&lt;br /&gt;Uma semana antes do lan??amento do jogo, ficou conhecido que um acordo para incluir a tecnologia de ??udio EAX no Doom 3, alcan??ado pela id Software e Creative Labs, foi fortemente influenciado por uma patente de software de propriedade da ??ltima empresa. A patente tratava de uma t??cnica para renderizar sombras chamada Reverse de Carmack , desenvolvida de forma independente por John Carmack e programadores do Creative Labs. A Id Software se colocaria sob responsabilidade legal pelo uso da t??cnica no jogo finalizado. Para neutralizar o problema, a id Software concordou em licenciar as tecnologias de som da Creative Labs em troca de indeniza????o por a????es judiciais. &lt;br /&gt;&lt;br /&gt;Durante o discurso na QuakeCon 2011, John Carmack anunciou que o c??digo-fonte do mecanismo Doom 3 seria lan??ado. O c??digo fonte foi de c??digo aberto sob a GPL em 22 de novembro de 2011. Ele cont??m pequenos ajustes no c??digo de renderiza????o de sombra para evitar poss??veis viola????es de patentes com uma patente mantida pela Creative Labs. Os materiais de arte, como modelos 3D, m??sica, efeitos sonoros etc. permanecem sujeitos ao EULA.&lt;br /&gt;&lt;br /&gt;Expans??o&lt;br /&gt;&lt;br /&gt;Artigo principal: Doom 3: Ressurrei????o do Mal&lt;br /&gt;Em 3 de abril de 2005, oito meses ap??s o lan??amento do Doom 3 , a id Software lan??ou um pacote de expans??o para o Doom 3 no Windows . A expans??o, intitulada Ressurrei????o do Mal , foi desenvolvida pela Nerve Software , uma empresa que fez parceria com a id Software em v??rios outros projetos, incluindo Return to Castle Wolfenstein e a convers??o para Xbox do Doom . Mais uma vez publicada pela Activision , uma vers??o Linux foi lan??ada em 24 de maio de 2005 e uma vers??o Xbox foi seguida em 5 de outubro de 2005. A expans??o apresentou uma nova campanha para um jogador de doze n??veis, definida dois anos ap??s a original. hist??ria, bem como tr??s novas armas, uma das quais ?? voltada para a manipula????o da f??sica do jogo. V??rios novos personagens inimigos tamb??m foram introduzidos. A jogabilidade multiplayer foi aprimorada, aumentando oficialmente o limite de jogadores para oito e adicionando novos modos de jogo, como capturar a bandeira . A recep????o da Ressurrei????o do Mal n??o foi t??o positiva quanto havia sido para Doom 3 , mas ainda recebeu cr??ticas geralmente favor??veis ??????dos cr??ticos da ind??stria. &lt;br /&gt;&lt;br /&gt;Edi????o BFG&lt;br /&gt;&lt;br /&gt;Artigo principal: Doom 3: Edi????o BFG&lt;br /&gt;Um relan??amento do Doom 3 chamado Doom 3: BFG Edition , publicado pela Bethesda Softworks , foi lan??ado em 15 de outubro de 2012, na Austr??lia, 16 de outubro de 2012 na Am??rica do Norte e 19 de outubro de 2012 na Europa. A BFG Edition apresenta gr??ficos aprimorados, melhor som com mais efeitos de terror, um sistema de salvamento de pontos de verifica????o, suporte para telas 3D e HMDs e a capacidade de usar a lanterna enquanto segura uma arma, na forma das chamadas &quot;armaduras montadas&quot; lanterna&quot;. Tamb??m est??o inclu??dos o pacote de expans??o anterior Resurrection of Evil , uma nova expans??o single-player chamada The Lost Mission , e c??pias do Doom original (a edi????o Ultimate Doom com o quarto epis??dio adicional, Thy Flesh Consumed ) e Doom II (com a expans??o No Rest for the Living , anteriormente dispon??vel para o Xbox 360). As vers??es de Doom e Doom II lan??adas com a BFG Edition sofreram algum grau de censura. As vers??es para PC do Doom 3: BFG Edition, exceto a vers??o GOG.com, exigem o cliente Steam e uma conta Steam v??lida para instala????o, reprodu????o e conquistas.&lt;br /&gt;&lt;br /&gt;Doom 3 recebeu uma recep????o favor??vel dos cr??ticos, com a vers??o para PC do jogo com 87 por cento e 88 por cento nos sites de compila????o de revis??o Metacritic e GameRankings, respectivamente. Muitos elogios foram dados ?? qualidade dos gr??ficos e da apresenta????o de Doom 3 ; A GameSpot descreveu os ambientes do jogo como &quot;convincentemente realistas, densamente atmosf??ricos e surpreendentemente expansivos&quot; ,enquanto a PC Gamer UK descreveu os gr??ficos e a modelagem e anima????o de personagens que n??o s??o jogadores como simplesmente &quot;impec??veis&quot;, afirmando que Doom 3 sinalizou o retorno de a franquia Doom na vanguarda da ind??stria de computadores e videogames, onze anos ap??s o lan??amento do Doom original. Dan Adams, do IGN , observou que a apresenta????o do jogo compreendia uma propor????o notavelmente alta do jogo, afirmando que &quot;sem a atmosfera, o Doom 3 ?? um jogo de tiro comum que remete aos dos anos 90&quot;. Al??m disso, v??rios revisores elogiaram a id Software por fazer o jogo ainda parecer surpreendentemente bom, mesmo em n??veis mais baixos de gr??ficos.&lt;br /&gt;&lt;br /&gt;V??rios revisores tamb??m elogiaram a aten????o dada ?? premissa e ao cen??rio do jogo; Greg Kasavin, da GameSpot, descreveu ter &quot;a impress??o de que Doom 3 ocorre em um mundo totalmente realizado&quot;, enquanto a IGN observou que &quot;a base do UAC tamb??m tem uma sensa????o muito desgastada e vivida que aumenta o realismo&quot;. A Eurogamer, em particular, destacou que a sequ??ncia de abertura do jogo &quot;parece um tributo adequado ??s excelentes id??ias&quot; do Half-Life, que define o g??nero da Valve . &lt;br /&gt;&lt;br /&gt;Muitos revisores notaram que o Doom 3 seguiu um estilo de jogo semelhante ao &quot; correr e disparar &quot; que foi bem-sucedido com seus antecessores, e o jogo foi elogiado e criticado alternadamente por esse elemento. V??rias cr??ticas foram cr??ticas a uma repetitividade percebida na jogabilidade depois de um tempo. Al??m disso, a intelig??ncia artificial do jogo n??o era considerada particularmente desafiadora, com a GameSpot notando que &quot;os inimigos seguem os mesmos tipos de padr??es previs??veis que [os jogadores] podem se lembrar dos jogos anteriores do Doom &quot; enquanto o GameSpy declarou a maneira como os inimigos apareceriam para atacar o jogador era &quot;enigm??tica&quot;; o revisor observou que os jogadores perceberiam que pegar um colete de armadura solit??rio faria com que v??rios zumbis surgissem de compartimentos escondidos no escuro. Al??m disso, v??rios revisores notaram que os m??todos do jogo de transmitir a hist??ria eram &quot;ineficazes&quot;, agravados pela falta de uma identidade para o personagem do jogador . Finalmente, o modo multiplayer do jogo era visto como falta de inova????o, com seus baixos limites de jogadores e pequeno n??mero de modos de jogo, particularmente em contraste com a influente Quake III Arena da id Software.&lt;br /&gt;&lt;br /&gt;A vers??o Xbox do Doom 3 recebeu um n??vel semelhante de suporte cr??tico, com 88% no Metacritic e 87,7% no GameRankings. O jogo foi elogiado e criticado por muitos dos mesmos problemas da vers??o para PC, embora o jogo tenha sido elogiado por manter controles suaves e f??ceis de usar em um gamepad, bem como por incluir dois jogadores co-jogadores. modo multijogador operacional, que a IGN descreveu como &quot;vale o pre??o da entrada sozinho&quot;. No entanto, algumas cr??ticas foram direcionadas a lentid??o no jogo devido ao mecanismo do jogo, apesar de ter sido reduzido para o Xbox, ainda exigindo o hardware do Xbox. &lt;br /&gt;&lt;br /&gt;A Computer Games Magazine nomeou Doom 3 por seu pr??mio de &quot;Melhor Tecnologia&quot;, que finalmente foi para o Half-Life 2 .", "", "", "", "", "", "", "", ""];
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