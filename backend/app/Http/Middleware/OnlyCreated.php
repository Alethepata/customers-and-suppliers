<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class OnlyCreated
{
    public function handle(Request $request, Closure $next): Response
    {
        $id = substr($_SERVER['PATH_INFO'], 11);
        $user = User::find($id);

        $form_data = $request->all();

        if(Auth::id() == $user->created_by_user_id){
            return $next($request);
        }else{
            return response()->json('Error 404');
        }
    }
}
