<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
  public function create(request $request) {
    $username = $request->input("username");
    $emailAddress = $request->input("email-address");
    $password = $request->input("password");

    Login::Create([
      "name" => $username,
      "email" => $emailAddress,
      "password" => $password
    ]);

    return view("new_user");
  }
}
