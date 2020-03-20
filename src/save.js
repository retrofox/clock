
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

const ClockBlockSave = () => {
	return (
		<p>
			{ __(
				'Clock – hello from the saved content!',
				'create-block'
			) }
		</p>
	);
};

export default ClockBlockSave;

