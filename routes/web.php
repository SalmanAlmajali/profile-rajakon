<?php

use App\Http\Controllers\KontakController;
use App\Http\Controllers\GalleryController;
use App\Models\Hero;
use Illuminate\Support\Facades\Storage;
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

    // Tambahkan ini untuk gallery
    $galleries = \App\Models\Gallery::where('is_active', true)
        ->orderBy('order')
        ->get()
        ->map(function ($item) {
            return [
                'id' => $item->id,
                'image' => \Illuminate\Support\Facades\Storage::url($item->image),
                'title' => $item->title ?? null,
                'year' => $item->year ?? null,
            ];
        });

    return Inertia::render('Index', [
        'heroes' => $heroes,
        'galleries' => $galleries,
    ]);
});

Route::post('/contact-message', [KontakController::class, 'store'])
    ->name('contact.store')
    ->middleware('throttle:10,1');


// Route untuk halaman admin gallery (sementara tanpa auth)
Route::prefix('admin')->group(function () {
    Route::get('/gallery', [GalleryController::class, 'adminIndex'])->name('admin.gallery.index');
    Route::post('/gallery', [GalleryController::class, 'store'])->name('admin.gallery.store');
    Route::delete('/gallery/{id}', [GalleryController::class, 'destroy'])->name('admin.gallery.destroy');
});