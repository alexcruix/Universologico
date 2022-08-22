<?php

// Users data
$imSettings['access']['users'] = array(
	'alexcs@outlook.com.br' => array(
		'id' => 'fzh5isos',
		'groups' => array('teda1c5w'),
		'firstname' => 'Alex',
		'lastname' => '',
		'password' => '$2a$11$2pFGU6AeNENe6HC6Za9XiOoboAjkL0CqB/.lbzbkCFj7caKnHHVge',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => 'home.php'
	),
	'alexdecsantos@outlook.com' => array(
		'id' => '7g7ssut8',
		'groups' => array('teda1c5w'),
		'firstname' => 'Lilian',
		'lastname' => '',
		'password' => '$2a$11$uNB0.iqFSeanAvbYTgH2LuaP5/F.bvbK5O73uIJz5440rzdOS7dWu',
		'crypt_encoding' => 'csharp_bcrypt',
		'db_stored' => false,
		'page' => false
	)
);

// Admins list
$imSettings['access']['admins'] = array('fzh5isos', '7g7ssut8');

// Page/Users permissions
$imSettings['access']['pages'] = array();

// PASSWORD CRYPT

$imSettings['access']['password_crypt'] = array(
	'encoding_id' => 'php_default',
	'encodings' => array(
		'no_crypt' => array(
			'encode' => function ($pwd) { return $pwd; },
			'check' => function ($input, $encoded) { return $input == $encoded; }
		),
		'php_default' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_DEFAULT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		),
		'csharp_bcrypt' => array(
			'encode' => function ($pwd) { return password_hash($pwd, PASSWORD_BCRYPT); },
			'check' => function ($input, $encoded) { return password_verify($input, $encoded); }
		)
	)
);

// End of file access.inc.php