<?php

namespace QUADLAYERS\Gutenberg\Classes\Blocks;

abstract class Base {


  public $name       = null;
  public $attributes = [];

	public function __construct( array $data = [] ) {
	register_block_type(
		$this->get_name(),
		[
			'style'           => $this->get_dependencies_style(),
			'script'          => $this->get_dependencies_script(),
			'editor_style'    => $this->get_dependencies_editor_style(),
			'editor_script'   => $this->get_dependencies_editor_script(),
			'attributes'      => $this->get_attributes(),
			'render_callback' => [ $this, 'render_callback' ],
		]
	);

	  $this->register_assets();

		if ( ! function_exists( 'wp_set_script_translations' ) ) {
		  return;
		}
	}

	public function register_assets() {     }

	public function get_dependencies_style() {  }
	public function get_dependencies_script() {     }
	public function get_dependencies_editor_style() {   }
	public function get_dependencies_editor_script() {  }

	public function get_template() {
	  return sanitize_key( str_replace( 'quadlayers/', '', $this->get_name() ) );
	}

	public function get_class() {
	 return sanitize_key( 'wp-block-' . str_replace( '/', '-', $this->get_name() ) );
	}

	public function render_callback( array $attributes, $content ) {
	  return $content;
	}

	public function get_name() {
	  return $this->name;
	}

	public function get_attributes() {
	return $this->attributes;
	}
}
