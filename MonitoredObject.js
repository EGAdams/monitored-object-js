import LogObjectFactory from "./LogObjectFactory.js";
import MonitorLed       from "./MonitorLed.js";
import SourceData       from "./SourceData.js";
import Model            from "./Model.js"; 
/** @class  MonitoredObject */
export default class MonitoredObject {
    constructor( config ) {
        this.object_view_id    = this.constructor.name + "_" + config.new_id ;
        this.logObjects        = [];
        this.model             = new Model( new SourceData( config )); 
        this.logObjectFactory  = new LogObjectFactory();
        this.monitorLed        = new MonitorLed();
        let data_config        = { object_view_id: this.object_view_id, object_data: JSON.stringify( this )};
        this.model.insertObject( data_config, this.processQueryResult ); }

    logUpdate( message ) {
        if ( !this.object_view_id ) {  console.log( "*** ERROR: object needs an id to log. ***" ); return; } 
        if ( message.includes( "ERROR" )) { this.monitorLed.setFail(); }
        this.monitorLed.setLedText( message );
        this.logObjects.push( this.logObjectFactory.createLogObject( message, this                 ));
        let data_config = { object_view_id: this.object_view_id, object_data: JSON.stringify( this )};
        this.model.updateObject( data_config, this.processQueryResult ) }

    processQueryResult( _event, results ) { if ( results.data.length > 0 ) { console.log( results.data ); }}
    
    getObjectViewId() { return this.object_view_id; }
}
