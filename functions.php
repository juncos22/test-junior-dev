<?php

define( 'QUADLAYERS_THEME_NAME', 'QUADLAYERS' );
define( 'QUADLAYERS_THEME_VERSION', '1.0.0' );
define( 'QUADLAYERS_THEME_FILE', __FILE__ );
define( 'QUADLAYERS_THEME_DIR', __DIR__ . DIRECTORY_SEPARATOR );
define( 'QUADLAYERS_THEME_URL', get_template_directory_uri() );
define( 'QUADLAYERS_PREFIX', 'quadlayers' );

require_once 'inc/manager.php';

register_nav_menus(
	array(
		'primary_menu' => __( 'Primary Menu', 'quadlayers' ),
		'footer_menu'  => __( 'Footer Menu', 'quadlayers' ),
	)
);

function quadlayers_scripts() {
  wp_enqueue_style( 'style', get_stylesheet_uri() );
}

add_action( 'wp_enqueue_scripts', 'quadlayers_scripts' );

function quadlayers_background_customize() {    ?>
		 <style type="text/css">
			 body { background-color: #<?php echo get_theme_mod( 'background_color', 'ffffff' ); ?>; }
		 </style>
	<?php
}

add_action( 'wp_head', 'quadlayers_background_customize' );
