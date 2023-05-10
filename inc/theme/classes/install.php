<?php

namespace QUADLAYERS\Theme\Classes;

class Install {

	protected static $_instance;

	public function __construct() {

	  // Check if we are not already running this routine.
		if ( 'yes' === get_transient( 'quadlayers_installing' ) ) {
		  return;
		}

	  // If we made it till here nothing is running yet, lets set the transient now.
	  set_transient( 'quadlayers_installing', 'yes', MINUTE_IN_SECONDS * 10 );
	  set_transient( 'quadlayers-first-rating', true, MONTH_IN_SECONDS );
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}

}
