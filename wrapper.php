<?php

use QUADLAYERS\Theme\Classes\Wrapper;

get_header( Wrapper::$base ); ?>
<!-- #headers -->

<section id="primary">
	<!-- #wrapper -->
	<div id="content" role="main">
		<?php Wrapper::include_template( Wrapper::$base ); ?>
	</div>
	<!-- #wrapper -->
</section>

<!-- #footer -->
<?php get_footer( Wrapper::$base ); ?>
