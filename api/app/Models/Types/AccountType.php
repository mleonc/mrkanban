<?php

namespace App\Models\Type;

use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Type as GraphQLType;

class AccountType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Account',
        'description' => 'An account'
    ];

    // protected $inputObject = true;

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::id()),
                'description' => 'The id of the account'
            ],
            'user_id' => [
                'type' => Type::nonNull(Type::id()),
                'description' => 'The user foreign key'
            ],
            'username' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The username'
            ],
        ];
    }
}
