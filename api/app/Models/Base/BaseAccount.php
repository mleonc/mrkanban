<?php

namespace App\Models\Base;

use Illuminate\Database\Eloquent\Model;

class BaseAccount extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password'
    ];

    public function getUserId() 
    {
        return $this->user_id;
    }

    public function getRoleId() 
    {
        return $this->role_id;
    }

    public function getUsername() 
    {
        return $this->username;
    }

    public function getPassword() 
    {
        return $this->password;
    }

    public function setUserId($value)
    {
        $this->user_id = $value;
        return $this;
    }

    public function setRoleId($value)
    {
        $this->role_id = $value;
        return $this;
    }

    public function setUsername($value)
    {
        $this->username = $value;
        return $this;
    }

    public function setPassword($value)
    {
        $this->password = $value;
        return $this;
    }
}
