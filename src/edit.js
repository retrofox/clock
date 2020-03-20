
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export default ( { className } ) => {
	return (
		<p className={ className }>
			{ __( 'Clock!!!', 'clock-block' ) }
		</p>
	);
};
