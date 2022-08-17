/** @class TableManager */
class TableManager {
    constructor( object_id_arg ) { 
        this.url = "https://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php";
        this.object_id = object_id_arg }

    createObjectRow() {
        // console.log( "checking object row for object_id: " + this.object_id + "..." );
        let query = "select object_data from monitored_objects where object_view_id='" + this.object_id + "'";   
        console.log( "running query: " + query );
        jQuery.post( this.url, { sql: query }).done( function( dataArg, result, thirdArg ) {
            this.checkSelectResults( dataArg, result, thirdArg );
        }.bind( this ));    
    }

    checkSelectResults( dataArg, args, thirdArg ) {
        //console.log( "checking results of table manager selecting object row... " );
        if ( dataArg.length > 2 ) { // if there no data, the length is 2; ("[]".length = 2)
            // console.log( "got results.  no need for inserting " + this.object_id );
        } else {
            // console.log( "no results, inserting new object: " + this.object_id + "..." ); 
            let query_string = "insert into monitored_objects( object_view_id, object_data ) values ( '" + this.object_id + "', '' )"; 
            // console.log( "running query: " + query_string );
            jQuery.post( this.url, { sql: query_string }).done( function( _insertResults ) {
                console.log( dataArg ); 
                this.checkResults( _insertResults );
            }.bind( this )); 
        }
    }

    checkResults( insertResultsArg ) { if ( insertResultsArg.length > 2 ) { 
        console.error( "*** ERROR: while running query: " + insertResultsArg + " ***" ); }}
}
