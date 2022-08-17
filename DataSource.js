/*
 *	DataSource class
 */
 class DataSource {
    constructor() {  // establish communication address
        this.url = "https://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php"; } 

    runQuery( apiArgs ) {  // request data, redirect result.
        jQuery.post( this.url, { sql: apiArgs.query }).done( function( dataArg) {
            try {
                apiArgs.data = JSON.parse( dataArg );
                if( apiArgs.data.error ) {
                    apiArgs.thisObject.logUpdate( "*** ERROR: database error in runQuery() *** " );
                }
            } catch( e ) {
                console.log( "*** ERROR: failed to parse JSON data from server. ***" );
                console.log( "*** ERROR: dataArg: " + dataArg + " ***" );
            }
            jQuery( document ).trigger( /* event */ apiArgs.trigger, /* event arguments */ apiArgs );
        }); }

    mysql_real_escape_string ( str ) {
        return str.replace( /[\0\x08\x09\x1a\n\r"'\\\%]/g, function ( char ) {
            switch (char) {
                case "\0":
                    return "\\0";
                case "\x08":
                    return "\\b";
                case "\x09":
                    return "\\t";
                case "\x1a":
                    return "\\z";
                case "\n":
                    return "\\n";
                case "\r":
                    return "\\r";
                case "\"":
                case "'":
                case "\\":
                case "%":
                    return "\\"+char; // prepends a backslash to backslash, percent,
                                        // and double/single quotes
                default:
                    return char;
            }
        });
    }
}
