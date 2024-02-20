<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class AttributeValue extends Model
{
    use HasFactory;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    protected $fillable = [
        'value',
    ];

    public function attribute(): BelongsToMany
    {
        return $this->belongsToMany(Attribute::class);
    }

    public function inventory(): BelongsToMany
    {
        // return $this->belongsToMany(Inventory::class);
        return $this->belongsToMany(Inventory::class, 'inventory_attribute_value');
    }
}
