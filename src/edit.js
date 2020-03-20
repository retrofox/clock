/**
 * External dependencies
 */
import moment from 'moment';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

export default ( { className } ) => {
	const [ now, setNow ] = useState( moment() );

	return (
		<div className={ className }>
			<div className="clock">
				{ now.format( 'HH:mm:ss' ) }
			</div>
		</div>
	);
};
