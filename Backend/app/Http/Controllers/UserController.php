<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getUser()
    {
        $user = Auth::user();
        return response()->json([
            'user' => $user
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {
        $validateData = Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required',
            'email' => 'required|unique:users,email|email',
            'role_id' => 'exists:roles,id'
        ]);

        if ($validateData->fails()) {
            return response()->json([
                'message' => 'Invalid Field'
            ], 401);
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role_id' => 2
        ]);

        return response()->json([
            'message' => 'Register Success'
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function login(Request $request)
    {
        $validateData = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($validateData->fails()) {
            return response()->json([
                'message' => 'Invalid Field'
            ], 401);
        }

        $email = User::where('email', $request->email)->first();
        if (Auth::attempt($request->only('email', 'password'))) {
            $token = $email->createToken('access_token')->plainTextToken;
            return response()->json([
                'message' => 'Login Success',
                'token' => $token
            ], 200);
        }

        return response()->json([
            'message' => 'Email/Password Invalid Credentials'
        ], 401);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function logout(Request $request)
    {
        $token = PersonalAccessToken::findToken($request->bearerToken());
        if (!$token) {
            return response()->json([
                'message' => 'Invalid Field'
            ], 401);
        }
        $token->delete();
        return response()->json([
            'message' => 'Logout Success'
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
