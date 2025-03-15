<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TestimonialController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('/api')->controller(HomeController::class)->group(function () {
    
Route::get('/testimonials', [TestimonialController::class, 'index']);



});


