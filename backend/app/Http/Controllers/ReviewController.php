<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Review;
use App\Models\User;

use Illuminate\Support\Facades\Auth;

use App\Http\Requests\Reviews\AddRequest;


class ReviewController extends Controller
{
    public function store(AddRequest $request)
    {
        $new_review = new Review;

        $form_data = $request->all();

        $new_review->fill($form_data);
        $new_review->user_id = Auth::id();
        $new_review->save();

        return response()->json($new_review);
    }

}
