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

	const timer = setInterval( () => {
		setNow( moment() );
	}, 1000 );
	
	return (
		<div className={ className }>
			<div className="clock">
				{ now.format( 'HH:mm:ss' ) }
			</div>
		</div>
	);
};
