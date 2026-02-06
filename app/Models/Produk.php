<?php

namespace App\Models;

use App\Traits\DeletesUploadedFile;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Produk extends Model
{
    use HasUuids, DeletesUploadedFile;

    protected $casts = [
        'spesifikasi' => 'array',
        'media' => 'array',
        'link_produk' => 'array',
    ];

    public function testimonis(): HasMany
    {
        return $this->hasMany(Testimoni::class, 'produk_id');
    }
    
    protected function uploadAttributes(): array
    {
        return ['media'];
    }
}
