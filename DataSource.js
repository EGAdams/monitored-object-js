/** @class DataSource class */
class DataSource {
    constructor(config) { this.url = config.getUrl(); } // establish communication address

    async getObjects( resultProcessorArg ) {
        this.resultProcessor = resultProcessorArg;
        fetch( this.url )
            .then((response) => {
                response.json().then(( result ) => {
                    console.log( "result: " + result );
                    // console.log( "processing text with [ " + this.resultProcessor + " ]" );
                });
            }).catch((error) => {
                console.log( "error: " + error.stack );
            }).then(() => {
                console.log( "done" );
            });
    }

    async insertObject( object_view_id_arg, object_data_arg ) {
        console.log( "insertObject: " + object_view_id_arg + " " + object_data_arg );
        fetch( this.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                object_view_id: object_view_id_arg,
                object_data: object_data_arg
            })
        }).then((response) => {
            response.json().then(( result ) => {
                console.log( "result: " + result );
                // console.log( "processing text with [ " + this.resultProcessor + " ]" );
            }).catch(( error ) => { 
                console.log( "error: " + error.stack ); 
            });
        }).catch((error) => {
            console.log( "error: " + error.stack );
        }).then(() => {
            console.log( "done" );
        });
    }
}

export default DataSource;
