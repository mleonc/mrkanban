<?php

namespace App\Models;

use App\Models\Base\BaseAccount;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;

class Account extends BaseAccount
{
    use AuthenticableTrait;

    protected function username() {
        return 'username';
    }

    public function findForPassport($username) {
        return self::where(['username' => $username])->first();
    }
}
