<?php

namespace QUADLAYERS\Gutenberg\Classes\Blocks;

class InspectorBlock extends Base {

	public $name       = 'quadlayers/inspector-block';
	public $attributes = [
		'content'       => [
			'type'     => 'string',
			'source'   => 'html',
			'selector' => 'p',
		],
		'checkboxField' => [
			'type'    => 'boolean',
			'default' => true,
		],
		'radioField'    => [
			'type'    => 'string',
			'default' => 'yes',
		],
		'textField'     => [
			'type' => 'string',
		],
		'toggleField'   => [
			'type' => 'boolean',
		],
		'selectField'   => [
			'type' => 'string',
		],
	];

	public function __construct( array $data = [] ) {
	   parent::__construct( $data );
	}
}
