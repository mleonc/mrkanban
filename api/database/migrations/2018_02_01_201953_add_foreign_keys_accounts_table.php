<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeysAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('accounts', function (Blueprint $table) {
            $table->foreign('user_id', 'FK_ACCOUNTS_USER_ID')->references('id')->on('users');
            $table->foreign('role_id', 'FK_ACCOUNTS_ROLE_ID')->references('id')->on('roles');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('accounts', function (Blueprint $table) {
           $table->dropForeign('FK_ACCOUNTS_USER_ID');
           $table->dropForeign('FK_ACCOUNTS_ROLE_ID');
        });
    }
}
