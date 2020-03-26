<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GoldProvider extends Controller
{
    private $goldCourses,$coursesLength;
    private function GetTheCourse(){
        $collector = file_get_contents("https://api.nbp.pl/api/cenyzlota/last/50?format=json");
        $json_decoder = json_decode($collector);
        $this->coursesLength = count($json_decoder[0]);
        return json_encode($json_decoder);
    }
    public function PassTheCourse(){
        $this->goldCourses = $this->GetTheCourse();
        $passingData = [
            "courses" => $this->goldCourses,
            "length" => $this->coursesLength
        ];
        return view("gold")->with($passingData);
    }
}
