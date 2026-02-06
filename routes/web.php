<?php

use App\Http\Controllers\KontakController;
use App\Models\Hero;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $heroes = Hero::where('status', true)
        ->latest()
        ->get()
        ->map(function ($hero) {
            if ($hero->hero_image === null) {
                return $hero;
            }
            
            $hero->hero_image = (str_starts_with($hero->hero_image, 'http://') || str_starts_with($hero->hero_image, 'https://'))
                ? $hero->hero_image
                : config('app.url') . "/storage/$hero->hero_image";
            return $hero;
        });
    return Inertia::render('Index', [
        'heroes' => $heroes,
    ]);
});

Route::post('/contact-message', [KontakController::class, 'store'])
    ->name('contact.store')
    ->middleware('throttle:10,1');
