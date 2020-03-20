/**
 * External dependencies
 */
import moment from 'moment';


export default ( { className } ) => {
	const now = moment();

	return (
		<p className={ className }>
			{ now.format( 'HH:mm:ss' ) }
		</p>
	);
};
