<?php
include_once('../res/x5engine.php');
$db = getDbData('cjzf2sva');
if ($db === false) { die('{ "result": "error" }'); }
$analytics = new Analytics(ImDb::from_db_data($db), 'wp_users');
$analytics->visit($_POST['uid'], $_POST['url'], $_POST['lang']);
echo '{ "result": "ok" }';
