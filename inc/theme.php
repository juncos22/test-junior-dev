<?php

namespace QUADLAYERS;

final class Theme {


	protected static $_instance;
  public $modules_manager;

	private function __construct() {
	  spl_autoload_register( array( $this, 'autoload' ) );

	  new Manager();
	}

	public function autoload( $class_to_load ) {
		if ( 0 !== strpos( $class_to_load, __NAMESPACE__ ) ) {
		  return;
		}

		if ( ! class_exists( $class_to_load ) ) {
		  $filename = strtolower( preg_replace( [ '/^' . __NAMESPACE__ . '\\\/', '/([a-z])([A-Z])/', '/_/', '/\\\/' ], [ '', '$1-$2', '-', DIRECTORY_SEPARATOR ], $class_to_load ) );
		  $filename = QUADLAYERS_THEME_DIR . 'inc/' . $filename . '.php';
			if ( is_readable( $filename ) ) {
			  include_once $filename;
			} else {
			  error_log( $filename );
			}
		}
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}

}

Theme::instance();
