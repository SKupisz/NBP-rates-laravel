<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
    return view("welcome");
});
Route::get("/courses","DataProvider@sendDataToPublic");
Route::get("/gold","GoldProvider@PassTheCourse");
Route::get("/contact",function(){
    return view("contact");
});
