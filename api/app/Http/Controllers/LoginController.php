<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Exceptions\NotFoundException;
use App\Exceptions\BadRequestException;
use Illuminate\Support\Facades\Route;

use App\Models\Account;

class LoginController extends Controller
{
	protected $username = 'username';

	public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function login(Request $request)
    {
        file_put_contents("/var/tmp/login", $request->username."\n", FILE_APPEND);

    	$rules = [
    		'username'	=> 'required',
    		'password'	=> 'required|alphaNum|min:3',
		];

		$validator = Validator::make($request->all(), $rules);

		if ($validator->fails()) {
			throw new BadRequestException();
		}

        $account = Account::select('user_id')->where(['username' => $request->username])->first();

        $request->request->add([
            'username' => $request->username,
            'password' => $request->password,
            'grant_type' => 'password',
            'client_id' => env('PASSWORD_CLIENT_ID'),
            'client_secret' => env('PASSWORD_CLIENT_SECRET'),
        ]);

        $proxy = Request::create(
            'oauth/token',
            'POST'
        );

        $oauth = Route::dispatch($proxy);
        $result = json_decode($oauth->content(), true);
        if (isset($result['error'])) {
            throw new BadRequestException(json_encode($result));
        }

        $result['user_id'] = $account->getUserId();
        return $result;
    }

    protected function login2(Request $request) {
        print_r('aquiiii');
    }
}
