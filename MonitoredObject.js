import LogObjectFactory from "./LogObjectFactory.js";
import MonitorLedData from "./MonitorLedData.js";
import TableManager from "./TableManager.js";
import XhrRunner from "./XhrRunner.js";
import DataSource from "./DataSource.js";
/** @class  MonitoredObject */
export default class MonitoredObject {
    constructor( config ) {
        this.construction_name = this.constructor.name;
        this.logObjects        = [];
        this.logObjectFactory  = new LogObjectFactory();
        this.monitorLedData    = new MonitorLedData(); 
        this.RUNNING_COLOR     = "lightyellow";
        this.PASS_COLOR        = "lightgreen";
        this.FAIL_COLOR        = "#fb6666";     // lightred is not understood by CSS.  Whaaa... ??
        this.dataSource        = ( typeof window === 'undefined') ? new DataSource( config ) : new XhrRunner( config ); }

    logUpdate( message ) {
        if ( !this.object_id ) {  console.log( "*** ERROR: object needs an id to log. ***" ); return; }
        if ( message.includes( "ERROR" )) { 
            this.setLedBackgroundColor( this.FAIL_COLOR ); 
            this.setLedTextColor( "white" ); }
        this.setLedText( message );
        const logObject = this.logObjectFactory.createLogObject( message, this );
        this.logObjects.push( logObject );
        let args = {
            query: "update monitored_objects set object_data='" + JSON.stringify( this ) + "' where object_view_id='" + this.object_view_id + "'",
            queryResultProcessor: this,
            thisObject: this };
        this.dataSource.runQuery( args ); }

    processQueryResult( _event, results ) { if ( results.data.length > 0 ) { console.log( results.data ); }}
    log( message ) { console.log( message ); }
    getMonitorId() { return this.construction_name + "_" + this.object_id; }
    setMonitorId( newId ) { 
        this.object_id = newId;
        this.object_view_id = this.construction_name + "_" + newId; 
        let tableManager = new TableManager( this.dataSource, this.object_view_id );
        tableManager.createObjectRow( this.object_view_id ); }

    setLedBackgroundColor( newColor ) { this.monitorLedData.classObject.background_color = newColor; }
    setLedTextColor(       newColor ) { this.monitorLedData.classObject.color            = newColor; }
    setLedText(            newText  ) { this.monitorLedData.ledText                      = newText ; }
}
