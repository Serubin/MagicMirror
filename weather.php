<?php
	require_once 'weather_config.php';
	if(!isset($_REQUEST['action']))
		return;
	if(!isset($_REQUEST['id']))
		return;
	if(!isset($_REQUEST['units']))
		return;
	if(!isset($_REQUEST['lang']))
		return;
	echo file_get_contents('http://api.openweathermap.org/data/2.5/' . $_REQUEST['action'] .'?id=' . $_REQUEST['id'] . '&units=' . $_REQUEST['units'] . '&lang=' . $_REQUEST['lang'] . '&APPID=' . $weather_api_key);

	exit
?>
