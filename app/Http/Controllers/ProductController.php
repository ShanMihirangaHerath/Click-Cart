<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\StorePostRequest;
use App\Http\Requests\Products\StoreProductRequest;
use App\Models\Products\Inventory;
use App\Models\Products\Product;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(StorePostRequest $request)
    {
        $validated = $request->all();

        return response([]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $validated = $request->validated();

        /**  @var Product $product */
        $product = Product::create([...$validated, "user_id" => 1]);

        $inventories = $validated['inventories'];

        /**  @var Inventory[] $inventories_data */
        $inventories_data = $product->inventories()->createMany($inventories);

        return response()->json($inventories_data, 201);
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
