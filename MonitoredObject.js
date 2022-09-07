import LogObjectFactory from "./LogObjectFactory.js";
import MonitorLedData from "./MonitorLedData.js";
/** @class  MonitoredObject */
export default class MonitoredObject {
    constructor( config ) {
        this.construction_name = this.constructor.name;
        this.logObjects        = [];
        this.model             = new Model(); 
        this.logObjectFactory  = new LogObjectFactory();
        this.monitorLedData    = new MonitorLedData(); }   // lightred is not understood by CSS.  Whaaa... ??

    logUpdate( message ) {
        if ( !this.object_id ) {  console.log( "*** ERROR: object needs an id to log. ***" ); return; }
        if ( message.includes( "ERROR" )) { 
            this.setLedBackgroundColor( this.monitorLedData.FAIL_COLOR ); 
            this.setLedTextColor( "white" ); }
        this.setLedText( message );
        const logObject = this.logObjectFactory.createLogObject( message, this );
        this.logObjects.push( logObject );
        let data_config = { object_view_id: this.object_view_id, object_data: JSON.stringify( this )};
        this.model.updateObject( data_config, this.processQueryResult ) }

    processQueryResult( _event, results ) { if ( results.data.length > 0 ) { console.log( results.data ); }}
    
    getMonitorId() { return this.construction_name + "_" + this.object_id; }

    setMonitorId( newId ) { 
        this.object_id = newId;
        this.object_view_id = this.construction_name + "_" + newId; 
        let data_config = { object_view_id: this.object_view_id, object_id: this.object_view_id };
        this.model.insertObject( data_config, this.processQueryResult ); }

    setLedBackgroundColor( newColor ) { this.monitorLedData.classObject.background_color = newColor; }
    setLedTextColor(       newColor ) { this.monitorLedData.classObject.color            = newColor; }
    setLedText(            newText  ) { this.monitorLedData.ledText                      = newText ; }
}
