/**
 * External dependencies
 */
import moment from 'moment';

/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';

export default ( { className } ) => {
	const [ now, setNow ] = useState( moment() );

	useEffect( () => {
		const timer = setInterval( () => {
			setNow( moment() );
		}, 1000 );

		return () => window.clearInterval( timer );
	}, [] );

	return (
		<div className={ className }>
			<div className="clock">
				{ now.format( 'HH:mm:ss' ) }
			</div>
		</div>
	);
};
