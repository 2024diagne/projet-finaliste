<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    
    public function register(Request $request)
    {
        $fields=$request->validate([
            'name'=>'required|max:255',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed',

        ]);
        $user = User::create($fields);
        $token = $user->createToken($request->name);

        return [
            'user'=>$user,
            'token'=>$token->plainTextToken
        ] ;
    }
    
    public function login(Request $request)
    {
        $request->validate([
            'email'=>'required|email|exists:users',
            'password'=>'required|confirmed'

        ]);
        $user = User::where('email',$request->email)->first();
        if (!$user || !Hash::check($request->password,$user->password)) {
            return [
                'errors'=> [ 'email'  =>['The provided credentials are incorrect.']]
                
            ];
        }
        $token = $user->createToken($user->name);

        return [
            'user'=>$user,
            'token'=>$token->plainTextToken
        ] ;
        
    }
    public function logout(Request $request)

    {
        $request->user()->tokens()->delete();
        return [
            'message'=>'You are logged out.',
        ];

    }/**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
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
