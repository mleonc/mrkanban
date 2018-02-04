<?php

namespace App\Exceptions;

use Exception;

class HttpException extends Exception 
{
	public function getErrorCode() 
	{
		return static::$_error;
	}
}