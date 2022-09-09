/** @class FetchRunner class */
class FetchRunner {
    constructor( config ) { 
        this.url = config.api_path; } // establish communication address
        
    async run( apiArgs ) {
        fetch( this.url, {
            method: "POST",
            mode:   'no-cors',
            headers: { 'Content-Type': 'text/plain'},
            body: JSON.stringify( apiArgs )
        }).then( res => {
            console.log( "processing response: " + res + "..." );
            return res.text();
        }).then( data => {
            console.log( "data: " + data );
        }); }
}
