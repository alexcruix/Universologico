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
        
        containerTitles = ["Jogabilidade", "Multijogador", "Lote", "Desenvolvimento", "Release", "Expans??es", "Recep????o", "Pr??mios", "", "", "", "", "", "", ""];
        
        containerDescriptions = ["Doom II n??o foi dramaticamente diferente de seu antecessor. N??o houve grandes desenvolvimentos tecnol??gicos, melhorias gr??ficas ou mudan??as substanciais na jogabilidade. Em vez disso, a equipe de desenvolvimento aproveitou os avan??os no hardware do computador desde o lan??amento do jogo original, que lhes permitiu fazer mais com seu mecanismo de jogo, criando n??veis muito maiores e mais complexos. O jogo ainda consiste no jogador navegando em grandes n??veis n??o lineares. Cada n??vel est?? infestado de dem??nios que podem ser mortos com uma variedade de armas que podem ser apanhadas durante o jogo. Os n??veis s??o conclu??dos encontrando uma sa??da, seja um switch ou um teleporter; o objetivo ?? simplesmente avan??ar para a pr??xima ??rea. Assim como seu antecessor, os n??veis de Doom II podem ser conclu??dos de maneira direta. No entanto, como os n??veis s??o n??o-lineares, os jogadores podem desviar-se dos caminhos usuais, e os que recebem s??o frequentemente recompensados ??????com b??nus, como recuperadores de sa??de e armas mais poderosas. Devido aos mapas maiores e mais complicados com grupos maiores de monstros, o jogo tinha requisitos de sistema um pouco mais altos que o original.&lt;br /&gt;&lt;br /&gt;Em vez de o jogador jogar tr??s epis??dios relacionados, como no primeiro Doom , a jogabilidade ocorre em um epis??dio gigante, embora com interl??dios para quando a hist??ria se desenvolve. Em vez de assistir ao progresso do jogador em um mapa (como nos epis??dios originais de Doom ), as telas entre cada n??vel simplesmente mostram um plano de fundo (um estilo transferido para o quarto epis??dio b??nus de Doom dispon??vel em The Ultimate Doom , o lan??amento do Doom original). Isso tamb??m significa que o jogador nunca ?? for??ado a perder todo o seu invent??rio depois de concluir um epis??dio.&lt;br /&gt;&lt;br /&gt;Doom II dobrou o n??mero de tipos de monstros que n??o eram chefes e come??ou a usar chefes do Doom original como inimigos de n??vel normal, al??m de adicionar uma nova arma, a espingarda de cano duplo (chamada Super Shotgun no jogo) e uma nova power-up, a megaesfera.", "A funcionalidade multiplayer do Doom foi bastante aprimorada no Doom II , incluindo suporte &quot;pronto para uso&quot; para um n??mero muito maior de modems dial-up. A conex??o dial-up para dois jogadores permitia que um jogador discasse no computador do outro jogador para jogar cooperativamente ou em combate no estilo deathmatch . Tamb??m foi adicionada a funcionalidade de rede local (LAN), que foi aprimorada com o lan??amento de patches e atualiza????es. Essa funcionalidade foi posteriormente incorporada ao Doom original. Como no Doom original, os jogos multiplayer costumavam ser jogados usando a conex??o dial-up ou LAN pelo programa de instala????o interno (setup.exe), pelo servi??o online DWANGO ou por programas populares como Kali e Kahn (usando SPX) em Windows 95. Atualmente, nos padr??es modernos, o Doom II pode ser jogado com praticamente qualquer vers??o do Windows na Internet usando portas de origem de terceiros, como Odamex , Zandronum , ZDron , ZDron e ZDaemon . popular hoje. A porta do Xbox Live Arcade do Doom II oferece suporte ao multiplayer online via Xbox Live", "Os 30 n??veis cont??nuos s??o divididos em quatro ??reas; Subterr??neo da UAC, Starport da UAC (Posto Avan??ado Infernal), Cidade e Inferno .&lt;br /&gt;&lt;br /&gt;Imediatamente ap??s os eventos em Doom , o jogador assume novamente o papel de um fuzileiro espacial sem nome . Depois de derrotar o Mastermind Spider, os dem??nios do inferno abrem um portal para a Marinha para a Marinha, pois ele &quot;provou ser dif??cil demais para o inferno conter&quot;. Depois de retornar ?? Terra, a marinha descobre que tamb??m foi invadida pelos dem??nios, que mataram bilh??es de pessoas.&lt;br /&gt;&lt;br /&gt;Os humanos que sobreviveram ao ataque desenvolveram um plano para construir naves espaciais maci??as que transportar??o os sobreviventes restantes para o espa??o. Infelizmente, o ??nico espa??oporto terrestre da Terra foi tomado pelos dem??nios, que colocaram uma barreira de chamas sobre ele, impedindo a sa??da de qualquer nave. A marinha luta contra hordas de dem??nios e ?? capaz de desativar o campo de for??a, permitindo que os humanos restantes escapem. Uma vez que todos os sobreviventes escaparam da Terra, o fuzileiro naval ?? o ??nico humano que resta no planeta. &lt;br /&gt;&lt;br /&gt;Assim que ele se senta para esperar a morte, sabendo que salvou a humanidade, o fuzileiro naval recebe uma transmiss??o fora do planeta dos sobreviventes em ??rbita , que conseguiram descobrir de onde os ex??rcitos do Inferno est??o vindo. A mensagem revela que a base demon??aca est?? no centro da cidade natal dos marinhos. Ele ent??o luta pela cidade at?? chegar ?? base, mas v?? que n??o h?? como parar a invas??o daquele lado. Ele decide entrar no portal para tentar desativ??-lo do outro lado, entrando no Inferno.&lt;br /&gt;&lt;br /&gt;Depois de lutar contra as hordas do Inferno, o fuzileiro naval chega ao local do maior dem??nio que ele j?? viu, chamado de ??cone do Pecado ( Baphomet ). Ele mata o ??cone do pecado disparando foguetes contra o c??rebro exposto. Sua morte causa devasta????o no inferno, e o portal para a Terra ?? selado. Com o inferno derrotado, o fuzileiro naval se junta aos outros humanos em um esfor??o para reconstruir a Terra.", "A maioria dos n??veis foi projetada por Sandy Petersen, com o americano McGee desempenhando um papel significativo tamb??m. O n??vel final, Icon of Sin , cont??m um ovo de p??scoa, onde dois dos artistas colocam a cabe??a desencarnada de John Romero como o sprite escondido atr??s do ??cone na parede, que deve ser atingido por foguetes tr??s vezes para vencer o jogo. Romero, enquanto tocava o n??vel para trabalhar em seus efeitos sonoros, acidentalmente trope??ou nessa piada de si mesmo. Depois de perceber o que seus colegas de trabalho haviam feito, o pr??prio Romero respondeu gravando sua voz dizendo &quot;Para vencer o jogo, voc?? deve me matar, John Romero&quot;, passando por v??rios filtros para distorc??-lo e depois invertendo a grava????o para criar o &quot; canto demon??aco &quot;falado pela cabe??a ao avistar o jogador. A foto que foi digitalizada para o &quot;John Romero's head&quot; - foi de uma foto da Businessweek em 1994.", "Uma vers??o 3DO Interactive Multiplayer foi anunciada para estar em desenvolvimento pela Art Data Interactive, mas nunca se materializou.&lt;br /&gt;&lt;br /&gt;Doom II foi lan??ado pela primeira vez em 10 de outubro de 1994 (um dos dias da regra do dia do julgamento final e exatamente dez meses ap??s o original), na Am??rica do Norte e na Europa.", "N??veis mestres para Doom II&lt;br /&gt;&lt;br /&gt;Master Levels for Doom II ?? um pacote de expans??o oficial para Doom II, lan??ado em 26 de dezembro de 1995 pela id Software . O CD cont??m 20 arquivos WAD criados por v??rios autores sob contrato. Havia tamb??m um b??nus adicional chamado Maximum Doom, composto por 3.000 n??veis de homebrew.&lt;br /&gt;&lt;br /&gt;Sem descanso para os vivos&lt;br /&gt;&lt;br /&gt;No Rest for the Living ?? o t??tulo de um pacote de expans??o desenvolvido pela Nerve Software para o lan??amento do Doom II no Xbox Live Arcade para o Xbox 360. Consiste em oito n??veis regulares e um n??vel secreto. Ele tamb??m est?? inclu??do na vers??o Doom II de Doom 3: BFG Edition 2012 , como parte do Doom Classic Complete para a PlayStation Network , e foi lan??ado como um complemento gratuito para a porta do mecanismo Unity 2019 de Doom II .", "Vendas&lt;br /&gt;&lt;br /&gt;De acordo com David Kushner no Masters of Doom , a id Software enviou 600.000 unidades do Doom II para lojas em prepara????o para o seu lan??amento. Esse embarque inicial esgotou em um m??s nas prateleiras, apesar de se esperar que durasse tr??s meses. [24] As encomendas para o jogo eram t??o grandes que era dif??cil comprar em uma loja. Os produtos do jogo foram exibidos em paletes e n??o em prateleiras. O jogo foi o t??tulo de computador mais vendido nos Estados Unidos em 1994. Ficou em 10?? lugar em 1996, com 322.671 unidades vendidas e US $ 12,6 milh??es ganhos somente na regi??o naquele ano.&lt;br /&gt;&lt;br /&gt;Nos Estados Unidos, Doom II foi o terceiro jogo de computador mais vendido entre 1993 e 1999, com 1,55 milh??o de unidades vendidas durante esse per??odo. [28] Suas receitas naquele pa??s chegaram a US $ 80 milh??es, enquanto as da Europa chegaram a US $ 20 milh??es. Desse ??ltimo n??mero, Kushner escreveu que &quot;30% [...] vieram da Alemanha - um pa??s que proibiu o jogo de suas prateleiras&quot;.&lt;br /&gt;&lt;br /&gt;Revis??es Cr??ticas&lt;br /&gt;&lt;br /&gt;A recep????o do Doom II foi positiva, com os revisores dizendo que refinou tudo o que fez o Doom original ser bom. [39] De acordo com Dragon , &quot;se uma carnificina irracional, mas intensa, ?? o que voc?? quer, voc?? receber?? o seu dinheiro. N??o ?? apenas um jogo obrigat??rio; ?? um jogo para manter o disco r??gido para sempre.&quot; Se voc?? precisar ter mais Doom , obtenha isso. &quot;&lt;br /&gt;&lt;br /&gt;O escritor / designer de jogos Chris Crawford usou o n??vel &quot;Barrels O 'Fun&quot; para ilustrar um ponto sobre a morte nos videogames, explicando que ele escolheu o n??vel como exemplo, porque ?? &quot;um dos desafios mais complexos e sofisticados de uma das mais melhores jogos dos anos 90 &quot;.&lt;br /&gt;&lt;br /&gt;A Next Generation analisou a vers??o para PC do jogo, classificando-a em tr??s estrelas em cinco e afirmou que &quot;Agora que a interface de primeira pessoa se tornou o design de escolha para todo o setor, o Id precisar?? encontrar novas inova????es ou encontre rapidamente que est?? se recuperando em seu pr??prio nicho de jogo &quot;.", "Doom II ganhou o Pr??mio Origins de Melhor Jogo de Computador de Fantasia ou Fic????o Cient??fica de 1994. Doom II foi classificado como o 115?? melhor jogo de todos os tempos na meta-an??lise estat??stica da Video Game Canon de 53 listas de &quot;Melhores videogames de todos os tempos&quot; em 2019.", "", "", "", "", "", "", ""];
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