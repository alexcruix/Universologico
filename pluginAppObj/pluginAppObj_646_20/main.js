function accordiontext_pluginAppObj_646_20() {
    
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
        accordionContainer = $('#pluginAppObj_646_20_accordion_container');
        numStyle = getNumStyle("styleII");
        descStyle = "styleII";
        t_animation = 400;
        fontSizeTitle = 13.3;
        boxOpenedOnLoad = 0;

        svgOpened = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(0, 0, 0, 1)")+'" id="Group" transform="translate(-48.000000, -528.000000)"><path d="M56,544 C51.5817218,544 48,540.418278 48,536 C48,531.581722 51.5817218,528 56,528 C60.4182782,528 64,531.581722 64,536 C64,540.418278 60.4182782,544 56,544 Z M52,535 L52,537 L60,537 L60,535 Z M52,535" id="Oval 210 copy 2"/></g></g></svg>';
        
        svgClosed = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(255, 0, 0, 1)")+'" id="Group" transform="translate(0.000000, -528.000000)"><path d="M4,535 L4,537 L7,537 L7,540 L9,540 L9,537 L12,537 L12,535 L9,535 L9,532 L7,532 L7,535 Z M8,544 C3.58172178,544 0,540.418278 0,536 C0,531.581722 3.58172178,528 8,528 C12.4182782,528 16,531.581722 16,536 C16,540.418278 12.4182782,544 8,544 Z M8,544" id="Oval 210 copy"/></g></g></svg>';
        
        svgArrow = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>';
        
        containerTitles = ["Jogabilidade", "Desenvolvimento", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        
        containerDescriptions = ["Doom 64 possui uma jogabilidade idêntica aos jogos anteriores da série Doom, tendo algumas adições: o jogador deve avançar através de vários mapas enfrentando demônios, recolhendo armas e chaves e usando interruptores, com o intuito de alcançar a saída, enquanto sobrevive as armadilhas mortais e emboscadas. Alterações foram feitas ao motor gráfico do Doom original - fazendo o Doom 64 um jogo que utiliza um motor gráfico dos dois jogos anteriores - para utilização no Doom 64, adicionando alguns elementos de jogabilidade&lt;br /&gt;&lt;br /&gt;Armas&lt;br /&gt;&lt;br /&gt;Todas as armas presentes nos jogos anteriores estão presentes, mas redesenhadas com sprites totalmente novos, sendo as mudanças mais notáveis: a serra-elétrica agora possui duas lâminas; o punho / mão do jogador agora possui luvas manchadas de sangue; o rifle de plasma agora possui um núcleo elétrico emitindo um efeito sonoro bastante diferente do seu original; o lança foguetes, embora muito similar, empurra o jogador levemente para atrás devido seu forte disparo; a famosa 'super-shotgun' da série também é muito semelhante com a anterior (vista em Doom 2), mas agora não é mostrado o carregamento da arma, e seu disparo pesado também causa recuo.&lt;br /&gt;&lt;br /&gt;Há ainda uma arma intitulada de Unmaker, que utiliza a mesma munição do rifle de plasma e da BFG. No livro Doom Bible escrito por um dos projetistas do Doom e Doom 2, Tom Hall, há escrito que esta arma deveria estar presente nos jogos originais, mas que foi descartada, fazendo com que a aparição do Unmaker em Doom 64 seja a única aparição oficial. Conforme o jogador colete artefatos (há ao todo três) desta arma no decorrer dos mapas, o Unmaker poderá se tornar mais poderoso com este feito: o primeiro artefato aumenta a velocidade do laser, o segundo adiciona um disparo duplo e o terceiro, três disparos ao mesmo tempo, permitindo o jogador a atacar três inimigos ao mesmo tempo.", "O Doom 64 foi desenvolvido pela Midway Games nos estúdios de San Diego sob supervisão da Id Software, a principal desenvolvedora da franquia Doom.[2] O desenvolvimento do jogo começou no fim de 1994.[3] Inicialmente, a Midway Games tinha como objetivo o de lançar o jogo com o título The Absolution, mas optou por Doom 64 devido ao reconhecimento da marca - o título The Absolution foi reutilizado para o último mapa do jogo. A Midway Games desejava incluir todos os inimigos dos jogos originais, bem como alguns extras e mapas adicionais no produto final, mas com curtos prazos para entregar o jogo e o pouco espaço disponível nos cartuchos de Nintendo 64 impediram essa possibilidade. A Midway afirma que um multiplayer não foi incluso porque a Nintendo não disponibilizou os devidos recursos de programação para isso. A desenvolvedora ainda justifica que isso poderia ter sido devido à lentidões em jogos de multi jogador presentes nos games daquele período e a competitiva natureza do estilo de jogo split-screen: &quot;Todos sabem que a melhor parte de um multiplayer é não saber onde seu oponente está&quot;, afirmou um representante da Midway Games, &quot;e com um multiplayer em tela dividida, todos podem identificar facilmente onde seus oponentes estão.&quot;[4]&lt;br /&gt;&lt;br /&gt;A música e os efeitos sonoros do Doom 64 foram inteiramente feitos por Aubrey Hodges, responsável também por ter feito os efeitos sonoros e trilha sonora da versão do port de Doom para o PlayStation. A equipe responsável por Doom 64 cogitou na possibilidade de um Doom 64 parte dois não muito tempo após o lançamento deste, mas descartou a ideia em virtude do &quot;motor gráfico do Doom ser obsoleto&quot; e os jogadores estarem dando mais atenção a jogos como Quake e atiradores inteiramente em 3D.", "", "", "", "", "", "", "", "", "", "", "", "", ""];
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
           
            var availableSpace = ($("#pluginAppObj_646_20_accordion_container .accordion_el").outerHeight(true) * totBoxes);
            if(numStyle != 4){
                //remove distance from element
                availableSpace -= 10;
            }
            availableSpace = 600 - availableSpace;
            availableSpace = availableSpace < 40 ? 40 : availableSpace;

            //set height to first description box
            $('#pluginAppObj_646_20_accordion_container .accordion_el .accordion_desc.collapse').css("height", availableSpace);
        }
        //set height to first description box
        $('#pluginAppObj_646_20_accordion_container .accordion_el .accordion_desc.collapse.in').css("display", "block");
    }

    function initStyle(){
        //add class to first box
        $('#pluginAppObj_646_20_accordion_container').find("[data-position='" + boxOpenedOnLoad + "']").addClass("openedchild");
        
        var childAccordionContainer = document.getElementById("pluginAppObj_646_20_accordion_container").querySelectorAll('[data-position]');
        for (var i=0; i < childAccordionContainer.length; i++) {
            if(childAccordionContainer[i].dataset.position == totBoxes-1){
                //add class to last box because i need to set margin-bottom 0
                $(childAccordionContainer[i]).addClass("lastchild");
            }
        }
        
        if(numStyle == 2){
            $('#pluginAppObj_646_20_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').append(svgClosed);   
            $('#pluginAppObj_646_20_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon .ic').empty().append(svgOpened);
        }
        else if(numStyle == 3 || numStyle == 4){
            $('#pluginAppObj_646_20_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').addClass("opened");
            setTimeout(function(){ 
                $('#pluginAppObj_646_20_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').css("visibility", "visible");
            }, 75);   
        }
    }

    function initEvent(){   
        $('#pluginAppObj_646_20_accordion_container .accordion_el').click(function (e) { 
            var desc = $(this).find(".accordion_desc");
            var itemClickedIsClosed = !$(desc).hasClass("in");

            $('#pluginAppObj_646_20_accordion_container .accordion_el .accordion_desc.collapse').slideUp(t_animation);
            $('#pluginAppObj_646_20_accordion_container .accordion_el .accordion_desc.collapse').removeClass("in");

            if(itemClickedIsClosed){
                $(desc).slideDown(t_animation);
                $(desc).addClass("in");
            }

            $('#pluginAppObj_646_20_accordion_container .accordion_el').removeClass("selected");

            if(itemClickedIsClosed){
                $(this).addClass("selected");
            }

            //style with icon
            if(numStyle == 2 || numStyle == 3 || numStyle == 4){
                $('#pluginAppObj_646_20_accordion_container .accordion_el .accordion_title .accordion_title_icon').removeClass("opened"); 

                if(itemClickedIsClosed){
                    $(this).find("div.accordion_title_icon").addClass("opened");
                }

                if(numStyle == 2){    
                    $('#pluginAppObj_646_20_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').empty().append(svgClosed);

                    if(itemClickedIsClosed){
                        $('#pluginAppObj_646_20_accordion_container .accordion_el .accordion_title .accordion_title_icon.opened .ic').empty().append(svgOpened);
                    }
                }
            }
        });
    }
}