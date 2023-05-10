<?php

namespace QUADLAYERS\Customize\Classes;

use QUADLAYERS\Customize\Config;

class Options {


	protected static $_instance;
  protected $options = [];

	public function __construct() {
	  $this->register_options();
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}

	public function register_options() {
	  $options = array(
		  'general',
	  );

		foreach ( $options as $option_name ) {
		  $this->register_option( $option_name );
		}
	}

	protected function register_option( $id, $args = array() ) {
		if ( ! isset( $this->options[ $id ] ) ) {

		  $class_name = ucfirst( $id );

		  $class_name = '\\QUADLAYERS\\Customize\\Classes\\options\\' . $class_name;

		  $this->options[ $id ] = new $class_name();
		}
	}

	public function get_options() {
	   return $this->options;
	}
}
