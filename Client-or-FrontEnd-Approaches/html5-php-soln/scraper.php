<?php
	//header('Access-Control-Allow-Origin: *');

    $city = $_GET['city'];
    $city=str_replace(" ", "", $city);

    $contents = file_get_contents("https://www.weather-forecast.com/locations/$city/forecasts/latest");

    preg_match('/b-forecast__table-description-content"><span class="phrase">(.*?)</s', $contents, $matches);

    print_r($matches[1]);
?>
