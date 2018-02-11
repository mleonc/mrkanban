<?php

namespace App\Models\Type;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;
use App\Models\Account;

class UserType extends GraphQLType
{
    protected $attributes = [
        'name' => 'User',
        'description' => 'A user'
    ];

    // protected $inputObject = true;

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::id()),
                'description' => 'The id of the user'
            ],
            'code' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The code of user'
            ],
            'name' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The name of user'
            ],
            'firstname' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The firstname of user'
            ],
            'lastname' => [
                'type' => Type::string(),
                'description' => 'The lastname of user'
            ],
            'email' => [
                'type' => Type::string(),
                'description' => 'The email of user'
            ],
            'account' => [
                'type' => GraphQL::type('Account'),
                'args' => [
                    'username' => [
                        'type' => Type::string(),
                        'name' => 'username'
                    ],
                ],
                'resolve' => function ($root, $args) {
                    return Account::where(['user_id' => $root->getKey()])->firstOrFail();
                }
            ],
        ];
    }
}
