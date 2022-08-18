/** @class InsertMonitoredObjectQueryResultProcessor */
class InsertMonitoredObjectQueryResultProcessor {
    processQueryResult( _event, results ) {
        if ( results.data.length > 0 ) {
            console.log( results.data );
        }
    }
}

export default InsertMonitoredObjectQueryResultProcessor;
