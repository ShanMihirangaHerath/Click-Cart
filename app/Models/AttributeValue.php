<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class AttributeValue extends Model
{
    use HasFactory;

    protected $fillable = [
        'value',
    ];

    public function attribute(): BelongsToMany
    {
        return $this->belongsToMany(Attribute::class);
    }

    public function inventory(): BelongsToMany
    {
        return $this->belongsToMany(Inventory::class);
    }
}
