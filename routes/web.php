<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return inertia('Home', ['team' => "ABC Team"]);
});

Route::inertia('/about', 'About/About');

