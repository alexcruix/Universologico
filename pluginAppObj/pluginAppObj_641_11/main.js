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
        
        containerTitles = ["História", "Jogabilidade", "Produção", "Tecnologia", "Recepção", "", "", "", "", "", "", "", "", "", ""];
        
        containerDescriptions = ["Doom tem um tema de ficção de horror e um enredo bastante simples, que só aparece no manual, e a história narrada dentro do jogo em si é mostrada em mensagens entre os principais episódios.&lt;br /&gt;&lt;br /&gt;O jogador recebe o papel de um fuzileiro espacial (o nome do fuzileiro nunca é revelado pois ele supostamente representa o próprio jogador), &quot;um dos fuzileiros mais durões da Terra, endurecido em combate e treinado para a ação&quot; (one of Earth's toughest, hardened in combat and trained for action), que foi deportado para Marte por atirar num oficial superior quando este ordenou que ele matasse inocentes civis e desarmados. Ele é deste modo forçado a trabalhar para a Union Aerospace Corporation (UAC), um complexo militar industrial que está realizando experiências secretas em teletransportação entre as luas de Marte conhecidas como Phobos e Deimos. subitamente, algo dá errado e criaturas aparentemente vindas do inferno começam a surgir das áreas de teletransporte. Uma resposta defensiva da segurança da base falha em deter a invasão e é rapidamente dominada por demônios, com toda a guarnição morta ou transformada em zumbis ao mesmo tempo, Deimos desaparece inteiramente sem nenhuma explicação. Um time da UAC em Marte é enviado a Phobos para investigar o incidente, mas o contato pelo rádio cessa e apenas um deles permanece vivo : o jogador, cuja tarefa é escapar vivo.&lt;br /&gt;&lt;br /&gt;&lt;br /&gt;Modelo da Spider Mastermind.&lt;br /&gt;Para terminar o jogo, o jogador precisa batalhar em três episódios, cada um contendo nove missões . Knee-Deep In The Dead, o primeiro episódio (e o único na versão shareware), se passa numa base militar hightech em Phobos, a primeira das duas luas de Marte. Ele termina com o jogador lutando contra dois Barões do Inferno (Barons of Hell), depois ele entra em um teletransportador que o leva a Deimos. No segundo episódio, The Shores Of Hell, o jogador faz uma jornada através das instalações na segunda lua de Marte, Deimos, cujas áreas mostram uma arquitetura bestial. Depois de encontrar e vencer o Cyberdemon (um sátiro demoníaco gigante com uma perna mecânica e uma bazuca no lugar de um braço), a verdade sobre a lua desaparecida é descoberta: ela flutua sobre o próprio Inferno. O jogador desce até a superfície e o terceiro final, Inferno, começa. Depois de destruir o chefe final, Spider Mastermind (uma espécie de aranha gigante representada com a aparência de um cérebro montado sobre um chassis de aço com quatro pernas mecatrônicas e armado com uma metralhadora giratória em estilo chaingun), uma porta secreta se abre para o herói, que &quot;provou ser forte demais para o Inferno conter&quot; (proved too tough for Hell to contain), ser levado de volta à Terra. O pacote de expansão Ultimate Doom adiciona um quarto episódio chamado Thy Flesh Consumed, contando as aventuras da volta ao lar do fuzileiro.", "Sendo um jogo de tiro em primeira pessoa, Doom é jogado através do ponto de vista do personagem principal. O objetivo de cada fase é simplesmente encontrar a saída que leva ao próximo nível, um botão com um sinal &quot;EXIT&quot; em vermelho, enquanto que o objetivo é sobreviver a todos os perigos ao longo do caminho. Entre os obstáculos estão monstros, barris com lixo tóxico, tetos que vêm abaixo e esmagam o jogador e portas trancadas que podem ser abertas quando se tranca um cartão, chave ou interruptor. Os níveis são em sua maioria compostos por labirintos, e apresentam uma abundância de áreas secretas com power-ups como recompensa para que o jogador as explore. Para ajudar na navegação há um mapa automático do jogo, que é construído a medida que o jogador evolui dentro da missão.&lt;br /&gt;&lt;br /&gt;Doom é notável pelo arsenal disponível, que se tornou uma espécie de protótipo para os jogos de tiro em primeira pessoa. O jogador começa armado apenas com uma pistola, e punhos para socar o inimigo, mas pode-se, ao longo das fases, apanhar armas melhores: a motoserra, a espingarda, a metralhadora giratória, o lança foguetes, o rifle de plasma, e a imensamente poderosa BFG 9000 (BFG é um acrônimo de Big Fucking Gun, porém alguns jogadores brasileiros a chamam de Bola de Fogo Gigante, no filme aparece como Bio Force Gun version 3.14, mas o personagem Sarge a chama pelo nome original, em tom de brincadeira). Há uma grande variedade de power-ups, como a mochila que aumenta a capacidade de carregar munição, armadura, kit de primeiros socorros para restaurar a saúde, e esferas que podem deixar o jogador mais forte (invulnerability, megasphere, soul sphere e parcial invisibility). Há também o &quot;berserker kit&quot;, que permite ao jogador causar grandes danos apenas com o soco.&lt;br /&gt;&lt;br /&gt;Os inimigos em Doom são os elementos principais do jogo. O jogador encara vários deles em grandes números e no mais difícil dos níveis de dificuldade encontra até 12 inimigos numa mesma sala. Existem ao todo 10 tipos de monstros (Doom II dobra essa quantia), incluindo tanto humanos possuídos quanto demônios possuindo cada um, à sua maneira, diferentes tipos forças, indo desde os fracos mas sempre presentes imp (monstros marrons com o corpo coberto de espinhos) e Cacodemon ( espécie de monstro observador flutuante que possui um único olho, que cospe bolas de matéria incandescente) até os chefões de final de fase, que aguentam múltiplos ataques mesmo das armas mais potentes. Os monstros têm comportamento simples, que consiste entre andar ao redor do jogador ou atacar atirando bolas-de-fogo, mordendo, e rasgando a pele, apesar de eles poderem também lutar entre si.&lt;br /&gt;&lt;br /&gt;Além do modo single-player, Doom apresenta dois modos de jogo multiplayer : cooperative, em que 2 a 4 jogadores lutam contra as legiões do Inferno ou deathmatch, em que os jogadores lutam entre si.", "A produção de Doom começou em 1992, com John Carmack construindo o mecanismo gráfico enquanto a id terminava Spear of Destiny, a continuação de Wolfenstein 3D. As grandes influências dos criadores foram os filmes Aliens e Evil Dead II, com os demônios tendo saído de uma partida de Dungeons &amp; Dragons que terminou com o planeta infestado deles. O título fora escolhido por Carmack:&lt;br /&gt;&lt;br /&gt;Tom Hall criou um documento chamado &quot;Bíblia de Doom&quot;, com uma história complexa, no qual 5 soldados no planeta fictício Tei Tenga enfrentam os demônios, e viajariam ao Inferno. Mas Carmack rejeitou, dizendo que &quot;história num jogo é tão importante quanto à história num filme pornô&quot;. Conflitos com a equipe (Hall queria mais realismo em vez de jogabilidade melhor) levaram Hall a sair em 1993.&lt;br /&gt;&lt;br /&gt;A &quot;Bíblia&quot; foi rejeitada, mas diversas ideias ficariam: também começa numa base militar, mas nas luas de Marte; as viagens ao inferno; e apenas um protagonista soldado. Muitos levels e criaturas também ficariam, com alterações.&lt;br /&gt;&lt;br /&gt;Os levels de Tom Hall, muito realistas e inspirados em Wolfenstein 3D, começaram a ser feitos, mas adaptados a medida que progredia para serem mais &quot;legais&quot; e mostrarem a capacidade do jogo. Os levels do primeiro episódio foram feitos por John Romero, mas como ele não podia fazer os outros 2 episódios, Sandy Petersen fora contratado 10 semanas antes do lançamento.&lt;br /&gt;&lt;br /&gt;Gráficos&lt;br /&gt;&lt;br /&gt;Adrian Carmack e Kevin Cloud foram os artistas principais do jogo. Don Ivan Punchatz criou o logo e capa, e seu filho Gregor esculpiu alguns monstros. A maioria das imagens são feitas à mão, mas alguns foram esculturas digitalizadas, como o personagem jogável, o Cyberdemon, os Barons of Hell e o Spider Mastermind. As armas vieram de fotos de armas de brinquedo e a motoserra fora emprestada pela namorada de Tom Hall. As mãos do personagem jogável são de Kevin Cloud.&lt;br /&gt;&lt;br /&gt;Som&lt;br /&gt;&lt;br /&gt;As músicas de fundo foram feitas por Bobby Prince, que já fizera Wolfenstein 3D. John Romero emprestara alguns discos de heavy metal, grunge e rock'n roll para servir de influência — assim algumas músicas são versões de canções de rock. Entre as bandas copiadas estão Metallica, Judas Priest, Alice in Chains, Pantera, AC/DC, Believer, e Slayer e entre outras referências a bandas, está o logo do industrial Nine Inch Nails escondido no primeiro mapa do quarto episódio, cujo mentor Trent Reznor era amigo dos desenvolvedores. Em Doom 2, uma das músicas foi batizada como Smells Like Burning Corpse (cheira como corpos queimados), em homenagem a Smells Like Teen Spirit ( cheira como espíritos jovens ), famosa canção do Nirvana.", "A principal característica que distinguiu Doom, em seu lançamento, foi a qualidade de seu mecanismo gráfico, sem nenhum paralelo com outros jogos da época. O avanço em relação ao jogo anterior da id Software, Wolfenstein 3D, foi conseguido graças a um novo mecanismo gráfico criado por John Carmack. Após o sucesso do jogo, a sua tecnologia ainda serviu como &quot;exemplo&quot; para outros jogos do mesmo gênero como Heretic e HeXen. Suas principais características são:&lt;br /&gt;&lt;br /&gt;Diferenças de altura (todas as salas em Wolfenstein 3D possuem a mesma altura);&lt;br /&gt;Paredes não-perpendiculares (todas as paredes em Wolfenstein 3D correm ao longo de um grid quadrangular);&lt;br /&gt;Mapeamento de textura em todas as superfícies (em Wolfenstein 3D, o teto e o chão não tinham texturas); e&lt;br /&gt;Nível variado de luz (todas as áreas em Wolfenstein 3D são completamente iluminadas com o mesmo brilho). Apesar de também contribuir para a autenticidade visual do jogo, isso provavelmente é mais importante e ainda adicionou à atmosfera do jogo o uso da escuridão como meio de amedrontar e confundir o jogador e foi um elemento inédito nos jogos.&lt;br /&gt;Em contraste com as fases estáticas do Wolfenstein 3D, as do Doom são altamente interativas:&lt;br /&gt;&lt;br /&gt;plataformas podem subir e descer,&lt;br /&gt;o chão pode subir em sequência para formar degraus&lt;br /&gt;pontes podem subir e descer&lt;br /&gt;A sensação de realidade do ambiente foi ainda mais aperfeiçoada pelo sistema de som estéreo, que tornou possível dizer em que direção e a que distância os sons se originavam. Como o som estéreo não proporciona um senso de 360º Graus perfeito, no desenvolvimento de Doom 3 exigiu-se o uso do som Dolby Surround 5.1 para passar o realismo ao jogador que os produtores desejavam. Com esse sistema de som, o jogador pode sentir todos os efeitos sonoros com fidelidade extrema ao que se vê na tela, desde que possua esse sistema sonoro em seu local de jogo.", "Controvérsia&lt;br /&gt;&lt;br /&gt;Doom foi e permanece notório por seus níveis de sangue e imagens satânicas, vistas pela primeira vez naquela época, gerando então controvérsias num amplo número de grupos.&lt;br /&gt;&lt;br /&gt;Ele foi criticado numerosas vezes por organizações cristãs por suas tonalidades satânicas e chamado de &quot;simulador de assassinato em massa&quot; (&quot;mass murder simulator&quot;) pelo Coronell David Grossman, crítico e fundador do Killology Research Group. Doom causou temores quanto ao uso da então emergente tecnologia de realidade virtual para simular matanças extremamente realistas, e, em 1994 levou a tentativas mal-sucedidas pelo senador estadual de Washington Phil Talmadge de introduzir o cadastramento compulsório para uso de RV ( realidade virtual ).&lt;br /&gt;&lt;br /&gt;O jogo também foi associado ao famoso caso do Massacre de Columbine, onde dois garotos, tidos como excluídos onde estudavam, entraram em seu colégio disparando tiros em diversos colegas e professores. Entre as informações sobre os assassinos, que incluem símbolos nazistas e discos de rock industrial (controverso na época pela popularização de Marilyn Manson), ambos eram também jogadores assíduos de Doom ( sendo que um deles criou um mapa amador para o mesmo ). Estes fatores fortaleceram teorias conservadoras afirmando que jogos e músicas agressivas induzem a mentalidade violenta em muitos jovens ao redor do mundo.&lt;br /&gt;&lt;br /&gt;Legado&lt;br /&gt;&lt;br /&gt;Vários jogos foram criados com sua engine, dentre eles podemos citar Heretic ( um FPS que se passa na idade média e conta a história de um mago que luta contra D'Sparil, um demônio do abismo e as hordas do inferno dele), Hexen (sequência de Heretic) e Strife (mistura de RPG com FPS).&lt;br /&gt;&lt;br /&gt;Após o sucesso destes &quot;clones&quot;, a engine de Doom ainda foi liberada publicamente por seus criadores. Com isso, seu código aberto possibilitou diversas criações não oficiais que expandiram diversos elementos no jogo, criando inclusive novas versões e engines, sendo algumas compatíveis com o Windows XP e seus sucessores, outras ainda com renovações nos gráficos que incluem modelagem em 3D e port para efeitos especiais.&lt;br /&gt;&lt;br /&gt;Além disso, usando editores de WAD (arquivo onde se encontra os principais dados do jogo) foi possível a criação de Mod's (que são modificações do jogo original), como por exemplo: CyberCrime, Dbzome_v7, Legacy of Suffering, Epic 01 e 02 entre outros. Estes mapas amadores são usados para competições online e single player, podendo adicionar diversas modalidades, itens, armas e monstros novos ao jogo, criando assim infinitas versões e fases alternativas.&lt;br /&gt;&lt;br /&gt;Fora do universo dos jogos, alguns livros (romances) foram publicados em diversos volumes, contando histórias fictícias sobre o jogo, que foram aprovadas pelos criadores e vendidas oficialmente. Uma curta história em quadrinhos não-oficial também foi criada, além da adaptação cinematográfica em 2005.", "", "", "", "", "", "", "", "", "", ""];
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