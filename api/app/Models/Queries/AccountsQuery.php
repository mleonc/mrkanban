<?php

namespace App\Models\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Query;
use App\Models\Account;

class AccountsQuery extends Query
{
    protected $attributes = [
        'name' => 'accounts'
    ];

    public function type()
    {
        return Type::listOf(GraphQL::type('Account'));
    }

    public function args()
    {
        return [
            'id'        => ['name' => 'id',         'type' => Type::id()],
            'username'  => ['name' => 'username',   'type' => Type::string()],
        ];
    }

    public function resolve($root, $args)
    {
        if (isset($args['id'])) {
            return Account::where('id' , $args['id'])->get();
        }
        if (is_array($args)) {
            return Account::where($args)->get();
        } 
        return Account::all();
    }
}
