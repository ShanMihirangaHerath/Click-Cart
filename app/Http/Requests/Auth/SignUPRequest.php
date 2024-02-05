<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

use function Laravel\Prompts\password;

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
     * @return array<string, string>
     */
    public function attributes(): array
    {
        return [
            'f_name' => 'First Name',
            'l_name' => 'Last Name',
            'email' => 'Email Address'
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'f_name' => 'required|min:1|max:50',
            'l_name' => 'required|min:1|max:50',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => [
                'required',
                Password::min(8)
                    ->max(255)
                    ->letters()
                    ->symbols()
            ],
            'confirmPassword' => 'required|same:password',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'f_name' => $this->firstName,
            'l_name' => $this->lastName,
        ]);
    }
}