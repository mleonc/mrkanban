<?php

namespace App\Models\Base;

use Illuminate\Database\Eloquent\Model;

class BaseUser extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'code', 
        'name',
        'firstname',
        'lastname',
        'email',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $hidden = [
        'code', 
    ];

    public function getCode() 
    {
        return $this->code;
    }

    public function getName() 
    {
        return $this->name;
    }

    public function getFirstname() 
    {
        return $this->firstname;
    }

    public function getLastname() 
    {
        return $this->lastname;
    }

    public function getEmail() 
    {
        return $this->email;
    }

    public function setCode($value) 
    {
        $this->code = $value;
        return $this;
    }

    public function setName($value) 
    {
        $this->name = $value;
        return $this;
    }

    public function setFirstname($value) 
    {
        $this->firstname = $value;
        return $this;
    }

    public function setLastname($value) 
    {
        $this->lastname = $value;
        return $this;
    }

    public function setEmail($value) 
    {
        $this->email = $value;
        return $this;
    }
}
