<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
        });

        Schema::create('product_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('slug', 150)->unique();
            $table->text('description');
            $table->timestampS();
            $table->foreignId('product_type_id')->constrained();
            $table->foreignId('user_id')->constrained();

            $table->index('product_type_id');
            $table->index('user_id');
        });

        Schema::create('category_products', function (Blueprint $table) {
            $table->foreignId('category_id')->constrained();
            $table->foreignId('product_id')->constrained();
        });

        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('public_id', 25)->unique();
            $table->integer('quantity');
            $table->double('price', 8, 2);
            $table->integer('status');
            $table->boolean('is_default');
            $table->timestamps();
            $table->foreignId('product_id')->constrained();

            $table->index(['product_id']);
        });

        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->string('alt_text', 100);
            $table->boolean('featured');
            $table->morphs('imageable');
        });

        Schema::create('attributes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('note', 255);
            $table->foreignId('product_type_id')->constrained();
        });

        Schema::create('attribute_values', function (Blueprint $table) {
            $table->id();
            $table->string('value');
        });

        Schema::create('attribute_attribute_value', function (Blueprint $table) {
            $table->foreignId('attribute_value_id')->constrained();
            $table->foreignId('attribute_id')->constrained();
        });

        Schema::create('inventory_attribute_value', function (Blueprint $table) {
            $table->foreignId('inventory_id')->constrained();
            $table->foreignId('attribute_value_id')->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventory_attribute_value');
        Schema::dropIfExists('attribute_attribute_value');
        Schema::dropIfExists('attribute_values');
        Schema::dropIfExists('attriibutes');
        Schema::dropIfExists('product_images');
        Schema::dropIfExists('inventories');
        Schema::dropIfExists('category_products');
        Schema::dropIfExists('products'); 
        Schema::dropIfExists('product_types');
        Schema::dropIfExists('categories');
    }
};