/** @class DataSource class */
class DataSource {
    constructor(config) { this.url = config.getUrl(); } // establish communication address

    async getObjects() {  // copilot wrote most of this.
        fetch( this.url )
            .then((response) => {
                response.text().then((text) => {
                    console.log( "text: " + text );
                });
            }).catch((error) => {
                console.log( "error: " + error.text );
            }).then(() => {
                console.log( "done" );
            });
    }
}

export default DataSource;
