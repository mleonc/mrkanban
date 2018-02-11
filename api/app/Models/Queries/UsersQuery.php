<?php

namespace App\Models\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use App\Models\User;

class UsersQuery extends Query
{
    protected $attributes = [
        'name' => 'users'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('User'));
    }

    public function args()
    {
        return [
            'id'        => ['name' => 'id',         'type' => Type::id()],
            'code'      => ['name' => 'code',       'type' => Type::string()],
            'name'      => ['name' => 'name',       'type' => Type::string()],
            'firstname' => ['name' => 'firstname',  'type' => Type::string()],
            'lastname'  => ['name' => 'lastname',   'type' => Type::string()],
            'email'     => ['name' => 'email',      'type' => Type::string()],
        ];
    }

    public function resolve($root, $args)
    {
        if (isset($args['id'])) {
            return User::where('id' , $args['id'])->get();
        }
        if (is_array($args)) {
            return User::where($args)->get();
        } 
        return User::all();
    }
}
