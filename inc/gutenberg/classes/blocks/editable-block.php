<?php

namespace QUADLAYERS\Gutenberg\Classes\Blocks;

class EditableBlock extends Base {

	public $name       = 'quadlayers/editable-block';
	public $attributes = [
		'content' => [
			'type'     => 'array',
			'source'   => 'children',
			'selector' => 'p',
		],
	];

	public function __construct( array $data = [] ) {
	   parent::__construct( $data );
	}
}
