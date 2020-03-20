
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

