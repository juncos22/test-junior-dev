<?php

namespace QUADLAYERS\Theme\Classes;

/**
 * Theme wrapper
 *
 * @link https://roots.io/sage/docs/theme-wrapper/
 * @link http://scribu.net/wordpress/theme-wrappers.html
 */

class Wrapper {


	/**
	 * Stores the full path to the main template file
	 */
	static $main_template;

	/**
	 * Stores the base name of the template file; e.g. 'page' for 'page.php' etc.
	 */
	static $base;

	protected static $_instance;

	public function __construct() {
		 add_filter( 'template_include', [ __CLASS__, 'wrap' ], 99 );
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	static function wrap( $template ) {
		 self::$main_template = $template;

		self::$base = substr( basename( self::$main_template ), 0, -4 );

		if ( 'index' == self::$base ) {
			self::$base = false;
		}

		$templates = array( 'wrapper.php' );

		if ( self::$base ) {
			array_unshift( $templates, sprintf( 'wrapper-%s.php', self::$base ) );
		}

		return locate_template( $templates );
	}

	static function include_template( string $slug = '', array $data = [], $echo = true ) {
		$data = wp_parse_args(
			$data,
			[
				'content'    => null,
				'attributes' => null,
				'className'  => null,
			]
		);

		if ( ! $echo ) {
			return self::include( $slug, $data );
		}

		echo self::include( $slug, $data );
	}

	static function include( string $slug, array $data, $load = true ) {
		global $posts, $post, $wp_did_header, $wp_query, $wp_rewrite, $wpdb, $wp_version, $wp, $id, $comment, $user_ID;

		if ( is_array( $wp_query->query_vars ) ) {
			extract( array_merge( $wp_query->query_vars, $data ), EXTR_SKIP );
		}

		if ( isset( $s ) ) {
			$s = esc_attr( $s );
		}

		if ( $located = locate_template( "$slug.php" ) ) {
			ob_start();
			include $located;
			return ob_get_clean();
		}
	}
}
