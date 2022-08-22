import DataSource from './DataSource.js';
import MonitoredObjectConfig from './MonitoredObjectConfig.js';

const port = "53924";
// const config = { "url": "https://americansjewelry.com/test2/runQ.php/index.php/user/list" };
// const config = { "url": "http://localhost:" + port + "/index.php/user/list?limit=20" };
const config = { "url": "https://americansjewelry.com/test2/runQ.php/index.php/user/insert" };
// const config = { "url": "http://localhost:" + port + "/index.php/user/insert" };

const source = new DataSource( new MonitoredObjectConfig( config ));
function gotData( data ) { console.log( "got data: " + data ); }

let theResponse = await source.insertObject( "AnotherTestObject_1999", JSON.stringify( source ));
// let theResponse = await source.getObjects( gotData );

console.log( "theResponse: " +  theResponse );
