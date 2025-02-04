<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\User;
use App\Models\PersonalAccessTokens;
use App\Models\Review;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

use App\Http\Requests\Auth\AddRequest;
use App\Http\Requests\Auth\LoginRequest;

class UserController extends Controller
{
    // REGISTER
    public function register(AddRequest $request){
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

        return response()->json('Logout');
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
    public function store(AddRequest $request){
        $new_user = new User;

        $form_data = $request->all();
        $new_user->fill($form_data);
        $new_user->created_by_user_id = Auth::id();
        $new_user->password = Hash::make($form_data['password']);

        $new_user->save();

        return response()->json('Utente creato con sucesso');
    }

    // EDIT USER
    public function update(AddRequest $request, User $id){
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
        $providers = User::where('is_provider', true)->get();

        return response()->json($providers);
    }

    // SHOW A PROVIDER IN DETAIL
    public function showProvider($id)
    {
        $reviews = Review::where('provider_id', $id)->get();

        return response()->json($reviews);
    }
}
