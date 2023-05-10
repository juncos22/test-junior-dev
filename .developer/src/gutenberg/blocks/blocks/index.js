/**
 * WordPress dependencies
 */

import { registerBlockCollection } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";

registerBlockCollection("quadlayers", {
  title: __("Quadlayers", "quadlayers"),
  icon: "editor-contract",
});

/**
 * Register Blocks
 */

import "./editable-block";
import "./controls-block";
import "./inspector-block";
import "./color-palette"; // Importamos el bloque de la paleta de colores
