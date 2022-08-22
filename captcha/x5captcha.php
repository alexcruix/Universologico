<?php
include("../res/x5engine.php");
$nameList = array("x54","5lh","5cf","a87","hpj","n7j","6zt","z7h","jzm","s42");
$charList = array("X","U","X","S","4","V","A","W","J","8");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
