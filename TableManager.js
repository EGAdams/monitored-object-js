import InsertMonitoredObjectQueryResultProcessor from "./InsertMonitoredObjectQueryResultProcessor.js";
/** @class TableManager */
class TableManager {
    constructor( dataSourceArg, object_id_arg ) { 
        this.object_id = object_id_arg;
        this.dataSource = dataSourceArg; }

    createObjectRow() {
        const apiArgs = {
            data: {},
            queryResultProcessor: this,
            query: "select object_data from monitored_objects where object_view_id='" + this.object_id + "'" }
        console.log( "running query: " + apiArgs.query );
        this.dataSource.runQuery( apiArgs ); }    

    processQueryResult( dataArg, _args, _thirdArg ) {
        if ( dataArg.length > 2 ) { // if there no data, the length is 2; ("[]".length = 2)
        } else {
            let query_string = "insert into monitored_objects( object_view_id, object_data ) values ( '" + this.object_id + "', '' )"; // insert a new row for this object.
            const resultProcessor = new InsertMonitoredObjectQueryResultProcessor();
            const apiArgs = { data: {}, queryResultProcessor: resultProcessor, query: query_string };
            this.dataSource.runQuery( apiArgs ); }}

    checkResults( insertResultsArg ) { if ( insertResultsArg.length > 2 ) { 
        console.error( "*** ERROR: while running query: " + insertResultsArg + " ***" ); }}
}

export default TableManager;
