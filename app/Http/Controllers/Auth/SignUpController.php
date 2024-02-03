<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignUPRequest;
use App\Models\User;
use Illuminate\Http\Request;

class SignUpController extends Controller
{
    public function signup(SignUPRequest $request)
    {
        $data = $request->validated();

        /** @var User $user */
        $user = User::create(
            [
                'email' => $data['email'],
                'f_name'=>$data['f_name'],
                'l_name0'=>$data['l_name'],
                'password' => bcrypt($data['password']),
            ]
        );
        
        $token = $user->createToken('main')->plainTextToken;
        
        return response(compact('user', 'token'), 200);
    }
}