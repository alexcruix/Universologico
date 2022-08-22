function paypaldonate_pluginAppObj_63_13() {
    
    var container_btn = "";
    var contentLanguageId = "";
    var objLang = {};
    var currency;
    var getProperty;
    var srcPixel = "";
    
    var nameRecipient = "";
    var emailRecipient = "";
    var purposeRecipient = "";
    var donation_type = "";
    var donation_amount = "";
    var button_style = "";
    
    x5engine.boot.push(function(){x5engine.utils.showOfflineMessage("PayPal Donate - " + x5engine.l10n.get('cmn_only_when_online'));
    container_btn = $("#pluginAppObj_63_13_container");
        
    nameRecipient = "Alex de C S";
    emailRecipient = "cabritocom@gmail.com";
    purposeRecipient = "Ajude o Site";
    donation_type = "donation_independent";
    donation_amount = "10";
    donation_currency = "EUR";
    button_style = "3";   
    
    contentLanguageId = "BR";
    objLang = {
        "BR": "pt_BR",
        "DE": "de_DE",
        "EN": "en_US",
        "ES": "es_ES",
        "FR": "fr_FR",
        "IT": "it_IT",
        "JP": "ja_JP",
        "NL": "nl_NL",
        "PL": "pl_PL",
        "RU": "ru_RU"
    };
    getProperty = function (key) {
        var langValue = objLang[key];
        if(langValue == undefined){
            langValue = "en_US";
        }
        return langValue;
    };
    
    /*prepare image*/
    var srcDonate = "";
    var srcEndPixel = "";
    switch("3") {
        case "1":
            srcDonate = "%_LANG_%/i/btn/btn_donate_LG.gif";
            srcEndPixel = "/i/scr/pixel.gif";
            break;
        case "2":
            srcDonate = "%_LANG_%/i/btn/btn_donate_SM.gif";
            srcEndPixel = "/btn/btn_donate_cc_147x47.png";
            break;
        case "3":
            srcDonate = "%_LANG_%/i/btn/btn_donateCC_LG.gif";
            srcEndPixel = "/i/scr/pixel.gif";
            break;
        break;
    }
    srcDonate = "https://www.paypalobjects.com/" + srcDonate.replace("%_LANG_%", getProperty(contentLanguageId));
    srcPixel = "https://www.paypalobjects.com/" + getProperty(contentLanguageId) + srcEndPixel;
    
    function get_action() {
        var version = "2020";
        if (!isNaN(version) && version < 14) {
           x5engine.utils.showOfflineMessage(x5engine.l10n.get('blog_offline_message'));
        }
        else{
            x5engine.utils.showOfflineMessage("PayPal Donate - " + x5engine.l10n.get('cmn_only_when_online'));
        }  
    }  
    
    /*prepare action and method*/
    var formPay = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">';
    if( "preview" == 'uipreview' || "preview" == 'preview') { 
        formPay = '<form action="" method="post">';
    } 
    
    /* FORM */
    formPay += '    <!-- Identify your business so that you can collect the payments. -->'+
    '    <input type="hidden" name="business" value="' + emailRecipient + '">'+
    ''+
    '    <!-- Specify a Donate button. -->'+
    '    <input type="hidden" name="cmd" value="_donations">'+
    ''+
    '    <!-- Specify details about the contribution -->'+
    '    <input type="hidden" name="item_name" value="' + nameRecipient + '">'+
    '    <input type="hidden" name="item_number" value="' + purposeRecipient + '">';
    if(donation_type == "donation_fixed"){
       formPay += '    <input type="hidden" name="amount" value="' + donation_amount + '">';
    } 
    formPay += '    <input type="hidden" name="currency_code" value="' + donation_currency + '">'+
    ''+
    '    <!-- Display the payment button. -->'+
    '    <input type="image" class="input_img" name="submit" src="' + srcDonate + '" alt="Donate">';
    if("3" != 2){
        // for now comment, because with right alignment leaves a px too much
       //formPay += '    <img alt="" width="1" height="1" src="' + srcPixel + '" >';
    } 
    formPay += '</form>';
	

    container_btn.append(formPay);
    
    $('form').submit(function() {
        if("preview" == 'preview') { 
            get_action();
            return false;
        }
        else{
            return true;
        }
    });
    
    }); //close ready or boot.push
}