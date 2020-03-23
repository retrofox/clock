
import { registerBlockType } from '@wordpress/blocks';

import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import attributes from './attributes';

registerBlockType( 'create-block/clock', {

	title: __( 'Clock', 'clock-block' ),

	description: __(
		'Add a nice clock to your post!',
		'clock-block'
	),

	category: 'widgets',

	icon: 'clock',

	edit,

	save,

	attributes,
} );
