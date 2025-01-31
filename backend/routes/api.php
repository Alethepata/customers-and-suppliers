<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\ReviewController;

use App\Http\Middleware\OnlyCreated;
use App\Http\Middleware\OnlyClient;

use App\Models\User;

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::middleware('auth:sanctum')->group(function(){
    Route::get('user', [UserController::class, 'user']);
    Route::post('logout', [UserController::class, 'logout']);
});

Route::middleware(['auth:sanctum', 'verified:sanctum'])->group(function(){
    Route::get('users', [UserController::class, 'index']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users/{id}', [UserController::class, 'update'])->middleware(OnlyCreated::class);
    Route::delete('users/{id}', [UserController::class, 'delete']);

    Route::get('providers', [UserController::class, 'provider']);
    Route::post('reviews', [ReviewController::class, 'store'])->middleware(OnlyClient::class);
    Route::get('providers/{id}/reviews', [UserController::class, 'showProvider']);
});
