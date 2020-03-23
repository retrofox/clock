
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
		customBackGroundColor,
	} = attributes;

	const textClassname = getColorClassName( 'color', textColor );
	const backgroundClassname = getColorClassName(
		'background-color',
		backgroundColor
	);

	const cssClasses = classnames( 'wp-block-create-block-clock', {
		'has-text-color': textColor || customTextColor,
		'has-background-color': backgroundColor || customBackGroundColor,
		[ textClassname ]: textClassname,
		[ backgroundClassname ]: backgroundClassname,
	} );

	return (
		<div className={ cssClasses }>
			<div className="clock">
				Clock!!
			</div>
		</div>
	);
};

export default ClockBlockSave;

