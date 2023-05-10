<?php

namespace QUADLAYERS\Customize\Classes;

class Register {


	protected static $_instance;

	public function __construct() {
	   add_action( 'customize_register', [ $this, 'register' ] );
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}

	public function register( $wp_customize ) {
	  $wp_customize->get_setting( 'blogname' )->transport        = 'postMessage';
	  $wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

	  $wp_customize->remove_control( 'custom_logo' );

	  // $wp_customize->remove_control('blogname');
	  // $wp_customize->remove_control('blogdescription');

		if ( function_exists( 'is_shop' ) ) {
		  $wp_customize->remove_section( 'header_image' );
		  $wp_customize->remove_section( 'colors' );
		  $wp_customize->remove_section( 'woocommerce_product_catalog' );

		  /*
		  $wp_customize->get_control('woocommerce_demo_store_notice')->section = 'woocommerce_misc';
		  $wp_customize->get_control('woocommerce_demo_store_notice')->priority = 15;
		  $wp_customize->get_control('woocommerce_demo_store')->section = 'woocommerce_misc';
		  $wp_customize->get_control('woocommerce_demo_store')->priority = 15;


		  $wp_customize->get_control('woocommerce_single_image_width')->section = 'woocommerce_misc';
		  $wp_customize->get_control('woocommerce_thumbnail_image_width')->section = 'woocommerce_misc';
		  $wp_customize->get_control('woocommerce_thumbnail_cropping')->section = 'woocommerce_misc';
	  */

		  $wp_customize->remove_control( 'woocommerce_single_image_width' );
		  $wp_customize->remove_control( 'woocommerce_thumbnail_image_width' );
		  $wp_customize->remove_control( 'woocommerce_thumbnail_cropping' );
		  $wp_customize->remove_control( 'woocommerce_demo_store_notice' );
		  $wp_customize->remove_control( 'woocommerce_demo_store' );

		}

	}
}
