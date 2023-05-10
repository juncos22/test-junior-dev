<?php

namespace QUADLAYERS\Customize\Classes\Options;

abstract class Base {


	public function __construct( array $data = [] ) {
	 add_action( 'customize_register', [ $this, 'register' ] );
	}

	public function register( $wp_customize ) {
	$wp_customize->add_panel(
		'demo_panel',
		array(
			'title'       => __( 'Test Quadlayers', 'textdomain' ),
			'description' => __( 'Aqui podemos mostrar un mensaje', 'textdomain' ),
			'priority'    => 160,
			'capability'  => 'edit_theme_options',
		)
	);

	  // Primera seccion
	$wp_customize->add_section(
		'test_section',
		array(
			'title'      => __( 'Panel', 'textdomain' ),
			'panel'      => 'demo_panel',
			'priority'   => 1,
			'capability' => 'edit_theme_options',
		)
	);

	  // Campo de texto
	$wp_customize->add_setting(
		'campo_texto',
		array(
			'type'       => 'theme_mod',
			'capability' => 'edit_theme_options',
			'transport'  => 'postMessage',
		)
	);

	$wp_customize->add_control(
		'campo_texto',
		array(
			'label'    => __( 'Ejemplo input', 'textdomain' ),
			'section'  => 'test_section',
			'priority' => 1,
			'type'     => 'text',
		)
	);

	  // Campo textarea
	$wp_customize->add_setting(
		'campo_textarea',
		array(
			'type'       => 'theme_mod',
			'capability' => 'edit_theme_options',
			'transport'  => 'postMessage',
		)
	);

	$wp_customize->add_control(
		'campo_textarea',
		array(
			'label'    => __( 'Ejemplo textarea', 'textdomain' ),
			'section'  => 'test_section',
			'priority' => 1,
			'type'     => 'textarea',
		)
	);

   // Campo image_upload
   $wp_customize->add_setting('image_upload', array(
      'default'           => get_template_directory_uri().'/assets/images/logo.png',
      'capability'        => 'edit_theme_options',
      'type'           => 'option',
      'transport'  => 'postMessage',
  ));

  $wp_customize->add_control( new \WP_Customize_Image_Control($wp_customize, 'image_upload_test', array(
      'label'    => __('Upload a logo', 'themename'),
      'section'  => 'test_section',
      'settings' => 'image_upload',
  )));

//   Campo Header Color
	$wp_customize->add_setting(
		'header_color',
		array(
			'default'   => '#ffffff',
			'transport' => 'postMessage',
		)
	);

	$wp_customize->add_control(
		new \WP_Customize_Color_Control(
			$wp_customize,
			'header_color',
			array(
				'label'    => __( 'Header Color', 'mytheme' ),
				'section'  => 'test_section',
				'settings' => 'header_color',
			)
		)
	);

	$wp_customize->add_setting(
		'background_color',
		array(
			'default'   => '#ffffff',
			'transport' => 'refresh',
		)
	);

	$wp_customize->add_control(
		new \WP_Customize_Color_Control(
			$wp_customize,
			'background_color',
			array(
				'label'    => __( 'Background Color', 'mytheme' ),
				'section'  => 'test_section',
				'settings' => 'background_color',
			)
		)
	);
	}
}
