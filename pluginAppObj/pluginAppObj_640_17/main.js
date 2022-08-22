function audioplayer_pluginAppObj_640_17() {
    
    var myAudio = "";
    var Album = {};
    var firstEntry = true;
    var volume_click = false;
    var player = "";
    var container_play = "";
    var cover = "";
    var container_cover = "";
    var title_playlist_moderno = "";
    var container_cover_moderno = "";
    var widthSingleTrack = "";
    var widthTitleSong = "";
    var widthTimeSong = "";
    var widthDownloadSong = "";
    var maxwidthTimeSong = 0;
    var container;
    var containerListSong;
    var spantime;
    var fontSize = 0;
    var songSelected = "";
    var icanplay = true;

    x5engine.boot.push(function(){
    x5engine.utils.showOfflineMessage("Audio Player - " + x5engine.l10n.get('cmn_only_when_online'));
        Album = {
            show_track_number: false ,
            autoplay: true ,
            loop: false ,
            song: [
        {src: "pluginAppObj/pluginAppObj_640_17/Mick-Gordon---DOOM-Trailer-Music-Compilation.mp3", description: "Mick Gordon   DOOM Trailer Music Compilation", id: "1", duration: "0"} 

        ]
        };
        if("style_classic" == "style_classic" || "style_classic" == "style_moderno"){

            cover = $('#pluginAppObj_640_17_container .cover');
            container_cover = $('#pluginAppObj_640_17_container .container_cover');

            if("style_classic" == "style_classic"){
                player = $('#pluginAppObj_640_17_container .player');    
                container_play = $('#pluginAppObj_640_17_container .container_play');
            }

            else if("style_classic" == "style_moderno"){
                title_playlist_moderno = $('#pluginAppObj_640_17_container .title_playlist_moderno');
                container_cover_moderno = $('#pluginAppObj_640_17_container .container_cover_moderno');
                
            }
        }

        containerListSong = $('#pluginAppObj_640_17_playlist');
        container = $('#pluginAppObj_640_17_container');
        widthSingleTrack = $("#pluginAppObj_640_17_container .single-track");
        widthTitleSong = $("#pluginAppObj_640_17_container .title-song");
        widthTimeSong = $("#pluginAppObj_640_17_container .time");
        widthDownloadSong = $("#pluginAppObj_640_17_container .download_button");
        spantime = $('#pluginAppObj_640_17_hiddenspantime');
        fontSize = 10 * (96 / 72);
        spantime.css("font-size",fontSize+"px");
        spantime.css("font-weight","normal");
        maxwidthTimeSong = spantime.width();
        spantime.remove();

        myAudio = document.getElementById("pluginAppObj_640_17_audio_control");

        $("#pluginAppObj_640_17_PLAY").on("click", function () {
            playAudio();
        });

        $("#pluginAppObj_640_17_PAUSE").on("click", function () {
            stopAudio();
        });


        $("#pluginAppObj_640_17_LOOP").on("click", function () {
            setLoop();
        });

        $("#pluginAppObj_640_17_DOWNLOAD").on("click", function () {

            $("#pluginAppObj_640_17_container .a_download").attr("href", getSongById($('#pluginAppObj_640_17_container .playlist .single-track.active').attr('data-songid')).src);
            $("#pluginAppObj_640_17_container .a_download")[0].click();

        });    
        $(".download_button").on("click", function (event) {
            event.stopPropagation();
        });

        $("#pluginAppObj_640_17_MUTE").on("click", function () {

            var volumeOn = $("#pluginAppObj_640_17_container .svg_volume_on");
            var volumeOff = $("#pluginAppObj_640_17_container .svg_volume_off"); 

            if(myAudio.muted){
                myAudio.muted = false;
                volumeOn.removeClass("hidden");
                volumeOff.addClass("hidden");
            }
            else{
                myAudio.muted = true;
                volumeOff.removeClass("hidden");
                volumeOn.addClass("hidden");
            }
        });


        $("#pluginAppObj_640_17_container .div_mute").on("click", function (event) {
            event.stopPropagation();
            var volumeBox = $('#pluginAppObj_640_17_container .ext-box');

            if(volumeBox.hasClass('hidden')){ 
               volumeBox.removeClass('hidden');
            } else { 
               volumeBox.addClass('hidden');
            }
        });    

        $("#pluginAppObj_640_17_container .volume_on_off").on("click", function () {
            setMute();
            volume_click = true;
        });


        $('html').click(function () {
            var volumebox  = $('#pluginAppObj_640_17_container .ext-box');

            if(!volumebox.hasClass('hidden') && !volume_click){ 
               volumebox.addClass('hidden');
            }
            else{
                 volume_click = false;
            }

        });

        myAudio.oncanplay = function() {
            stopAudio();
            playInit();
        };

        myAudio.onerror = function() {
            try{}catch(err){}
        };

        myAudio.onabort = function() {
            try{}catch(err){}
        };


        myAudio.onplay = function () {
            $("#pluginAppObj_640_17_PLAY").addClass("hidden");
            $("#pluginAppObj_640_17_PAUSE").removeClass("hidden");
        };

        myAudio.onpause = function () {
            $("#pluginAppObj_640_17_PLAY").removeClass("hidden");
            $("#pluginAppObj_640_17_PAUSE").addClass("hidden");
        };

        myAudio.addEventListener('ended', function () {
            if (songSelected.id == Album.song.length){ 
                if(!Album.loop) {
                      icanplay = false;
                }
                initAudio($('#pluginAppObj_640_17_container .playlist .single-track:first-child'));
            } else {
                forward();
            }
        }, false);

        myAudio.addEventListener("timeupdate", function() {

            if(myAudio.duration != undefined && myAudio.duration > 0){
                $('#pluginAppObj_640_17_container .audio-player-progress-bar').css({ width: "" + (myAudio.currentTime +.25)/myAudio.duration*100 + "%"});

                if("style_classic" == 'style_moderno'){ 
                    $("#pluginAppObj_640_17_container .moderno_current_time .moderno_current_time_span").text(formatTime( myAudio.currentTime));  
                    $("#pluginAppObj_640_17_container .moderno_total_time .moderno_total_time_span").text(formatTime( myAudio.duration));  
                }
            }
        });

        myAudio.addEventListener("progress", function() {
        });

        $("#pluginAppObj_640_17_FWD").click(function () {
            forward();
            resize();
        });

        $("#pluginAppObj_640_17_REV").click(function () {
            if (songSelected.id == 1 || myAudio.currentTime > 5){
               startAgain();
            } else {
                rewind();
            }
            resize();
        });

        $('#pluginAppObj_640_17_container .playlist .single-track').click(function () {
            initAudio($(this));
            resize();
        });

        $('#pluginAppObj_640_17_container .hp_slide').click(setCurrentTime);

        $(document).on('input change', '#pluginAppObj_640_17_container .vVertical', function() {
            myAudio.volume = 1 - this.value;
            volume_click = true;
        });

        setHeightContainerCover();

        var isPreview = false;    
        

        if (1 > 0 || isPreview ) {
            setHeightListPlaylist();
            initAudio($('#pluginAppObj_640_17_container .playlist .single-track:first-child'));
            preloadAll();
            loop();
            
            var pluginAppObj_640_17_resizeTo = null,
				pluginAppObj_640_17_width = 0;
			x5engine.utils.onElementResize(document.getElementById('pluginAppObj_640_17'), function (rect, target) {
				if (pluginAppObj_640_17_width == rect.width) {
					return;
				}
				pluginAppObj_640_17_width = rect.width;
				if (!!pluginAppObj_640_17_resizeTo) {
					clearTimeout(pluginAppObj_640_17_resizeTo);
				}
				pluginAppObj_640_17_resizeTo = setTimeout(function() {
					resize();
				}, 50);
			});

        }
    });


    function resize() {
        var $html = $('#pluginAppObj_640_17_container .span_titolo');

        $html.removeClass('div_marquee_animation');

        if ($html.width() > $("#pluginAppObj_640_17_container .container_title_song").width()) {
             $html.addClass('div_marquee_animation');
        }
        
        if("style_classic" == "style_classic" || "style_classic" == "style_moderno"){

            var isPreview = false;    
            

            if(container.width() < 360 || (400 < 360 && isPreview)){

                    cover.addClass("hidden");
                    container_cover.addClass("container_cover_media");

                    if("style_classic" == "style_classic"){
                        player.addClass("player_media");  
                        container_play.addClass("container_play_media");
                    }

                    else if("style_classic" == "style_moderno"){
                        title_playlist_moderno.addClass("title_playlist_moderno_media");
                        container_cover_moderno.addClass("hidden");
                    }
                }
            else{ 
                cover.removeClass("hidden");
                container_cover.removeClass("container_cover_media");

                 if("style_classic" == "style_classic"){
                    player.removeClass("player_media"); 
                    container_play.removeClass("container_play_media");  
                }

                else if("style_classic" == "style_moderno"){
                    title_playlist_moderno.removeClass("title_playlist_moderno_media");
                    container_cover_moderno.removeClass("hidden");
                }
            }
        }
        widthTimeSong.css("min-width",maxwidthTimeSong);
        var calcWidth = widthSingleTrack.width() - maxwidthTimeSong;
        calcWidth = calcWidth - parseInt(widthTimeSong.css("padding-left").replace("px",""));
        calcWidth = calcWidth - parseInt(widthTimeSong.css("padding-right").replace("px",""));
        calcWidth = calcWidth - parseInt(widthTimeSong.css("margin-left").replace("px",""));
        calcWidth = calcWidth - parseInt(widthTimeSong.css("margin-right").replace("px",""));
        
        if("style_classic" != "style_coverbackground"){
            
            if (false) {
                calcWidth = calcWidth - widthDownloadSong.width();
                calcWidth = calcWidth - parseInt(widthDownloadSong.css("padding-left").replace("px",""));
                calcWidth = calcWidth - parseInt(widthDownloadSong.css("padding-right").replace("px",""));
                calcWidth = calcWidth - parseInt(widthDownloadSong.css("margin-left").replace("px",""));
                calcWidth = calcWidth - parseInt(widthDownloadSong.css("margin-right").replace("px",""));
            }    
        }
        calcWidth = calcWidth - parseInt(widthTitleSong.css("padding-left").replace("px",""));
        calcWidth = calcWidth - parseInt(widthTitleSong.css("padding-right").replace("px",""));
        calcWidth = calcWidth - parseInt(widthTitleSong.css("margin-left").replace("px",""));
        calcWidth = calcWidth - parseInt(widthTitleSong.css("margin-right").replace("px",""));
        
        widthTitleSong.css("width",calcWidth);
    }

    function initAudio(elem) {

        songSelected = getSongById(elem.attr('data-songid'));
        $('#pluginAppObj_640_17_container .span_titolo').text(songSelected.description);
        stopAudio();
        setProgressValue();
        myAudio.src = songSelected.src;
        myAudio.load();
        $('#pluginAppObj_640_17_container .playlist .single-track').removeClass('active');
        elem.addClass('active');
    }

    function setHeightContainerCover(){

        if("style_classic" == "style_coverbackground" && "" != ""){

            var cover_coverbackground = $('#pluginAppObj_640_17_container .cover_coverbackground');
            var image_url = cover_coverbackground.css('background-image'),image;

            if(image_url!=null && image_url!= 'undefined'){

                image_url = image_url.match(/^url\("?(.+?)"?\)$/);

                if (image_url[1]) {
                    image_url = image_url[1];
                    image = new Image();

                    $(image).on("load", function() {
                        cover_coverbackground.css( "width","100%");
                    });

                    image.src = image_url;
                }   
            }
        }    
    }

    function setCurrentTime(e) {
        var percent = e.offsetX / this.offsetWidth;
        stopAudio();
        myAudio.currentTime = parseInt(percent * myAudio.duration);

        if (/Edge\/\d./i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
            playInit();  
        }
    }

    function formatTime(s, m) {
        s = Math.floor( s );    
        m = Math.floor( s / 60 );
        m = m >= 10 ? m : '0' + m;    
        s = Math.floor( s % 60 );
        s = s >= 10 ? s : '0' + s;    
        return m + ':' + s;
    }

    function setHeightListPlaylist() {

        var numeroBraniVisualizzati = 0 ;
        var playlist = $("#pluginAppObj_640_17_playlist");

        if (numeroBraniVisualizzati > 0) {

            var singleStrack = $("#pluginAppObj_640_17_playlist .single-track");
            var marginbottom = parseInt(singleStrack.css('margin-bottom').replace("px", ""));
            var margintop = parseInt(singleStrack.css('margin-top').replace("px", ""));
            var altezzaSingolaTraccia = singleStrack.height() + marginbottom + margintop;

            $("#pluginAppObj_640_17_container .my_download").height(altezzaSingolaTraccia);

            var altezzaFinale = (altezzaSingolaTraccia * numeroBraniVisualizzati);
            playlist.height(altezzaFinale);
        } else {
            playlist.addClass("hidden");
        }
    }

    function playInit(){
        
        if(!icanplay){
            icanplay = true;
        }
        else{
            if(firstEntry) {
              if (Album.autoplay) {
                  playAudio();
              }
              firstEntry = false;
            } else{
                playAudio();
            }
        }
    }

    function playAudio() {     
         if (myAudio.paused) 
                myAudio.play();
    }

    function stopAudio() {
       if(!myAudio.paused)
            myAudio.pause(); 
    }

    function setMute() {
        if(myAudio.muted){
            myAudio.muted = false;
            $("#pluginAppObj_640_17_container .span_vol_on").removeClass("hidden");
            $("#pluginAppObj_640_17_container .span_vol_off").addClass("hidden");
        }
        else{
            myAudio.muted = true;
            $("#pluginAppObj_640_17_container .span_vol_off").removeClass("hidden");
            $("#pluginAppObj_640_17_container .span_vol_on").addClass("hidden");
        }
    }

    function setLoop() {
        if(Album.loop){
            Album.loop = false;
            $("#pluginAppObj_640_17_LOOP").addClass("svg_deactivate");
        }
        else{
            Album.loop = true;
            $("#pluginAppObj_640_17_LOOP").removeClass("svg_deactivate");
        }
    }

    function getSongById(code) {
        var allSong = Album.song;
        return allSong.filter(
            function (allSong) {
                return allSong.id == code
            }
        )[0];
    }

    function startAgain() {
        stopAudio();
        myAudio.currentTime = 0;

        if (/Edge\/\d./i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
            playInit();  
        }
    }

    function forward() {

        var next = $('#pluginAppObj_640_17_container .playlist .single-track.active').next();
        if (next.length == 0) {
            next = $('#pluginAppObj_640_17_container .playlist .single-track:first-child');
        }
        initAudio(next);
    }

    function rewind() {
        var prev = $('#pluginAppObj_640_17_container .playlist .single-track.active').prev();
        if (prev.length == 0) {
            prev = $('#pluginAppObj_640_17_container .playlist .single-track:last-child');
        }
        initAudio(prev);
    }

    function preloadAll() {
        for (var i = 0; i < Album.song.length; i++) {
            var song = Album.song[i];

            var s = $("<audio></audio>");
            s.attr("preload", "metadata");
            s.attr("data-songId", song.id);

            s.on("loadedmetadata", function () {

                var songSelected = getSongById(this.getAttribute('data-songid'));
                songSelected.duration = this.duration;
                
                if(songSelected.duration != Infinity && !isNaN(songSelected.duration)){
                    $("#pluginAppObj_640_17_duration_" + this.getAttribute('data-songid')).text(formatTime(songSelected.duration));
                }
                $(this).off('loadedmetadata');
            });
            s.attr("src", song.src);
        }
    }

    function setProgressValue(w){
        if(w!=null && w!=undefined)
            $('#pluginAppObj_640_17_container .audio-player-buffer-bar').css({ width: "" + w + "%"});
        else
            $('#pluginAppObj_640_17_container .audio-player-buffer-bar').css({ width: "0%"});
    }

    function loop() {
      var buffered = myAudio.buffered;
      var loaded;

        try {
            if(buffered.length > 0){
                loaded = 100 * (buffered.end(buffered.length - 1))/myAudio.duration;
                setProgressValue(loaded.toFixed(2));
            }
        }
        catch(err) { }

      setTimeout(loop, 1000);
    }
}