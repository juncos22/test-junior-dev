<?php

namespace QUADLAYERS\Theme\Classes;

use QUADLAYERS\Theme\Config;

class Settings {

	protected static $_instance;
  public $settings = [];
  public $store    = [];
  public $test     = [];

	public function __construct() {
	   // add_action('init', array($this, 'register_settings'));
	  // add_action('wp_loaded', array($this, 'quadlayers_feature_propagation'));
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}
}
