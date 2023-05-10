<?php

namespace QUADLAYERS\Theme\Classes;

use QUADLAYERS\Gutenberg\Classes\Editor;
use QUADLAYERS\Gutenberg\Classes\Theme;

class Support {


	protected static $_instance;

	public function __construct() {
	  load_theme_textdomain( 'quadlayers', QUADLAYERS_THEME_DIR . '/languages' );

	}

	public function support() {
	  add_theme_support( 'experimental-custom-spacing' );
	  add_theme_support( 'experimental-line-height' );
	  add_theme_support( 'custom-line-height' );
	  add_theme_support( 'experimental-custom-spacing' );
	  add_theme_support( 'experimental-link-color' );

	  /*
		$settings['__experimentalEnableCustomLineHeight'] = get_theme_support( 'experimental-line-height' );
		$settings['enableCustomLineHeight'] = get_theme_support( 'custom-line-height' );
		add_theme_support( 'experimental-custom-spacing' )
		add_theme_support( 'experimental-link-color' )
		add_theme_support( 'responsive-embeds' );
	   */

	  add_theme_support( 'automatic-feed-links' );

	  add_theme_support( 'title-tag' );

	  add_theme_support( 'post-thumbnails' );

	register_nav_menus(
		array(
			'primary' => 'Primary Menu',
			'social'  => 'Social Media Profiles',
		)
	);

	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		)
	);

	add_theme_support(
		'post-formats',
		array(
			'gallery',
			'link',
			'image',
			'quote',
			'video',
			'audio',
		)
	);

	  // Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'quadlayers/theme/support/background',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	  add_theme_support( 'woocommerce' );

	  // woocommerce 3.x
	  /*
		add_theme_support( 'wc-product-gallery-lightbox' );
		add_theme_support( 'wc-product-gallery-slider' );
	   */

	  // remove_theme_support( 'core-block-patterns' );
	}

	public function get_combinations( $arrays ) {
	 $result = array( array() );
		foreach ( $arrays as $property => $property_values ) {
		  $tmp = array();
			foreach ( $result as $result_item ) {
				foreach ( $property_values as $property_value ) {
				  $tmp[] = array_merge( $result_item, array( $property => $property_value ) );
				}
			}
		  $result = $tmp;
		}
	  return $result;
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}
}
