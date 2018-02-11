<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('task_id');
            $table->unsignedInteger('role_id');
            $table->timestamps();
            $table->foreign('user_id', 'FK_USERS_TASKS_USER_ID')->references('id')->on('users');
            $table->foreign('task_id', 'FK_USERS_TASKS_TASK_ID')->references('id')->on('tasks');
            $table->foreign('role_id', 'FK_USERS_TASKS_ROLE_ID')->references('id')->on('roles');
            $table->unique(['user_id', 'task_id'], 'UNIQUE_USERS_TASKS');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_tasks');
    }
}
