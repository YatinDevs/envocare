<?php
use Illuminate\Support\Facades\Route;

Route::get('/test', function () {
    return 'API is working!';
});

Route::middleware('auth:sanctum')->get('/user', function (\Illuminate\Http\Request $request) {
    return $request->user();
});
