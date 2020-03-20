/**
 * External dependencies
 */
import moment from 'moment';

/**
 * WordPress dependencies
 */
import { useState, useEffect, Fragment } from '@wordpress/element';
import { __experimentalUseColors as useColors } from '@wordpress/block-editor';

const ClockBlockEdit = ( { className } ) => {
	const [ now, setNow ] = useState( moment() );

	// Add colors.
	const {
		InspectorControlsColorPanel,
		TextColor,
		BackgroundColor,
	} = useColors( [
		{ name: 'textColor', property: 'color' },
		{ name: 'backgroundColor', property: 'backgroundColor' },
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
			<TextColor>
				<BackgroundColor>
					<div className={ className }>
						<div className="clock">
							{ now.format( 'HH:mm:ss' ) }
						</div>
					</div>
				</BackgroundColor>
			</TextColor>
		</Fragment>
	);
};

export default ClockBlockEdit;
