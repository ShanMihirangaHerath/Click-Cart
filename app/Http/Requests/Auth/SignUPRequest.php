<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignUPRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'f_name'=>'required|max:50',
            'l_name'=>'required|max:50',
            'email'=>'required|email|unique:users,email|max:255',
            'password'=>[
                'required',
                'confirmed',
                Password::min(8)
                    ->letters()
                    ->symbols()
            ],
        ];
    }
}