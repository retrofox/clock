
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { getColorClassName } from '@wordpress/block-editor';


const ClockBlockSave = ( { attributes } ) => {

	const {
		textColor,
		customTextColor,
		backgroundColor,
		customBackgroundColor,
	} = attributes;

	const textClassname = getColorClassName( 'color', textColor );
	const backgroundClassname = getColorClassName(
		'background-color',
		backgroundColor
	);

	// Apply CSS classes.
	const cssClasses = classnames( 'wp-block-create-block-clock', {
		'has-text-color': textColor || customTextColor,
		'has-background-color': backgroundColor || customBackgroundColor,
		[ textClassname ]: textClassname,
		[ backgroundClassname ]: backgroundClassname,
	} );

	// Apply inline styles.
	const style = {};

	if ( customTextColor ) {
		style.color = customTextColor;
	}

	if ( customBackgroundColor ) {
		style[ 'background-color' ] = customBackgroundColor;
	}

	return (
		<div
			className={ cssClasses }
			style={ Object.keys( style ).length
				? style
				: null
			}
		>
			<div className="clock">
				Clock!!
			</div>
		</div>
	);
};

export default ClockBlockSave;

