<?php

namespace QUADLAYERS\Gutenberg\Classes;

class Assets {

	protected static $_instance;

	public function __construct() {
		add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_assets' ) );
	}

	public function block_assets() {
		if ( is_admin() ) {
			return;
		}

		wp_enqueue_style(
			'quadlayers-blocks',
			QUADLAYERS_THEME_URL . '/build/gutenberg/blocks/css/style.css',
			apply_filters(
				'quadlayers/gutenberg/style/dependencies',
				__return_empty_array()
			),
			QUADLAYERS_THEME_VERSION
		);
	}

	public function block_editor_assets() {
		$blocks = include_once QUADLAYERS_THEME_DIR . 'build/gutenberg/blocks/js/index.asset.php';

		wp_enqueue_script(
			'quadlayers-editor-blocks',
			QUADLAYERS_THEME_URL . '/build/gutenberg/blocks/js/index.js',
			apply_filters(
				'quadlayers/gutenberg/editor/script/dependencies',
				$blocks['dependencies']
			),
			$blocks['version']
		);

		wp_localize_script(
			'quadlayers-editor-blocks',
			'quadlayersSettings',
			array(
				'restNonce'       => wp_create_nonce( 'wp_rest' ),
				'themeVersion'    => QUADLAYERS_THEME_VERSION,
				'themeOptions'    => apply_filters(
					'quadlayers/gutenberg/editor/script/localize/options',
					__return_empty_array()
				),
				'themeEditor'     => apply_filters(
					'quadlayers/gutenberg/editor/script/localize/editor',
					__return_empty_array()
				),
				'themeStore'      => apply_filters(
					'quadlayers/gutenberg/editor/script/localize/store',
					__return_empty_array()
				),
				'themeBlocks'     => apply_filters(
					'quadlayers/gutenberg/editor/script/localize/blocks',
					__return_empty_array()
				),
				'themeAttributes' => apply_filters(
					'quadlayers/gutenberg/editor/script/localize/attributes',
					__return_empty_array()
				),
			)
		);

		$prev = get_previous_post();
		$next = get_previous_post();

		wp_localize_script(
			'quadlayers-editor-blocks',
			'quadlayersPost',
			array(
				'prevPost'      => $prev,
				'nextPost'      => $next,
				'nextThumbnail' => ! empty( $next ) ? get_the_post_thumbnail_url( $next->ID ) : '',
				'prevThumbnail' => ! empty( $prev ) ? get_the_post_thumbnail_url( $prev->ID ) : '',
			)
		);

		wp_enqueue_style(
			'quadlayers-editor-blocks',
			QUADLAYERS_THEME_URL . '/build/gutenberg/blocks/css/editor.css',
			apply_filters(
				'quadlayers/gutenberg/editor/style/dependencies',
				array( 'wp-edit-blocks' )
			),
			$blocks['version']
		);

		wp_add_inline_style(
			'quadlayers-editor-blocks',
			apply_filters(
				'quadlayers/gutenberg/editor/style/inline',
				__return_empty_string()
			)
		);
	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}
}
