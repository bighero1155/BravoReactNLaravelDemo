<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Gender;

class GenderController extends Controller
{
    public function loadGenders()
    {
        $genders = Gender::all();
        return response()->json([
            'genders' => $genders
        ], 200);
    }

    public function storeGender(Request $request)
    {
        $validated = $request->validate([
            'gender' => ['required', 'min:4', 'max:10']
        ]);
        Gender::create([
            'gender' => $validated['gender']
        ]);
        return response()->json([
            'message' => 'Gender Succesfully Added'
        ], 200);
    }
}
