/** @class TableManager */
class TableManager {
    constructor( dataSourceArg, object_id_arg ) { 
        this.object_id = object_id_arg;
        this.dataSource = dataSourceArg; }

    createObjectRow( newMonitoredObject ) { this.dataSource.insertObject( this.object_id, newMonitoredObject ); }    
}

export default TableManager;
