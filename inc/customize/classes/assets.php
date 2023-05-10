<?php

namespace QUADLAYERS\Customize\Classes;

class Assets {


	protected static $_instance;

	public function __construct() {
		add_action( 'customize_preview_init', array( $this, 'preview' ) );
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'controls' ) );
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	public function preview() {
		$preview = include_once QUADLAYERS_THEME_DIR . 'build/customize/preview/js/index.asset.php';

		wp_enqueue_script(
			'ct-preview',
			QUADLAYERS_THEME_URL . '/build/customize/preview/js/index.js',
			$preview['dependencies'],
			$preview['version']
		);

		wp_localize_script(
			'ct-preview',
			'ct_customizer_localizations',
			array(
				'static_public_url' => './wp-content/themes/blocksy/static/',
			)
		);

	}

	public function controls() {
		$controls = include_once QUADLAYERS_THEME_DIR . 'build/customize/controls/js/index.asset.php';

		wp_enqueue_script(
			'ct-customizer',
			QUADLAYERS_THEME_URL . '/build/customize/controls/js/index.js',
			$controls['dependencies'],
			$controls['version']
		);

		wp_localize_script(
			'ct-customizer',
			'ct_customizer_localizations',
			array(
				'customizer_reset_none' => wp_create_nonce( 'ct-customizer-reset' ),
				'all_mods'              => get_theme_mods(),
			)
		);
	}
}
