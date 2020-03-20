/**
 * External dependencies
 */
import moment from 'moment';


export default ( { className } ) => {
	const now = moment();

	return (
		<div className={ className }>
			<div className="clock">
				{ now.format( 'HH:mm:ss' ) }
			</div>
		</div>
	);
};
