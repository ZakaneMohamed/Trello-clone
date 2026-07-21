<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class Reglog extends Controller
{
    public function register(Request $request)
    {
            DB::table('accounts')->insert([
                'name' => $request->input('Name'),
                'last_name' => $request->input('LastName'),
                'email' => $request->input('Email'),
                'phone_number' => $request->input('PhoneNumber'),
                'password' => $request->input('Password'),
                'created_at' => now(),
            ]);
            return response()->json(['message' => 'User registered successfully']);
    }
     public function login(Request $request)
    {
        $email = $request->input('Email');
        $password = $request->input('Password');

        $user = DB::table('accounts')->where('email', $email)->first();
        if ($user && $user->password === $password) {
            // User authenticated successfully
            return response()->json(['message' => 'Login successful']);
        } else {
            // Invalid credentials
            return response()->json(['message' => 'Invalid email or password'], 401);
        }
    }
}