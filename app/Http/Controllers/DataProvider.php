<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataProvider extends Controller
{
    private $currencyRows,$length;
    private function getTheData(){
        $getTheTable = file_get_contents("https://api.nbp.pl/api/exchangerates/tables/C/?format=json");
        $json = json_decode($getTheTable);
        $this->length = count($json[0]->rates);
        return $json[0]->rates;
    }
    public function sendDataToPublic(){
        $this->currencyRows = $this->getTheData();
        $data = [
            "currencyData" => $this->currencyRows,
            "length" => $this->length
        ];
        return view("main")->with($data);
    }
}
