function accordiontext_pluginAppObj_642_17() {
    
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
        accordionContainer = $('#pluginAppObj_642_17_accordion_container');
        numStyle = getNumStyle("styleI");
        descStyle = "styleI";
        t_animation = 400;
        fontSizeTitle = 13.3;
        boxOpenedOnLoad = 0;

        svgOpened = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(0, 191, 191, 1)")+'" id="Group" transform="translate(-48.000000, -528.000000)"><path d="M56,544 C51.5817218,544 48,540.418278 48,536 C48,531.581722 51.5817218,528 56,528 C60.4182782,528 64,531.581722 64,536 C64,540.418278 60.4182782,544 56,544 Z M52,535 L52,537 L60,537 L60,535 Z M52,535" id="Oval 210 copy 2"/></g></g></svg>';
        
        svgClosed = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(64, 64, 64, 1)")+'" id="Group" transform="translate(0.000000, -528.000000)"><path d="M4,535 L4,537 L7,537 L7,540 L9,540 L9,537 L12,537 L12,535 L9,535 L9,532 L7,532 L7,535 Z M8,544 C3.58172178,544 0,540.418278 0,536 C0,531.581722 3.58172178,528 8,528 C12.4182782,528 16,531.581722 16,536 C16,540.418278 12.4182782,544 8,544 Z M8,544" id="Oval 210 copy"/></g></g></svg>';
        
        svgArrow = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>';
        
        containerTitles = ["Jogabilidade", "Multijogador", "Lote", "Desenvolvimento", "Release", "Expansões", "Recepção", "Prêmios", "", "", "", "", "", "", ""];
        
        containerDescriptions = ["Doom II não foi dramaticamente diferente de seu antecessor. Não houve grandes desenvolvimentos tecnológicos, melhorias gráficas ou mudanças substanciais na jogabilidade. Em vez disso, a equipe de desenvolvimento aproveitou os avanços no hardware do computador desde o lançamento do jogo original, que lhes permitiu fazer mais com seu mecanismo de jogo, criando níveis muito maiores e mais complexos. O jogo ainda consiste no jogador navegando em grandes níveis não lineares. Cada nível está infestado de demônios que podem ser mortos com uma variedade de armas que podem ser apanhadas durante o jogo. Os níveis são concluídos encontrando uma saída, seja um switch ou um teleporter; o objetivo é simplesmente avançar para a próxima área. Assim como seu antecessor, os níveis de Doom II podem ser concluídos de maneira direta. No entanto, como os níveis são não-lineares, os jogadores podem desviar-se dos caminhos usuais, e os que recebem são frequentemente recompensados ​​com bônus, como recuperadores de saúde e armas mais poderosas. Devido aos mapas maiores e mais complicados com grupos maiores de monstros, o jogo tinha requisitos de sistema um pouco mais altos que o original.&lt;br /&gt;&lt;br /&gt;Em vez de o jogador jogar três episódios relacionados, como no primeiro Doom , a jogabilidade ocorre em um episódio gigante, embora com interlúdios para quando a história se desenvolve. Em vez de assistir ao progresso do jogador em um mapa (como nos episódios originais de Doom ), as telas entre cada nível simplesmente mostram um plano de fundo (um estilo transferido para o quarto episódio bônus de Doom disponível em The Ultimate Doom , o lançamento do Doom original). Isso também significa que o jogador nunca é forçado a perder todo o seu inventário depois de concluir um episódio.&lt;br /&gt;&lt;br /&gt;Doom II dobrou o número de tipos de monstros que não eram chefes e começou a usar chefes do Doom original como inimigos de nível normal, além de adicionar uma nova arma, a espingarda de cano duplo (chamada Super Shotgun no jogo) e uma nova power-up, a megaesfera.", "A funcionalidade multiplayer do Doom foi bastante aprimorada no Doom II , incluindo suporte &quot;pronto para uso&quot; para um número muito maior de modems dial-up. A conexão dial-up para dois jogadores permitia que um jogador discasse no computador do outro jogador para jogar cooperativamente ou em combate no estilo deathmatch . Também foi adicionada a funcionalidade de rede local (LAN), que foi aprimorada com o lançamento de patches e atualizações. Essa funcionalidade foi posteriormente incorporada ao Doom original. Como no Doom original, os jogos multiplayer costumavam ser jogados usando a conexão dial-up ou LAN pelo programa de instalação interno (setup.exe), pelo serviço online DWANGO ou por programas populares como Kali e Kahn (usando SPX) em Windows 95. Atualmente, nos padrões modernos, o Doom II pode ser jogado com praticamente qualquer versão do Windows na Internet usando portas de origem de terceiros, como Odamex , Zandronum , ZDron , ZDron e ZDaemon . popular hoje. A porta do Xbox Live Arcade do Doom II oferece suporte ao multiplayer online via Xbox Live", "Os 30 níveis contínuos são divididos em quatro áreas; Subterrâneo da UAC, Starport da UAC (Posto Avançado Infernal), Cidade e Inferno .&lt;br /&gt;&lt;br /&gt;Imediatamente após os eventos em Doom , o jogador assume novamente o papel de um fuzileiro espacial sem nome . Depois de derrotar o Mastermind Spider, os demônios do inferno abrem um portal para a Marinha para a Marinha, pois ele &quot;provou ser difícil demais para o inferno conter&quot;. Depois de retornar à Terra, a marinha descobre que também foi invadida pelos demônios, que mataram bilhões de pessoas.&lt;br /&gt;&lt;br /&gt;Os humanos que sobreviveram ao ataque desenvolveram um plano para construir naves espaciais maciças que transportarão os sobreviventes restantes para o espaço. Infelizmente, o único espaçoporto terrestre da Terra foi tomado pelos demônios, que colocaram uma barreira de chamas sobre ele, impedindo a saída de qualquer nave. A marinha luta contra hordas de demônios e é capaz de desativar o campo de força, permitindo que os humanos restantes escapem. Uma vez que todos os sobreviventes escaparam da Terra, o fuzileiro naval é o único humano que resta no planeta. &lt;br /&gt;&lt;br /&gt;Assim que ele se senta para esperar a morte, sabendo que salvou a humanidade, o fuzileiro naval recebe uma transmissão fora do planeta dos sobreviventes em órbita , que conseguiram descobrir de onde os exércitos do Inferno estão vindo. A mensagem revela que a base demoníaca está no centro da cidade natal dos marinhos. Ele então luta pela cidade até chegar à base, mas vê que não há como parar a invasão daquele lado. Ele decide entrar no portal para tentar desativá-lo do outro lado, entrando no Inferno.&lt;br /&gt;&lt;br /&gt;Depois de lutar contra as hordas do Inferno, o fuzileiro naval chega ao local do maior demônio que ele já viu, chamado de Ícone do Pecado ( Baphomet ). Ele mata o ícone do pecado disparando foguetes contra o cérebro exposto. Sua morte causa devastação no inferno, e o portal para a Terra é selado. Com o inferno derrotado, o fuzileiro naval se junta aos outros humanos em um esforço para reconstruir a Terra.", "A maioria dos níveis foi projetada por Sandy Petersen, com o americano McGee desempenhando um papel significativo também. O nível final, Icon of Sin , contém um ovo de páscoa, onde dois dos artistas colocam a cabeça desencarnada de John Romero como o sprite escondido atrás do ícone na parede, que deve ser atingido por foguetes três vezes para vencer o jogo. Romero, enquanto tocava o nível para trabalhar em seus efeitos sonoros, acidentalmente tropeçou nessa piada de si mesmo. Depois de perceber o que seus colegas de trabalho haviam feito, o próprio Romero respondeu gravando sua voz dizendo &quot;Para vencer o jogo, você deve me matar, John Romero&quot;, passando por vários filtros para distorcê-lo e depois invertendo a gravação para criar o &quot; canto demoníaco &quot;falado pela cabeça ao avistar o jogador. A foto que foi digitalizada para o &quot;John Romero's head&quot; - foi de uma foto da Businessweek em 1994.", "Uma versão 3DO Interactive Multiplayer foi anunciada para estar em desenvolvimento pela Art Data Interactive, mas nunca se materializou.&lt;br /&gt;&lt;br /&gt;Doom II foi lançado pela primeira vez em 10 de outubro de 1994 (um dos dias da regra do dia do julgamento final e exatamente dez meses após o original), na América do Norte e na Europa.", "Níveis mestres para Doom II&lt;br /&gt;&lt;br /&gt;Master Levels for Doom II é um pacote de expansão oficial para Doom II, lançado em 26 de dezembro de 1995 pela id Software . O CD contém 20 arquivos WAD criados por vários autores sob contrato. Havia também um bônus adicional chamado Maximum Doom, composto por 3.000 níveis de homebrew.&lt;br /&gt;&lt;br /&gt;Sem descanso para os vivos&lt;br /&gt;&lt;br /&gt;No Rest for the Living é o título de um pacote de expansão desenvolvido pela Nerve Software para o lançamento do Doom II no Xbox Live Arcade para o Xbox 360. Consiste em oito níveis regulares e um nível secreto. Ele também está incluído na versão Doom II de Doom 3: BFG Edition 2012 , como parte do Doom Classic Complete para a PlayStation Network , e foi lançado como um complemento gratuito para a porta do mecanismo Unity 2019 de Doom II .", "Vendas&lt;br /&gt;&lt;br /&gt;De acordo com David Kushner no Masters of Doom , a id Software enviou 600.000 unidades do Doom II para lojas em preparação para o seu lançamento. Esse embarque inicial esgotou em um mês nas prateleiras, apesar de se esperar que durasse três meses. [24] As encomendas para o jogo eram tão grandes que era difícil comprar em uma loja. Os produtos do jogo foram exibidos em paletes e não em prateleiras. O jogo foi o título de computador mais vendido nos Estados Unidos em 1994. Ficou em 10º lugar em 1996, com 322.671 unidades vendidas e US $ 12,6 milhões ganhos somente na região naquele ano.&lt;br /&gt;&lt;br /&gt;Nos Estados Unidos, Doom II foi o terceiro jogo de computador mais vendido entre 1993 e 1999, com 1,55 milhão de unidades vendidas durante esse período. [28] Suas receitas naquele país chegaram a US $ 80 milhões, enquanto as da Europa chegaram a US $ 20 milhões. Desse último número, Kushner escreveu que &quot;30% [...] vieram da Alemanha - um país que proibiu o jogo de suas prateleiras&quot;.&lt;br /&gt;&lt;br /&gt;Revisões Críticas&lt;br /&gt;&lt;br /&gt;A recepção do Doom II foi positiva, com os revisores dizendo que refinou tudo o que fez o Doom original ser bom. [39] De acordo com Dragon , &quot;se uma carnificina irracional, mas intensa, é o que você quer, você receberá o seu dinheiro. Não é apenas um jogo obrigatório; é um jogo para manter o disco rígido para sempre.&quot; Se você precisar ter mais Doom , obtenha isso. &quot;&lt;br /&gt;&lt;br /&gt;O escritor / designer de jogos Chris Crawford usou o nível &quot;Barrels O 'Fun&quot; para ilustrar um ponto sobre a morte nos videogames, explicando que ele escolheu o nível como exemplo, porque é &quot;um dos desafios mais complexos e sofisticados de uma das mais melhores jogos dos anos 90 &quot;.&lt;br /&gt;&lt;br /&gt;A Next Generation analisou a versão para PC do jogo, classificando-a em três estrelas em cinco e afirmou que &quot;Agora que a interface de primeira pessoa se tornou o design de escolha para todo o setor, o Id precisará encontrar novas inovações ou encontre rapidamente que está se recuperando em seu próprio nicho de jogo &quot;.", "Doom II ganhou o Prêmio Origins de Melhor Jogo de Computador de Fantasia ou Ficção Científica de 1994. Doom II foi classificado como o 115º melhor jogo de todos os tempos na meta-análise estatística da Video Game Canon de 53 listas de &quot;Melhores videogames de todos os tempos&quot; em 2019.", "", "", "", "", "", "", ""];
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
           
            var availableSpace = ($("#pluginAppObj_642_17_accordion_container .accordion_el").outerHeight(true) * totBoxes);
            if(numStyle != 4){
                //remove distance from element
                availableSpace -= 10;
            }
            availableSpace = 650 - availableSpace;
            availableSpace = availableSpace < 40 ? 40 : availableSpace;

            //set height to first description box
            $('#pluginAppObj_642_17_accordion_container .accordion_el .accordion_desc.collapse').css("height", availableSpace);
        }
        //set height to first description box
        $('#pluginAppObj_642_17_accordion_container .accordion_el .accordion_desc.collapse.in').css("display", "block");
    }

    function initStyle(){
        //add class to first box
        $('#pluginAppObj_642_17_accordion_container').find("[data-position='" + boxOpenedOnLoad + "']").addClass("openedchild");
        
        var childAccordionContainer = document.getElementById("pluginAppObj_642_17_accordion_container").querySelectorAll('[data-position]');
        for (var i=0; i < childAccordionContainer.length; i++) {
            if(childAccordionContainer[i].dataset.position == totBoxes-1){
                //add class to last box because i need to set margin-bottom 0
                $(childAccordionContainer[i]).addClass("lastchild");
            }
        }
        
        if(numStyle == 2){
            $('#pluginAppObj_642_17_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').append(svgClosed);   
            $('#pluginAppObj_642_17_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon .ic').empty().append(svgOpened);
        }
        else if(numStyle == 3 || numStyle == 4){
            $('#pluginAppObj_642_17_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').addClass("opened");
            setTimeout(function(){ 
                $('#pluginAppObj_642_17_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').css("visibility", "visible");
            }, 75);   
        }
    }

    function initEvent(){   
        $('#pluginAppObj_642_17_accordion_container .accordion_el').click(function (e) { 
            var desc = $(this).find(".accordion_desc");
            var itemClickedIsClosed = !$(desc).hasClass("in");

            $('#pluginAppObj_642_17_accordion_container .accordion_el .accordion_desc.collapse').slideUp(t_animation);
            $('#pluginAppObj_642_17_accordion_container .accordion_el .accordion_desc.collapse').removeClass("in");

            if(itemClickedIsClosed){
                $(desc).slideDown(t_animation);
                $(desc).addClass("in");
            }

            $('#pluginAppObj_642_17_accordion_container .accordion_el').removeClass("selected");

            if(itemClickedIsClosed){
                $(this).addClass("selected");
            }

            //style with icon
            if(numStyle == 2 || numStyle == 3 || numStyle == 4){
                $('#pluginAppObj_642_17_accordion_container .accordion_el .accordion_title .accordion_title_icon').removeClass("opened"); 

                if(itemClickedIsClosed){
                    $(this).find("div.accordion_title_icon").addClass("opened");
                }

                if(numStyle == 2){    
                    $('#pluginAppObj_642_17_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').empty().append(svgClosed);

                    if(itemClickedIsClosed){
                        $('#pluginAppObj_642_17_accordion_container .accordion_el .accordion_title .accordion_title_icon.opened .ic').empty().append(svgOpened);
                    }
                }
            }
        });
    }
}