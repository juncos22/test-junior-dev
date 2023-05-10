<?php

namespace QUADLAYERS\Gutenberg\Classes\Blocks;

class ControlsBlock extends Base {

	public $name       = 'quadlayers/controls-block';
	public $attributes = [
		'content'   => [
			'type'     => 'array',
			'source'   => 'children',
			'selector' => 'p',
		],
		'alignment' => [
			'type'    => 'string',
			'default' => 'none',
		],
	];

	public function __construct( array $data = [] ) {
	   parent::__construct( $data );
	}
}
