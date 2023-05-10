<?php

/**
 * Block Name: Color Palette Block
 * Description: Select colors to change site's background color
 */

 namespace QUADLAYERS\Gutenberg\Classes\Blocks;

 // Creacion del bloque de la paleta de colores con los mismo atributos que en JS
class ColorPaletteBlock extends Base {

	public $name       = 'quadlayers/color-palette-block';
	public $attributes = [
      "color" => [
         "type" => "string",
         "default" => "#f00"
      ],
      "colors" => [
         "type" => "array",
         "default" => [
            [ name => "red", color => "#f00" ],
            [ name => "white", color => "#fff" ],
            [ name => "blue", color => "#00f" ],
         ]
      ]
	];

	public function __construct( array $data = [] ) {
	   parent::__construct( $data );
	}
}