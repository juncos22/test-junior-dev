<?php

namespace QUADLAYERS\Theme;

use QUADLAYERS\Theme\Includes\Walker;

class Module {


	protected static $_instance;

  public $support;
  public $helper;
  public $breadcrumbs;
  public $settings;

	public function __construct() {
	   $this->support = Classes\Support::instance();
	  $this->helper   = Classes\Helper::instance();
	  $this->settings = Classes\Settings::instance();
	  $this->wrapper  = Classes\Wrapper::instance();
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}
}
