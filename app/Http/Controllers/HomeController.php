<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Partner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galleries = Gallery::orderBy('order')->get();

        $mapped = $galleries->map(function ($item) {
            return [
                'id' => $item->id,
                'image' => Storage::url($item->image),
                'title' => $item->title ?? null,
                'year' => $item->year ?? null,
            ];
        });

        $partners = Partner::where('is_active', true)
            ->orderBy('order')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'name' => $item->name,
                    'logo' => Storage::url($item->logo),
                ];
            });

        return Inertia::render('Index', [
            'galleries' => $galleries,
            'partners' => $partners,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
