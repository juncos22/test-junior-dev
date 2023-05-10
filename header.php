<?php defined( 'ABSPATH' ) || exit; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset='<?php bloginfo( 'charset' ); ?>'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='profile' href='https://gmpg.org/xfn/11'>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <header>
  <img id="logoImg" src='<?php echo get_theme_mod("image_upload_test", get_template_directory_uri().'/assets/images/logo.png') ?>' alt='Logo' style="width: 190px; height: 60px;">
   
	<?php
	wp_nav_menu(
		array(
			'theme_location' => 'primary_menu',
		)
	);
	?>

  </header>
  <nav class='customizer-section'>
	<h2>Customizer</h2>
	<div id='customizer-quadlayers'>
	  <div>
		<?php
		if ( get_theme_mod( 'campo_texto' ) ) {
		  echo get_theme_mod( 'campo_texto' );
		}
		?>
	  </div>
	  <span>
		<?php
		if ( get_theme_mod( 'campo_textarea' ) ) {
		  echo get_theme_mod( 'campo_textarea' );
		}
		?>
	  </span>
    <div>
   
    </div>
	</div>
  </nav>
