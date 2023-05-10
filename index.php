<?php defined( 'ABSPATH' ) || exit; ?>
<?php get_header(); ?>
<?php if ( have_posts() ) : ?>
  <?php do_action( 'quadlayers_before_loop' ); ?>
  <?php

	while ( have_posts() ) :
	  the_post();

	  the_content();
  endwhile;

	?>
  <?php do_action( 'quadlayers_after_loop' ); ?>
<?php endif; ?>

<?php
get_footer();
