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
}
