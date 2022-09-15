/** @class FetchRunner class */
class FetchRunner {
    constructor( config ) { 
        this.url = config.api_path; 
        this.url_encoded_header = { "Content-Type": "application/x-www-form-urlencoded" };
        this.json_header        = { "Content-Type": "application/json"                  };
    } // establish communication address
    
    async run( apiArgs ) {
        let fetch_options = {
            method: apiArgs.type,
            mode:   'no-cors',
            headers: apiArgs.type == "POST" ? this.json_header : this.url_encoded_header,
            body: apiArgs.type == "POST" ? JSON.stringify( apiArgs ) : undefined
        };
        fetch( this.url, fetch_options ).then( res => {
            console.log( "processing response: " + res + "..." );
            return res.text();
        }).then( data => {
            console.log( "data: " + data );
        }); }
}

// xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" ); // allows "sql="... syntax!

