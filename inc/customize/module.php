<?php

namespace QUADLAYERS\Customize;

class Module {


	protected static $_instance;

	public function __construct() {
	   Classes\Register::instance();
	  Classes\Assets::instance();
	  Classes\Options::instance();
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}
}
