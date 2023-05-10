<?php

namespace QUADLAYERS\Gutenberg\Classes;

use QUADLAYERS\Gutenberg\Config;

class Blocks {


	protected static $_instance;
  protected $blocks = [
	  'editable-block',
	  'controls-block',
	  'inspector-block',
  ];

	public function __construct() {
	   add_action( 'wp_loaded', [ $this, 'register_blocks' ] );
	  add_filter( 'block_categories_all', [ $this, 'register_block_category' ], 10, 2 );
	}

	function register_block_category( $categories, $post ) {
	$categories = array_merge(
		$categories,
		[
			[
				'slug'  => 'quadlayers',
				'title' => QUADLAYERS_THEME_NAME,
			],
			[
				'slug'  => 'quadlayers_layout',
				'title' => sprintf( __( '%s Layout', 'quadlayers' ), QUADLAYERS_THEME_NAME ),
			],
			[
				'slug'  => 'quadlayers_content',
				'title' => sprintf( __( '%s Content', 'quadlayers' ), QUADLAYERS_THEME_NAME ),
			],
			[
				'slug'  => 'quadlayers_post',
				'title' => sprintf( __( '%s Post', 'quadlayers' ), QUADLAYERS_THEME_NAME ),
			],
		]
	);

	  return $categories;
	}

	public function register_blocks() {
		foreach ( $this->blocks as $block_name ) {

		  $class_name = "{$this->class_name($block_name)}";

		  $this->blocks[ $block_name ] = new $class_name();
		}
	}


	public function get_blocks( $block_name ) {
		if ( $block_name ) {
			if ( isset( $this->blocks[ $block_name ] ) ) {
				return $this->blocks[ $block_name ];
			}

		  return null;
		}

	  return $this->blocks;
	}

	public function class_name( $block_name ) {
	  $class_name = str_replace( '-', ' ', $block_name );
	  $class_name = str_replace( ' ', '', ucwords( $class_name ) );
	  $class_name = __NAMESPACE__ . '\\Blocks\\' . $class_name;

	  return $class_name;
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
		  self::$_instance = new self();
		}
	  return self::$_instance;
	}
}
