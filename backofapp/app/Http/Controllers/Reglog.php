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

        return response()->json([
            'message' => 'Account created successfully'
        ]);
    }

    public function login(Request $request)
    {
        $account = DB::table('accounts')
            ->where('email', $request->input('email'))
            ->where('password', $request->input('password'))
            ->first();

        if ($account) {
            return response()->json([
                'check'=> true,
                'message' => 'Connexion réussie'
            ]);
        } else {
            return response()->json([
                'check'=> false,
                'message' => 'Connexion échouée'
            ]);
        }
    }
}