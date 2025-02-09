<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VideoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [UserController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);
Route::post('/message/add', [MessageController::class, 'store']);
Route::get('/user/article', [ArticleController::class, 'index']);
Route::get('/user/video', [VideoController::class, 'index']);

Route::middleware('auth-token')->group(function() {
    Route::delete('/logout', [UserController::class, 'logout']);
    Route::get('/getuser', [UserController::class, 'getUser']);

    Route::middleware('role:1')->group(function() {
        Route::get('/article', [ArticleController::class, 'index']);
        Route::post('/article', [ArticleController::class, 'store']);
        Route::get('/article/{id}', [ArticleController::class, 'show']);
        Route::post('/article/{id}', [ArticleController::class, 'update']);
        Route::delete('/article/{id}', [ArticleController::class, 'destroy']);

        Route::get('/message', [MessageController::class, 'index']);

        Route::get('/video', [VideoController::class, 'index']);
        Route::post('/video', [VideoController::class, 'store']);
        Route::get('/video/{id}', [VideoController::class, 'show']);
        Route::put('/video/{id}', [VideoController::class, 'update']);
        Route::delete('/video/{id}', [VideoController::class, 'destroy']);
    });

});