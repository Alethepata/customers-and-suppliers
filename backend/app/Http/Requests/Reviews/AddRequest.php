<?php

namespace App\Http\Requests\Reviews;

use Illuminate\Foundation\Http\FormRequest;

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
            'rating' => ['required', 'numeric',  'min:0', 'max:5'],
            'provider_id' => ['required'],
            'comment' => ['string'],
        ];
    }

    public function messages(): array
    {
        return [
            'rating.required' => 'Inserire il voto',
            'rating.min' => 'Il voto minimo è :min ',
            'rating.max' => 'Il voto massimo è :max ',
            'provider_id.required' => 'Inserire il fornitore',
        ];
    }
}
