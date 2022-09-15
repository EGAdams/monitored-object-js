/**
 * @description
 * creates log objects giving them a unique id, 
 * time stamp, and determined calling method.
 *
 * @class LogObjectFactory
 */
 class LogObjectFactory {
    createLogObject( messageArg, someObject ) {
        const time_now = Date.now();
        const random_number = Math.floor( Math.random() * 10000000000000 );
        return {
            timestamp: time_now,
            id: someObject.constructor.name + "_" + random_number + '_' + time_now,
            message: messageArg,
            method: this.getCallingMethod()
        };
    }
    getCallingMethod() {
        var obj = {};
        Error.captureStackTrace( obj, this.getCallingMethod );
        if ( obj.stack.split( '\n' )[ 2 ].match( /at\s+\w+.(\w+)/ ) == null ) {
            return 'unknown'; }
        return obj.stack.split( '\n' )[ 2 ].match( /at\s+\w+.(\w+)/ )[ 1 ];
    }
}

export default LogObjectFactory;