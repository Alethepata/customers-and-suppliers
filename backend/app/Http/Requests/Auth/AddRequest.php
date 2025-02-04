<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\User;

class AddRequest extends FormRequest
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
            'name' => ['required', 'string', 'min:3', 'max:100'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'password' => ['required', 'string', 'min:8'],
            'is_provider' => ['required']
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Inserire il nome',
            'name.min' => 'Il nome deve avere minimo :min caratteri',
            'name.max' => 'Il nome deve avere massimo :max caratteri',

            'email.required' => 'Inserire l\'email',
            'email.lowercase' => 'L\'email deve essere scritta tutta in minuscolo',
            'email.unique' => 'L\'indirizzo email esiste',
            'email.max' => 'L\'email deve avere massimo :max lettere ',
            'email.email' => 'L\'email deve avere un indirizzo valido ',

            'password.required' => 'Inserire la password',
            'password.min' => 'La password deve avere almeno :min caratteri',

            'is_provider.required' => 'Inserire tipologia',
        ];
    }
}
