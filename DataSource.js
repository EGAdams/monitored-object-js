import axios from 'axios';
/** @class DataSource class */
 class DataSource {
    constructor( config ) { this.url = config.getUrl(); } // establish communication address
        
    async runQuery( apiArgs ) {  // request data, redirect result.
        const headers = {
            "Content-Type": "application/json",
        }
        const data = {
            "query": apiArgs.query,
            "queryResultProcessor": apiArgs.queryResultProcessor,
            "data": apiArgs.data
        }

        axios.post( this.url, { "sql": apiArgs.query })
        .then(async (res) => {
            console.log( " res.data [" + res.data + "]" );
            apiArgs.queryResultProcessor.processQueryResult( res.data );
        })
        .catch((err) => {
            console.log(err);
        });
    }    
}

export default DataSource;
