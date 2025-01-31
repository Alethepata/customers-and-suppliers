<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\PersonalAccessTokens;
use App\Models\Review;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Requests\Auth\LoginRequest;

class UserController extends Controller
{
    // REGISTER
    public function register(RegisterRequest $request){
        $form_data = $request->all();

        $new_user = new User();
        $new_user->fill($form_data);

        $new_user->password = Hash::make($form_data['password']);

        $new_user->save();

        $message = 'Utente creato correttamente';

        return response()->json($message);
    }

    // LOGIN
    public function login(LoginRequest $request){
        $form_data = $request->all();

        if(!Auth::attempt($form_data)){
            return response()->json('Credenziali non valide');
        }else{
            $user = Auth::user();
            $token = $user->createToken('auth-token')->plainTextToken;

            $new_personal_token = new PersonalAccessTokens();
            $new_personal_token->token = $token;

            $new_personal_token->save;

            return response()->json($token);
        };

    }

    // LOGOUT
    public function logout(Request $request){
        $user = $request->user()->currentAccessToken()->delete();

        return response()->json('logout');
    }

    // DATA RECOVERY
    public function user(Request $request){
        $user = $request->user();

        return response()->json($user);
    }

    // SHOW ALL USER
    public function index(){
        $users = User::where('created_by_user_id', Auth::id())->get();

        return response()->json($users);
    }

    // ADD NEW USER
    public function store(Request $request){
        $new_user = new User;

        $form_data = $request->all();
        $new_user->fill($form_data);
        $new_user->created_by_user_id = Auth::id();
        $new_user->password = Hash::make($form_data['password']);

        $new_user->save();

        return response()->json($new_user);
    }

    // EDIT USER
    public function update(Request $request, User $id){
        $form_data = $request->all();

        $id->password = Hash::make($form_data['password']);
        $id->update($form_data);

        return response()->json($id);
    }

    // DELETE USER
    public function delete(User $id){
        $id->delete();

        return response()->json('Eliminato correttamente');
    }

    // SHOW ONLY THE USER WHO IS A PROVIDER
    public function provider()
    {
        $providers = User::where('is_supplier', true)->get();
        return response()->json($providers);
    }

    // SHOW A PROVIDER IN DETAIL
    public function showProvider($id)
    {
        $reviews = Review::where('provider_id', $id)->get();

        return response()->json( $reviews);
    }
}

// 1|JPQ8CLoDQClln3OHNdPjH2r3YMHs8W679yjsRITj0fc46b90

// 2|aLKTXfet6OMaP6lFybuM0tLHBqAlhHM4Q4e56PRNe4690abd
