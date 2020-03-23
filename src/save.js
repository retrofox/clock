
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */

const ClockBlockSave = ( { attributes } ) => {

	const {
		textColor,
		customTextColor,
		backgroundColor,
		customBackGroundColor,
	} = attributes;

	const cssClasses = classnames( 'wp-block-create-block-clock', {
		'has-text-color': textColor || customTextColor,
		'has-background-color': backgroundColor || customBackGroundColor,
	} );

	console.log( { attributes } );
	console.log( { textColor } );

	return (
		<div className={ cssClasses }>
			<div className="clock">
				Clock!!
			</div>
		</div>
	);
};

export default ClockBlockSave;

