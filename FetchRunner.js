/** @class FetchRunner class */
class FetchRunner {
    constructor( config ) { 
        this.url = config.api_path; } // establish communication address
        
    async run( apiArgs ) {
        fetch( this.url, {
            method: apiArgs.type,
            mode:   'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( apiArgs )
        }).then( res => {
            console.log( "processing response: " + res + "..." );
            return res.text();
        }).then( data => {
            console.log( "data: " + data );
        }); }
}
