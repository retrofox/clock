/**
 * External dependencies
 */
import moment from 'moment';

/**
 * WordPress dependencies
 */
import { useState, useEffect, Fragment } from '@wordpress/element';
import { __experimentalUseColors as useColors } from '@wordpress/block-editor';

const ClockBlock = ( { className } ) => {
	const [ now, setNow ] = useState( moment() );

	// Add colors.
	const {
		InspectorControlsColorPanel,
	} = useColors( [
		{ name: 'textColor', property: 'color' },
		{ name: 'backgroundColor', property: 'background-color' },
	], {
		colorPanelProps: {
			initialOpen: true,
		}
	} );

	// Start timer (once).
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

export default ClockBlock;
