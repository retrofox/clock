/**
 * External dependencies
 */
import moment from 'moment';

/**
 * WordPress dependencies
 */
import { useState, useEffect, Fragment } from '@wordpress/element';
import { __experimentalUseColors as useColors } from '@wordpress/block-editor';

export default ( { className } ) => {
	const [ now, setNow ] = useState( moment() );

	const {
		InspectorControlsColorPanel,
	} = useColors( [
		{ name: 'textColor', property: 'color' },
		{ name: 'backgroundColor', property: 'background-color' },
	] );

	useEffect( () => {
		const timer = setInterval( () => {
			setNow( moment() );
		}, 1000 );

		return () => window.clearInterval( timer );
	}, [] );

	return (
		<Fragment>
			{ InspectorControlsColorPanel }
			<div className={ className }>
				<div className="clock">
					{ now.format( 'HH:mm:ss' ) }
				</div>
			</div>
		</Fragment>
	);
};
