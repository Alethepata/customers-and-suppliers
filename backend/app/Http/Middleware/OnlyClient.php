<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class OnlyClient
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = User::find(Auth::id());

        if($user->is_provider == false){
            return $next($request);
        }else{
            return response()->json('Non puoi lasciare recensioni');
        }
    }
}
