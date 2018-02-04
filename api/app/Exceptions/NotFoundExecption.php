<?php

namespace App\Exceptions;

class NotFoundException extends HttpException 
{
	static public $_error = 404;
}