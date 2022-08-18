/** @class XhrRunner class */
class XhrRunner {
    constructor() {  // establish communication address
        this.url = ""; } 

        async runQuery ( apiArgs ) {
            const xhr = new XMLHttpRequest();
            xhr.open( "POST", this.url, true );
            xhr.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" ); // allows "sql="... syntax!
            xhr.onreadystatechange = function() {
                if ( xhr.readyState === 4 && xhr.status === 200 ) {
                    try {
                        console.log( "xhr.responseText: " + xhr.responseText );
                        apiArgs.data = JSON.parse( xhr.responseText );
                    } catch( e ) {
                        console.log( "*** ERROR: failed to parse JSON data from server. ***" );
                        console.log( "*** ERROR: dataArg: " + xhr.responseText + " ***" );
                    }
                    if ( xhr.responseText.length != 0 ) {
                        console.log( "calling queryResultProcessor.processQueryResult with data: " + apiArgs.data );
                        apiArgs.queryResultProcessor.processQueryResult( apiArgs );
                    }
                } else {
                    console.log( "xhr.readyState: " + xhr.readyState );
                    console.log( "xhr.status: " + xhr.status );
                }
            };
            xhr.send( "sql=" + apiArgs.query );
        }
}

export default XhrRunner;