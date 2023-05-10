<?php

namespace QUADLAYERS;

final class Manager {


	protected static $_instance;

  public $theme;
  public $customizer;
  public $gutengerg;

	public function __construct() {
	  spl_autoload_register( array( $this, 'autoload' ) );

	  $this->theme      = Theme\Module::instance();
	  $this->customizer = Customize\Module::instance();
	  $this->gutenberg  = Gutenberg\Module::instance();
	}

	public function autoload( $class_to_load ) {
		if ( 0 !== strpos( $class_to_load, __NAMESPACE__ ) ) {
		  return;
		}

		if ( ! class_exists( $class_to_load ) ) {

		  $class_file = $this->class_file( $class_to_load );

			if ( is_readable( $class_file ) ) {
			  include_once $class_file;
			} else {
			  error_log( $class_file );
			}
		}
	}

	public function class_file( $class_name ) {
	   $filename = strtolower( preg_replace( [ '/^' . __NAMESPACE__ . '\\\/', '/([a-z])([A-Z])/', '/_/', '/\\\/' ], [ '', '$1-$2', '-', DIRECTORY_SEPARATOR ], $class_name ) );
	  return QUADLAYERS_THEME_DIR . 'inc/' . $filename . '.php';
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}
}

function QUADLAYERS() {
   return Manager::instance();
}

QUADLAYERS();
