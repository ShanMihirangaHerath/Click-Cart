<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignInRequest;
use App\Http\Resources\Auth\AuthResource;
use Illuminate\Support\Facades\Auth;

class SignInController extends Controller
{
    public function signin(SignInRequest $request)
    {
        $credentials = $request->safe()->except(['remember']);
        $remember = $request->safe()->only(['remember'])['remember'];

        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect;',
            ], 422);
        };

        $user = Auth::user();

        if ($remember) {
            $expiration_time = now()->addMonth();
        } else {
            $expiration_time = now()->addDay();
        }

        $token = $user->createToken('user', ['*'], $expiration_time);
        return new AuthResource($user, $token);
    }
}