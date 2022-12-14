function accordiontext_pluginAppObj_641_11() {
    
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
        accordionContainer = $('#pluginAppObj_641_11_accordion_container');
        numStyle = getNumStyle("styleII");
        descStyle = "styleII";
        t_animation = 400;
        fontSizeTitle = 13.3;
        boxOpenedOnLoad = 0;

        svgOpened = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(102, 0, 0, 1)")+'" id="Group" transform="translate(-48.000000, -528.000000)"><path d="M56,544 C51.5817218,544 48,540.418278 48,536 C48,531.581722 51.5817218,528 56,528 C60.4182782,528 64,531.581722 64,536 C64,540.418278 60.4182782,544 56,544 Z M52,535 L52,537 L60,537 L60,535 Z M52,535" id="Oval 210 copy 2"/></g></g></svg>';
        
        svgClosed = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(255, 0, 0, 1)")+'" id="Group" transform="translate(0.000000, -528.000000)"><path d="M4,535 L4,537 L7,537 L7,540 L9,540 L9,537 L12,537 L12,535 L9,535 L9,532 L7,532 L7,535 Z M8,544 C3.58172178,544 0,540.418278 0,536 C0,531.581722 3.58172178,528 8,528 C12.4182782,528 16,531.581722 16,536 C16,540.418278 12.4182782,544 8,544 Z M8,544" id="Oval 210 copy"/></g></g></svg>';
        
        svgArrow = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>';
        
        containerTitles = ["Hist??ria", "Jogabilidade", "Produ????o", "Tecnologia", "Recep????o", "", "", "", "", "", "", "", "", "", ""];
        
        containerDescriptions = ["Doom tem um tema de fic????o de horror e um enredo bastante simples, que s?? aparece no manual, e a hist??ria narrada dentro do jogo em si ?? mostrada em mensagens entre os principais epis??dios.&lt;br /&gt;&lt;br /&gt;O jogador recebe o papel de um fuzileiro espacial (o nome do fuzileiro nunca ?? revelado pois ele supostamente representa o pr??prio jogador), &quot;um dos fuzileiros mais dur??es da Terra, endurecido em combate e treinado para a a????o&quot; (one of Earth's toughest, hardened in combat and trained for action), que foi deportado para Marte por atirar num oficial superior quando este ordenou que ele matasse inocentes civis e desarmados. Ele ?? deste modo for??ado a trabalhar para a Union Aerospace Corporation (UAC), um complexo militar industrial que est?? realizando experi??ncias secretas em teletransporta????o entre as luas de Marte conhecidas como Phobos e Deimos. subitamente, algo d?? errado e criaturas aparentemente vindas do inferno come??am a surgir das ??reas de teletransporte. Uma resposta defensiva da seguran??a da base falha em deter a invas??o e ?? rapidamente dominada por dem??nios, com toda a guarni????o morta ou transformada em zumbis ao mesmo tempo, Deimos desaparece inteiramente sem nenhuma explica????o. Um time da UAC em Marte ?? enviado a Phobos para investigar o incidente, mas o contato pelo r??dio cessa e apenas um deles permanece vivo : o jogador, cuja tarefa ?? escapar vivo.&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;Modelo da Spider Mastermind.&lt;br /&gt;Para terminar o jogo, o jogador precisa batalhar em tr??s epis??dios, cada um contendo nove miss??es . Knee-Deep In The Dead, o primeiro epis??dio (e o ??nico na vers??o shareware), se passa numa base militar hightech em Phobos, a primeira das duas luas de Marte. Ele termina com o jogador lutando contra dois Bar??es do Inferno (Barons of Hell), depois ele entra em um teletransportador que o leva a Deimos. No segundo epis??dio, The Shores Of Hell, o jogador faz uma jornada atrav??s das instala????es na segunda lua de Marte, Deimos, cujas ??reas mostram uma arquitetura bestial. Depois de encontrar e vencer o Cyberdemon (um s??tiro demon??aco gigante com uma perna mec??nica e uma bazuca no lugar de um bra??o), a verdade sobre a lua desaparecida ?? descoberta: ela flutua sobre o pr??prio Inferno. O jogador desce at?? a superf??cie e o terceiro final, Inferno, come??a. Depois de destruir o chefe final, Spider Mastermind (uma esp??cie de aranha gigante representada com a apar??ncia de um c??rebro montado sobre um chassis de a??o com quatro pernas mecatr??nicas e armado com uma metralhadora girat??ria em estilo chaingun), uma porta secreta se abre para o her??i, que &quot;provou ser forte demais para o Inferno conter&quot; (proved too tough for Hell to contain), ser levado de volta ?? Terra. O pacote de expans??o Ultimate Doom adiciona um quarto epis??dio chamado Thy Flesh Consumed, contando as aventuras da volta ao lar do fuzileiro.", "Sendo um jogo de tiro em primeira pessoa, Doom ?? jogado atrav??s do ponto de vista do personagem principal. O objetivo de cada fase ?? simplesmente encontrar a sa??da que leva ao pr??ximo n??vel, um bot??o com um sinal &quot;EXIT&quot; em vermelho, enquanto que o objetivo ?? sobreviver a todos os perigos ao longo do caminho. Entre os obst??culos est??o monstros, barris com lixo t??xico, tetos que v??m abaixo e esmagam o jogador e portas trancadas que podem ser abertas quando se tranca um cart??o, chave ou interruptor. Os n??veis s??o em sua maioria compostos por labirintos, e apresentam uma abund??ncia de ??reas secretas com power-ups como recompensa para que o jogador as explore. Para ajudar na navega????o h?? um mapa autom??tico do jogo, que ?? constru??do a medida que o jogador evolui dentro da miss??o.&lt;br /&gt;&lt;br /&gt;Doom ?? not??vel pelo arsenal dispon??vel, que se tornou uma esp??cie de prot??tipo para os jogos de tiro em primeira pessoa. O jogador come??a armado apenas com uma pistola, e punhos para socar o inimigo, mas pode-se, ao longo das fases, apanhar armas melhores: a motoserra, a espingarda, a metralhadora girat??ria, o lan??a foguetes, o rifle de plasma, e a imensamente poderosa BFG 9000 (BFG ?? um acr??nimo de Big Fucking Gun, por??m alguns jogadores brasileiros a chamam de Bola de Fogo Gigante, no filme aparece como Bio Force Gun version 3.14, mas o personagem Sarge a chama pelo nome original, em tom de brincadeira). H?? uma grande variedade de power-ups, como a mochila que aumenta a capacidade de carregar muni????o, armadura, kit de primeiros socorros para restaurar a sa??de, e esferas que podem deixar o jogador mais forte (invulnerability, megasphere, soul sphere e parcial invisibility). H?? tamb??m o &quot;berserker kit&quot;, que permite ao jogador causar grandes danos apenas com o soco.&lt;br /&gt;&lt;br /&gt;Os inimigos em Doom s??o os elementos principais do jogo. O jogador encara v??rios deles em grandes n??meros e no mais dif??cil dos n??veis de dificuldade encontra at?? 12 inimigos numa mesma sala. Existem ao todo 10 tipos de monstros (Doom II dobra essa quantia), incluindo tanto humanos possu??dos quanto dem??nios possuindo cada um, ?? sua maneira, diferentes tipos for??as, indo desde os fracos mas sempre presentes imp (monstros marrons com o corpo coberto de espinhos) e Cacodemon ( esp??cie de monstro observador flutuante que possui um ??nico olho, que cospe bolas de mat??ria incandescente) at?? os chef??es de final de fase, que aguentam m??ltiplos ataques mesmo das armas mais potentes. Os monstros t??m comportamento simples, que consiste entre andar ao redor do jogador ou atacar atirando bolas-de-fogo, mordendo, e rasgando a pele, apesar de eles poderem tamb??m lutar entre si.&lt;br /&gt;&lt;br /&gt;Al??m do modo single-player, Doom apresenta dois modos de jogo multiplayer : cooperative, em que 2 a 4 jogadores lutam contra as legi??es do Inferno ou deathmatch, em que os jogadores lutam entre si.", "A produ????o de Doom come??ou em 1992, com John Carmack construindo o mecanismo gr??fico enquanto a id terminava Spear of Destiny, a continua????o de Wolfenstein 3D. As grandes influ??ncias dos criadores foram os filmes Aliens e Evil Dead II, com os dem??nios tendo sa??do de uma partida de Dungeons &amp; Dragons que terminou com o planeta infestado deles. O t??tulo fora escolhido por Carmack:&lt;br /&gt;&lt;br /&gt;Tom Hall criou um documento chamado &quot;B??blia de Doom&quot;, com uma hist??ria complexa, no qual 5 soldados no planeta fict??cio Tei Tenga enfrentam os dem??nios, e viajariam ao Inferno. Mas Carmack rejeitou, dizendo que &quot;hist??ria num jogo ?? t??o importante quanto ?? hist??ria num filme porn??&quot;. Conflitos com a equipe (Hall queria mais realismo em vez de jogabilidade melhor) levaram Hall a sair em 1993.&lt;br /&gt;&lt;br /&gt;A &quot;B??blia&quot; foi rejeitada, mas diversas ideias ficariam: tamb??m come??a numa base militar, mas nas luas de Marte; as viagens ao inferno; e apenas um protagonista soldado. Muitos levels e criaturas tamb??m ficariam, com altera????es.&lt;br /&gt;&lt;br /&gt;Os levels de Tom Hall, muito realistas e inspirados em Wolfenstein 3D, come??aram a ser feitos, mas adaptados a medida que progredia para serem mais &quot;legais&quot; e mostrarem a capacidade do jogo. Os levels do primeiro epis??dio foram feitos por John Romero, mas como ele n??o podia fazer os outros 2 epis??dios, Sandy Petersen fora contratado 10 semanas antes do lan??amento.&lt;br /&gt;&lt;br /&gt;Gr??ficos&lt;br /&gt;&lt;br /&gt;Adrian Carmack e Kevin Cloud foram os artistas principais do jogo. Don Ivan Punchatz criou o logo e capa, e seu filho Gregor esculpiu alguns monstros. A maioria das imagens s??o feitas ?? m??o, mas alguns foram esculturas digitalizadas, como o personagem jog??vel, o Cyberdemon, os Barons of Hell e o Spider Mastermind. As armas vieram de fotos de armas de brinquedo e a motoserra fora emprestada pela namorada de Tom Hall. As m??os do personagem jog??vel s??o de Kevin Cloud.&lt;br /&gt;&lt;br /&gt;Som&lt;br /&gt;&lt;br /&gt;As m??sicas de fundo foram feitas por Bobby Prince, que j?? fizera Wolfenstein 3D. John Romero emprestara alguns discos de heavy metal, grunge e rock'n roll para servir de influ??ncia ??? assim algumas m??sicas s??o vers??es de can????es de rock. Entre as bandas copiadas est??o Metallica, Judas Priest, Alice in Chains, Pantera, AC/DC, Believer, e Slayer e entre outras refer??ncias a bandas, est?? o logo do industrial Nine Inch Nails escondido no primeiro mapa do quarto epis??dio, cujo mentor Trent Reznor era amigo dos desenvolvedores. Em Doom 2, uma das m??sicas foi batizada como Smells Like Burning Corpse (cheira como corpos queimados), em homenagem a Smells Like Teen Spirit ( cheira como esp??ritos jovens ), famosa can????o do Nirvana.", "A principal caracter??stica que distinguiu Doom, em seu lan??amento, foi a qualidade de seu mecanismo gr??fico, sem nenhum paralelo com outros jogos da ??poca. O avan??o em rela????o ao jogo anterior da id Software, Wolfenstein 3D, foi conseguido gra??as a um novo mecanismo gr??fico criado por John Carmack. Ap??s o sucesso do jogo, a sua tecnologia ainda serviu como &quot;exemplo&quot; para outros jogos do mesmo g??nero como Heretic e HeXen. Suas principais caracter??sticas s??o:&lt;br /&gt;&lt;br /&gt;Diferen??as de altura (todas as salas em Wolfenstein 3D possuem a mesma altura);&lt;br /&gt;Paredes n??o-perpendiculares (todas as paredes em Wolfenstein 3D correm ao longo de um grid quadrangular);&lt;br /&gt;Mapeamento de textura em todas as superf??cies (em Wolfenstein 3D, o teto e o ch??o n??o tinham texturas); e&lt;br /&gt;N??vel variado de luz (todas as ??reas em Wolfenstein 3D s??o completamente iluminadas com o mesmo brilho). Apesar de tamb??m contribuir para a autenticidade visual do jogo, isso provavelmente ?? mais importante e ainda adicionou ?? atmosfera do jogo o uso da escurid??o como meio de amedrontar e confundir o jogador e foi um elemento in??dito nos jogos.&lt;br /&gt;Em contraste com as fases est??ticas do Wolfenstein 3D, as do Doom s??o altamente interativas:&lt;br /&gt;&lt;br /&gt;plataformas podem subir e descer,&lt;br /&gt;o ch??o pode subir em sequ??ncia para formar degraus&lt;br /&gt;pontes podem subir e descer&lt;br /&gt;A sensa????o de realidade do ambiente foi ainda mais aperfei??oada pelo sistema de som est??reo, que tornou poss??vel dizer em que dire????o e a que dist??ncia os sons se originavam. Como o som est??reo n??o proporciona um senso de 360?? Graus perfeito, no desenvolvimento de Doom 3 exigiu-se o uso do som Dolby Surround 5.1 para passar o realismo ao jogador que os produtores desejavam. Com esse sistema de som, o jogador pode sentir todos os efeitos sonoros com fidelidade extrema ao que se v?? na tela, desde que possua esse sistema sonoro em seu local de jogo.", "Controv??rsia&lt;br /&gt;&lt;br /&gt;Doom foi e permanece not??rio por seus n??veis de sangue e imagens sat??nicas, vistas pela primeira vez naquela ??poca, gerando ent??o controv??rsias num amplo n??mero de grupos.&lt;br /&gt;&lt;br /&gt;Ele foi criticado numerosas vezes por organiza????es crist??s por suas tonalidades sat??nicas e chamado de &quot;simulador de assassinato em massa&quot; (&quot;mass murder simulator&quot;) pelo Coronell David Grossman, cr??tico e fundador do Killology Research Group. Doom causou temores quanto ao uso da ent??o emergente tecnologia de realidade virtual para simular matan??as extremamente realistas, e, em 1994 levou a tentativas mal-sucedidas pelo senador estadual de Washington Phil Talmadge de introduzir o cadastramento compuls??rio para uso de RV ( realidade virtual ).&lt;br /&gt;&lt;br /&gt;O jogo tamb??m foi associado ao famoso caso do Massacre de Columbine, onde dois garotos, tidos como exclu??dos onde estudavam, entraram em seu col??gio disparando tiros em diversos colegas e professores. Entre as informa????es sobre os assassinos, que incluem s??mbolos nazistas e discos de rock industrial (controverso na ??poca pela populariza????o de Marilyn Manson), ambos eram tamb??m jogadores ass??duos de Doom ( sendo que um deles criou um mapa amador para o mesmo ). Estes fatores fortaleceram teorias conservadoras afirmando que jogos e m??sicas agressivas induzem a mentalidade violenta em muitos jovens ao redor do mundo.&lt;br /&gt;&lt;br /&gt;Legado&lt;br /&gt;&lt;br /&gt;V??rios jogos foram criados com sua engine, dentre eles podemos citar Heretic ( um FPS que se passa na idade m??dia e conta a hist??ria de um mago que luta contra D'Sparil, um dem??nio do abismo e as hordas do inferno dele), Hexen (sequ??ncia de Heretic) e Strife (mistura de RPG com FPS).&lt;br /&gt;&lt;br /&gt;Ap??s o sucesso destes &quot;clones&quot;, a engine de Doom ainda foi liberada publicamente por seus criadores. Com isso, seu c??digo aberto possibilitou diversas cria????es n??o oficiais que expandiram diversos elementos no jogo, criando inclusive novas vers??es e engines, sendo algumas compat??veis com o Windows XP e seus sucessores, outras ainda com renova????es nos gr??ficos que incluem modelagem em 3D e port para efeitos especiais.&lt;br /&gt;&lt;br /&gt;Al??m disso, usando editores de WAD (arquivo onde se encontra os principais dados do jogo) foi poss??vel a cria????o de Mod's (que s??o modifica????es do jogo original), como por exemplo: CyberCrime, Dbzome_v7, Legacy of Suffering, Epic 01 e 02 entre outros. Estes mapas amadores s??o usados para competi????es online e single player, podendo adicionar diversas modalidades, itens, armas e monstros novos ao jogo, criando assim infinitas vers??es e fases alternativas.&lt;br /&gt;&lt;br /&gt;Fora do universo dos jogos, alguns livros (romances) foram publicados em diversos volumes, contando hist??rias fict??cias sobre o jogo, que foram aprovadas pelos criadores e vendidas oficialmente. Uma curta hist??ria em quadrinhos n??o-oficial tamb??m foi criada, al??m da adapta????o cinematogr??fica em 2005.", "", "", "", "", "", "", "", "", "", ""];
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
           
            var availableSpace = ($("#pluginAppObj_641_11_accordion_container .accordion_el").outerHeight(true) * totBoxes);
            if(numStyle != 4){
                //remove distance from element
                availableSpace -= 10;
            }
            availableSpace = 600 - availableSpace;
            availableSpace = availableSpace < 40 ? 40 : availableSpace;

            //set height to first description box
            $('#pluginAppObj_641_11_accordion_container .accordion_el .accordion_desc.collapse').css("height", availableSpace);
        }
        //set height to first description box
        $('#pluginAppObj_641_11_accordion_container .accordion_el .accordion_desc.collapse.in').css("display", "block");
    }

    function initStyle(){
        //add class to first box
        $('#pluginAppObj_641_11_accordion_container').find("[data-position='" + boxOpenedOnLoad + "']").addClass("openedchild");
        
        var childAccordionContainer = document.getElementById("pluginAppObj_641_11_accordion_container").querySelectorAll('[data-position]');
        for (var i=0; i < childAccordionContainer.length; i++) {
            if(childAccordionContainer[i].dataset.position == totBoxes-1){
                //add class to last box because i need to set margin-bottom 0
                $(childAccordionContainer[i]).addClass("lastchild");
            }
        }
        
        if(numStyle == 2){
            $('#pluginAppObj_641_11_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').append(svgClosed);   
            $('#pluginAppObj_641_11_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon .ic').empty().append(svgOpened);
        }
        else if(numStyle == 3 || numStyle == 4){
            $('#pluginAppObj_641_11_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').addClass("opened");
            setTimeout(function(){ 
                $('#pluginAppObj_641_11_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').css("visibility", "visible");
            }, 75);   
        }
    }

    function initEvent(){   
        $('#pluginAppObj_641_11_accordion_container .accordion_el').click(function (e) { 
            var desc = $(this).find(".accordion_desc");
            var itemClickedIsClosed = !$(desc).hasClass("in");

            $('#pluginAppObj_641_11_accordion_container .accordion_el .accordion_desc.collapse').slideUp(t_animation);
            $('#pluginAppObj_641_11_accordion_container .accordion_el .accordion_desc.collapse').removeClass("in");

            if(itemClickedIsClosed){
                $(desc).slideDown(t_animation);
                $(desc).addClass("in");
            }

            $('#pluginAppObj_641_11_accordion_container .accordion_el').removeClass("selected");

            if(itemClickedIsClosed){
                $(this).addClass("selected");
            }

            //style with icon
            if(numStyle == 2 || numStyle == 3 || numStyle == 4){
                $('#pluginAppObj_641_11_accordion_container .accordion_el .accordion_title .accordion_title_icon').removeClass("opened"); 

                if(itemClickedIsClosed){
                    $(this).find("div.accordion_title_icon").addClass("opened");
                }

                if(numStyle == 2){    
                    $('#pluginAppObj_641_11_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').empty().append(svgClosed);

                    if(itemClickedIsClosed){
                        $('#pluginAppObj_641_11_accordion_container .accordion_el .accordion_title .accordion_title_icon.opened .ic').empty().append(svgOpened);
                    }
                }
            }
        });
    }
}