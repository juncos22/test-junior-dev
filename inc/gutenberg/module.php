<?php

namespace QUADLAYERS\Gutenberg;

class Module {

	protected static $_instance;

	public function __construct() {
	  Classes\Assets::instance();
	  Classes\Blocks::instance();
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}

}
