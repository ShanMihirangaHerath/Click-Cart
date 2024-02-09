<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class ProductImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'url',
        'alt_text',
        'featured',
    ];

    public function imageable(): MorphTo
    {
        return $this->morphTo();
    }
}
