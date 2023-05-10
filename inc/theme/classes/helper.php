<?php

namespace QUADLAYERS\Theme\Classes;

class Helper {


	protected static $_instance;

	public function __construct() {     }

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	function get_template_part( string $name, array $attributes, string $content = null ) {
		set_query_var( $name . '/attributes', $attributes );
		set_query_var( $name . '/content', $content );

		// Load the template part in an output buffer:
		ob_start();

		get_template_part( 'blocks/' . $name );

		$output = ob_get_clean();

		// Fall back to just the block content if there's no template part:
		if ( '' === $output ) {
			$output = (string) $content;
		}

		set_query_var( $name . '/attributes', null );
		set_query_var( $name . '/content', null );

		return $output;
	}

	public function get_query( $attributes, $block_type ) {
		// Block type is grid/masonry/carousel/timeline.
		$query_args = array(
			'posts_per_page'      => ( isset( $attributes['postsToShow'] ) ) ? $attributes['postsToShow'] : 6,
			'post_status'         => 'publish',
			'post_type'           => ( isset( $attributes['postType'] ) ) ? $attributes['postType'] : 'post',
			'order'               => ( isset( $attributes['order'] ) ) ? $attributes['order'] : 'desc',
			'orderby'             => ( isset( $attributes['orderBy'] ) ) ? $attributes['orderBy'] : 'date',
			'ignore_sticky_posts' => 1,
		);

		if ( isset( $attributes['taxonomyType'] ) && '' !== $attributes['taxonomyType'] && $attributes['taxonomySelected'] != '' ) {
			$query_args['tax_query'][] = array(
				'taxonomy' => ( isset( $attributes['taxonomyType']['slug'] ) ) ? $attributes['taxonomyType']['slug'] : 'category',
				'field'    => 'id',
				'terms'    => ( $attributes['taxonomySelected'] != '' ) ? $attributes['taxonomySelected'] : -1,
				'operator' => 'IN',
			);
		}

		return new \WP_Query( $query_args );
	}

	/**
	 * Render Image HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 0.0.1
	 */
	public static function render_image( $attributes ) {
		if ( ! $attributes['displayPostImage'] ) {
			return;
		}

		if ( ! get_the_post_thumbnail_url() ) {
			return;
		}

		$target = ( $attributes['newTab'] ) ? '_blank' : '_self';
		do_action( "quadlayers_single_post_before_featured_image_{$attributes['post_type']}", get_the_ID(), $attributes );

		?>
		<div class='quadlayers-post__image'>
			<a href="<?php echo esc_url( apply_filters( "quadlayers_single_post_link_{$attributes['post_type']}", get_the_permalink(), get_the_ID(), $attributes ) ); ?>" target="<?php echo esc_html( $target ); ?>" rel="bookmark noopener noreferrer"><?php echo wp_get_attachment_image( get_post_thumbnail_id(), $attributes['imgSize'] ); ?>
			</a>
		</div>
	<?php
		do_action( "quadlayers_single_post_after_featured_image_{$attributes['post_type']}", get_the_ID(), $attributes );
	}

	/**
	 * Render Post Title HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 0.0.1
	 */
	public static function render_title( $attributes ) {
		if ( ! $attributes['displayPostTitle'] ) {
			return;
		}

		$target = ( $attributes['newTab'] ) ? '_blank' : '_self';
		do_action( "quadlayers_single_post_before_title_{$attributes['post_type']}", get_the_ID(), $attributes );
		?>
		<<?php echo esc_html( $attributes['titleTag'] ); ?> class="quadlayers-post__title">
			<a href="<?php echo esc_url( apply_filters( "quadlayers_single_post_link_{$attributes['post_type']}", get_the_permalink(), get_the_ID(), $attributes ) ); ?>" target="<?php echo esc_html( $target ); ?>" rel="bookmark noopener noreferrer"><?php the_title(); ?></a>
		</<?php echo esc_html( $attributes['titleTag'] ); ?>>
	<?php
		do_action( "quadlayers_single_post_after_title_{$attributes['post_type']}", get_the_ID(), $attributes );
	}

	/**
	 * Render Post Meta - Author HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 1.14.0
	 */
	public static function render_meta_author( $attributes ) {
		if ( ! $attributes['displayPostAuthor'] ) {
			return;
		}
		?>
		<span class="quadlayers-post__author">
			<span class="dashicons-admin-users dashicons"></span>
			<?php the_author_posts_link(); ?>
		</span>
	<?php
	}

	/**
	 * Render Post Meta - Date HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 1.14.0
	 */
	public static function render_meta_date( $attributes ) {
		if ( ! $attributes['displayPostDate'] ) {
			return;
		}
		?>
		<time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>" class="quadlayers-post__date">
			<span class="dashicons-calendar dashicons"></span>
			<?php echo esc_html( get_the_date() ); ?>
		</time>
	<?php
	}

	/**
	 * Render Post Meta - Comment HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 1.14.0
	 */
	public static function render_meta_comment( $attributes ) {
		if ( ! $attributes['displayPostComment'] ) {
			return;
		}
		?>
		<span class="quadlayers-post__comment">
			<span class="dashicons-admin-comments dashicons"></span>
			<?php comments_number(); ?>
		</span>
	<?php
	}

	/**
	 * Render Post Meta - Comment HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 1.14.0
	 */
	public static function render_meta_taxonomy( $attributes ) {
		if ( ! $attributes['displayPostTaxonomy'] ) {
			return;
		}
		global $post;
		if ( $attributes['taxonomyToShow']['slug'] ) {
			$taxonomy = $attributes['taxonomyToShow']['slug'];
		} else {
			$taxonomy = $attributes['taxonomyType']['slug'] ? $attributes['taxonomyType']['slug'] : 'category';
		}

		$terms = get_the_terms( get_the_ID(), $taxonomy );
		if ( is_wp_error( $terms ) ) {
			return;
		}

		if ( ! isset( $terms[0] ) ) {
			return;
		}

		if ( $attributes['taxonomyToShow']['slug'] == $attributes['taxonomyType']['slug'] ) {
			if ( $attributes['taxonomySelected'] != '' ) {
				foreach ( $terms as $cat ) {
					if ( $attributes['taxonomySelected'] == $cat->term_id ) {
						$term = $cat;
					}
				};
			} else {
				$term = $terms[0];
			}
		} else {
			$term = $terms[0];
		}
		?>
		<span class="quadlayers-post__taxonomy">
			<span class="dashicons-tag dashicons"></span>
			<?php echo esc_html( $term->name ); ?>
		</span>
	<?php
	}

	/**
	 * Render Post Meta HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 0.0.1
	 */
	public static function render_meta( $attributes ) {
		 // global $post;
		do_action( "quadlayers_single_post_before_meta_{$attributes['post_type']}", get_the_ID(), $attributes );

		$meta_sequence = array( 'author', 'date', 'comment', 'taxonomy' );
		$meta_sequence = apply_filters( "quadlayers_single_post_meta_sequence_{$attributes['post_type']}", $meta_sequence, get_the_ID(), $attributes );
		?>
		<div class="quadlayers-post__meta quadlayers-post-grid-byline">
			<?php
			foreach ( $meta_sequence as $key => $sequence ) {
				switch ( $sequence ) {
					case 'author':
						self::render_meta_author( $attributes );
						break;

					case 'date':
						self::render_meta_date( $attributes );
						break;

					case 'comment':
						self::render_meta_comment( $attributes );
						break;

					case 'taxonomy':
						self::render_meta_taxonomy( $attributes );
						break;

					default:
						break;
				}
			}
			?>

		</div>
	<?php
		do_action( "quadlayers_single_post_after_meta_{$attributes['post_type']}", get_the_ID(), $attributes );
	}

	/**
	 * Render Post Excerpt HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 0.0.1
	 */
	public static function render_excerpt( $attributes ) {
		if ( ! $attributes['displayPostExcerpt'] ) {
			return;
		}

		$length = ( isset( $attributes['excerptLength'] ) ) ? $attributes['excerptLength'] : 25;

		$excerpt = wp_trim_words( get_the_excerpt(), $length );

		if ( ! $excerpt ) {
			$excerpt = null;
		}

		?>
		<div class="quadlayers-post__excerpt">
			Excerpt: <?php echo wp_kses_post( $excerpt ); ?>
		</div>
	<?php

	}

	/**
	 * Render Post CTA button HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 0.0.1
	 */
	public static function render_button( $attributes ) {
		if ( ! $attributes['displayPostLink'] ) {
			return;
		}
		$target   = ( $attributes['newTab'] ) ? '_blank' : '_self';
		$cta_text = ( $attributes['ctaText'] ) ? $attributes['ctaText'] : __( 'Read More', 'quadlayers' );
		do_action( "quadlayers_single_post_before_cta_{$attributes['post_type']}", get_the_ID(), $attributes );
		?>
		<!-- <div class="quadlayers-post__cta"> -->
		<a class="quadlayers-post__link quadlayers-text-link" href="<?php echo esc_url( apply_filters( "quadlayers_single_post_link_{$attributes['post_type']}", get_the_permalink(), get_the_ID(), $attributes ) ); ?>" target="<?php echo esc_html( $target ); ?>" rel="bookmark noopener noreferrer"><?php echo esc_html( $cta_text ); ?></a>
		<!-- </div> -->
	<?php
		do_action( "quadlayers_single_post_after_cta_{$attributes['post_type']}", get_the_ID(), $attributes );
	}

	/**
	 * Render Complete Box Link HTML.
	 *
	 * @param array $attributes Array of block attributes.
	 *
	 * @since 1.7.0
	 */
	public static function render_complete_box_link( $attributes ) {
		if ( ! ( isset( $attributes['linkBox'] ) && $attributes['linkBox'] ) ) {
			return;
		}
		$target = ( $attributes['newTab'] ) ? '_blank' : '_self';
		?>
		<a class="quadlayers-post__link-complete-box" href="<?php echo esc_url( apply_filters( "quadlayers_single_post_link_{$attributes['post_type']}", get_the_permalink(), get_the_ID(), $attributes ) ); ?>" target="<?php echo esc_html( $target ); ?>" rel="bookmark noopener noreferrer"></a>
<?php
	}
}
