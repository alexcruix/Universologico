<?php

/*
|-------------------------------
|	GENERAL SETTINGS
|-------------------------------
*/

$imSettings['general'] = array(
	'site_id' => '15F6822CD399D82EFD22077E40F1FA0D',
	'url' => 'http://www.universologico.com.br/',
	'homepage_url' => 'http://www.universologico.com.br/home.php',
	'icon' => 'http://www.universologico.com.br/favImage.png',
	'version' => '2020.1.8.1',
	'sitename' => 'Universo de Tecnologia',
	'lang_code' => 'pt-BR',
	'public_folder' => 'wp_users',
	'salt' => 'm8g6y280cl2hkaf16bgwuh5s6cf3mfui',
	'use_common_email_sender_address' => true,
	'common_email_sender_addres' => 'alexcruix@universologico.com.br '
);
/*
|-------------------------------
|	PASSWORD POLICY
|-------------------------------
*/

$imSettings['password_policy'] = array(
	'required_policy' => true,
	'minimum_characters' => '8',
	'include_uppercase' => true,
	'include_numeric' => true,
	'include_special' => true
);
/*
|-------------------------------
|	Captcha
|-------------------------------
*/ImTopic::$captcha_code = "		<div class=\"x5captcha-wrap\">
			<label>Palavra de verificação:</label><br />
			<input type=\"text\" class=\"imCpt\" name=\"imCpt\" maxlength=\"5\" />
		</div>
";


$imSettings['admin'] = array(
	'notification_public_key' => '8bdb89f9b6ec9832',
	'notification_private_key' => 'edf6dfeca1568f20',
	'enable_manager_notifications' => true,
	'theme' => 'ice',
	'extra-dashboard' => array(),
	'extra-links' => array()
);


/*
|--------------------------------------------------------------------------------------
|	DATABASES SETTINGS
|--------------------------------------------------------------------------------------
*/

$imSettings['databases'] = array(
	'cjzf2sva' => array(
		'description' => 'Hostinger_Universologico',
		'host' => 'localhost',
		'database' => 'u114014126_agyba',
		'user' => 'u114014126_ysevy',
		'password' => '!Alex198629',
		'table_prefix' => ''
	)
);
$ecommerce = Configuration::getCart();
// Setup the coupon data
$couponData = array();
$couponData['products'] = array();
// Setup the cart
$ecommerce->setPublicFolder('wp_users');
$ecommerce->setCouponData($couponData);
$dbconf = getDbData($imSettings['ecommerce']['database']['id']);
$ecommerce->setDatabaseConnection(ImDb::from_db_data($dbconf), $imSettings['ecommerce']['database']['table']);
$ecommerce->setSettings(array(
	'page_url' => 'http://www.universologico.com.br/',
	'force_sender' => false,
	'mail_btn_css' => 'display: inline-block; text-decoration: none; color: rgba(0, 0, 0, 1); background-color: rgba(255, 255, 255, 1); padding: 2px 30px 2px 30px; border-style: solid; border-width: 7px 7px 7px 7px; border-color: rgba(0, 0, 0, 1) rgba(204, 204, 204, 1) rgba(153, 153, 153, 1) rgba(67, 67, 67, 1); border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px;',
	'email_opening' => 'Caro Cliente,<br /><br />Obrigado pela sua compra. Aqui você encontrará um resumo do Pedido.<br /><br />Abaixo encontrará a lista dos produtos comprados, as informações de pagamento e as instruções sobre frete e forma de pagamento que escolheu.',
	'email_closing' => 'Continuamos à sua disposição para maiores informações.<br /><br />Atenciosamente, Equipe de Vendas.',
	'email_payment_opening' => 'Dear Customer,<br /><br />Thank you for your purchase. We confirm that we have correctly received your payment and that the order will be processed as soon as possible.<br /><br />Below you will find the list of the products you have ordered, the billing and shipping details.',
	'email_payment_closing' => 'Por favor, entre em contato com a gente se precisar de maiores informações.<br /><br />Atenciosamente, equipe de vendas.',
	'email_digital_shipment_opening' => 'Caro cliente,<br />Obrigado por sua compra.<br />Em anexo encontrará a lista de links de download para os produtos que encomendou:',
	'email_digital_shipment_closing' => 'Por favor, entre em contato com a gente se precisar de maiores informações.<br /><br />Atenciosamente, equipe de vendas.',
	'email_physical_shipment_opening' => 'Caro cliente,<br />Obrigado por sua compra.<br />Em anexo encontrará a lista de produtos que foram enviados para você:',
	'email_physical_shipment_closing' => 'Por favor, entre em contato com a gente se precisar de maiores informações.<br /><br />Atenciosamente, equipe de vendas.',
	'sendEmailBeforePayment' => false,
	'sendEmailAfterPayment' => true,
	'useCSV' => false,
	'header_bg_color' => 'rgba(37, 58, 88, 1)',
	'header_text_color' => 'rgba(255, 255, 255, 1)',
	'cell_bg_color' => 'rgba(255, 255, 255, 1)',
	'cell_text_color' => 'rgba(0, 0, 0, 1)',
	'availability_reduction_type' => 1,
	'border_color' => 'rgba(211, 211, 211, 1)',
	'owner_email' => 'alexcruix@universologico.com.br',
	'vat_type' => 'included',
	'availability_image' => ''
));

$ecommerce->setPriceFormatData(array(
	'decimals' => 2,
	'decimal_sep' => '.',
	'thousands_sep' => '',
	'currency_to_right' => true,
	'currency_separator' => ' ',
	'show_zero_as' => '0',
	'currency_symbol' => 'R$',
	'currency_code' => 'BRL',
	'currency_name' => 'Brazil, Reais',
));

$ecommerce->setProductsData(array());
$ecommerce->setPaymentData(array(
	'8dkejfu5' => array(
		'id' => '8dkejfu5',
		'name' => 'Depósito em conta',
		'description' => 'Pagar depois por depósito ou DOC.',
		'email_text' => 'Aqui estão os dados necessários para efetuar o pagamento por Transferência Bancária:

XXX YYY ZZZ

Note que uma vez que o pagamente seja efetuado é necessário enviar uma cópia do comprovante junto com o Número do Pedido.',
		'enableAfterPaymentEmail' => false
	)));
$ecommerce->setShippingData(array(
	'j48dn4la' => array(
		'id' => 'j48dn4la',
		'name' => 'Correios',
		'description' => 'As mercadorias serão entregues em 3-5 dias úteis.',
		'email_text' => 'Enviado por Correios.
As mercadorias serão entregues em 3-5 dias úteis.'
	),
	'hdj47dut' => array(
		'id' => 'hdj47dut',
		'name' => 'Sedex',
		'description' => 'As mercadorias serão entregues em 1-2 dias úteis.',
		'email_text' => 'Enviado por Sedex.\\nAs mercadorias serão entregues em 1-2 dias úteis.'
	)));

/*
|-------------------------------------------------------------------------------------------
|	GUESTBOOK SETTINGS
|-------------------------------------------------------------------------------------------
*/

$imSettings['guestbooks'] = array(
	'x5gb074' => array(
		'id' => 'x5gb074',
		'pagetitle' => 'Página Inicial',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb3475' => array(
		'id' => 'x5gb3475',
		'pagetitle' => 'Nes',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb3575' => array(
		'id' => 'x5gb3575',
		'pagetitle' => 'Snes',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb3775' => array(
		'id' => 'x5gb3775',
		'pagetitle' => 'Nintendo 64',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb5375' => array(
		'id' => 'x5gb5375',
		'pagetitle' => 'Color TV Game',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb13975' => array(
		'id' => 'x5gb13975',
		'pagetitle' => 'Sobre o Universo',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb17475' => array(
		'id' => 'x5gb17475',
		'pagetitle' => 'Apple',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb17975' => array(
		'id' => 'x5gb17975',
		'pagetitle' => 'Microsoft',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb23575' => array(
		'id' => 'x5gb23575',
		'pagetitle' => 'Linux',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb30775' => array(
		'id' => 'x5gb30775',
		'pagetitle' => 'Ocultismo/Espiritual Multidimensional',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb34075' => array(
		'id' => 'x5gb34075',
		'pagetitle' => 'Veiculos',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb65474' => array(
		'id' => 'x5gb65474',
		'pagetitle' => 'Página Inicial - Mobile',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb65675' => array(
		'id' => 'x5gb65675',
		'pagetitle' => 'Apple/m',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb65775' => array(
		'id' => 'x5gb65775',
		'pagetitle' => 'Linux/m',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb65875' => array(
		'id' => 'x5gb65875',
		'pagetitle' => 'Microsoft/m',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb32375' => array(
		'id' => 'x5gb32375',
		'pagetitle' => 'H-S-P/m',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb65975' => array(
		'id' => 'x5gb65975',
		'pagetitle' => 'H-S-P',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb66075' => array(
		'id' => 'x5gb66075',
		'pagetitle' => 'Veiculos/m',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb66175' => array(
		'id' => 'x5gb66175',
		'pagetitle' => 'Ocultismo - Espiritual Multidimensional/m',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb66275' => array(
		'id' => 'x5gb66275',
		'pagetitle' => 'Sobre o Universo/m',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	),
	'x5gb663119' => array(
		'id' => 'x5gb663119',
		'pagetitle' => 'Lista por Geração/m',
		'celltitle' => '',
		'rating' => FALSE,
		'order' => 'asc', 
		'sendmode' => 'file',
		'folder' => 'wp_users/wp_users',
	)
);


/*
|-------------------------------
|	ANALYTICS SETTINGS
|-------------------------------
*/

$imSettings['analytics'] = array(
	'type' => 'wsx5analytics',
	'database' => array(
		'id' => 'cjzf2sva',
		'table' => 'wp_users'
	)
);

/*
|-------------------------------------------------------------------------------------------
|	Dynamic Objects SETTINGS
|-------------------------------------------------------------------------------------------
*/

$imSettings['dynamicobjects'] = array(	'template' => array(
),
	'pages' => array(

	));


/*
|-------------------------------
|	EMAIL SETTINGS
|-------------------------------
*/

$ImMailer->emailType = 'phpmailer';
$ImMailer->exposeWsx5 = true;
$ImMailer->header = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">' . "\n" . '<html>' . "\n" . '<head>' . "\n" . '<meta http-equiv="content-type" content="text/html; charset=utf-8">' . "\n" . '<meta name="generator" content="Incomedia WebSite X5 Professional 2020.1.8 - www.websitex5.com">' . "\n" . '</head>' . "\n" . '<body bgcolor="#37474F" style="background-color: #37474F;">' . "\n\t" . '<table border="0" cellpadding="0" align="center" cellspacing="0" style="padding: 0; margin: 0 auto; width: 700px;">' . "\n\t" . '<tr><td id="imEmailHeader" style="text-align: center; width: 700px;border-top-style: solid; border-top-color: #000000; border-top-width: 2px; border-left-style: solid; border-left-color: #000000; border-left-width: 2px; border-right-style: solid; border-right-color: #000000; border-right-width: 2px; border-bottom-style: none; border-bottom-color: transparent; border-bottom-width: 0px; border-bottom: none; background-color: #FFFFFF;" width="700px"><img src="http://www.universologico.com.br/images/logo-1-ut.jpg" style="width: 200px; border: none;" width="200px"></td></tr>' . "\n\t" . '<tr><td id="imEmailContent" style="min-height: 300px; padding: 10px; font: normal normal normal 9pt \'Times New Roman\'; color: #000000; background-color: #FFFFFF; text-decoration: none; text-align: left; width: 700px; border-style: solid; border-color: #000000; border-top-width: 0px; border-top: none; border-right-width: 2px; border-bottom-width: 2px; border-left-width: 2px; background-color: #FFFFFF" width="700px">' . "\n\t\t";
$ImMailer->footer = "\n\t" . '</td></tr>' . "\n\t" . '</table>' . "\n" . '<table width="100%"><tr><td id="imEmailFooter" style="font: normal normal normal 7pt \'Times New Roman\'; color: #FFFFFF; background-color: transparent; text-decoration: none; text-align: center;  padding: 10px; margin-top: 5px;background-color: transparent">' . "\n\t\t" . 'Esta mensagem de email contém informações destinadas exclusivamente ao destinatário indicado acima.<br>Se você recebeu esta mensagem por engano, por favor notifique o remetente imediatamente e destrua o que foi recebido sem fazer uma cópia.' . "\n\t" . '</td></tr></table>' . "\n\t" . '</body>' . "\n" . '</html>';
$ImMailer->bodyBackground = '#FFFFFF';
$ImMailer->bodyBackgroundEven = '#FFFFFF';
$ImMailer->bodyBackgroundOdd = '#F0F0F0';
$ImMailer->bodyBackgroundBorder = '#CDCDCD';
$ImMailer->bodyTextColorOdd = '#000000';
$ImMailer->bodySeparatorBorderColor = '#000000';
$ImMailer->emailBackground = '#37474F';
$ImMailer->emailContentStyle = 'font: normal normal normal 9pt \'Times New Roman\'; color: #000000; background-color: #FFFFFF; text-decoration: none; text-align: left; ';
$ImMailer->emailContentFontFamily = 'font-family: Times New Roman;';

// End of file x5settings.php