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
            $table->string('name');
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name' , 230);
            $table->string('slug')->unique();
            $table->string('description');
            $table->boolean('featured')->default(false);
            $table->integer('status');
            $table->timestamps();
            $table->foreignId('product_type_id')->constrained('product_types');
        });

        Schema::create('peoduct_has_categories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products');
            $table->foreignId('category_id')->constrained('categories');
        });

        Schema::create('inventories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150);
            $table->string('sku', 25)->unique();
            $table->integer('quantity');
            $table->integer('status');
            $table->double('price', 8, 2);
            $table->timestamps();
        });

        Schema::create('product_images', function (Blueprint $table) {
            $table->id();
            $table->string('url');
            $table->text('alt_text');
            $table->boolean('featured')->default(false);
            $table->foreignId('product_id')->nullable()->constrained('products');
            $table->foreignId('inventory_id')->nullable()->constrained('inventories');
        });

        Schema::create('attributes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
        });
        
        Schema::create('product_type_has_attributes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_type_id')->constrained('product_types');
            $table->foreignId('attribute_id')->constrained('attributes');
        });

        Schema::create('attribute_values', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->foreignId('attribute_id')->constrained('attributes');
        });

        Schema::create('inventory_has_attribute_values', function (Blueprint $table) {
            $table->id();
            $table->foreignId('inventory_id')->constrained('inventories');
            $table->foreignId('attribute_value_id')->constrained('attribute_values');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventory_has_attribute_values');
        Schema::dropIfExists('attribute_values');
        Schema::dropIfExists('product_type_has_attributes');
        Schema::dropIfExists('attributes');
        Schema::dropIfExists('product_images');
        Schema::dropIfExists('inventories');
        Schema::dropIfExists('peoduct_has_categories');
        Schema::dropIfExists('products');
        Schema::dropIfExists('product_types');
        Schema::dropIfExists('categories');
    }
};