import DataSource from './DataSource.js';
import MonitoredObjectConfig from './MonitoredObjectConfig.js';

const port = "50615";
// const config = { "url": "https://americansjewelry.com/test2/runQ.php/index.php/user/list?limit=20" };
const config = { "url": "http://localhost:" + port + "/index.php/user/list?limit=20" };
// const config = { "url": "https://americansjewelry.com/test2/runQ.php/index.php/insert" };
// const config = { "url": "http://localhost:" + port + "/index.php/user/insert" };
const source = new DataSource( new MonitoredObjectConfig( config ));

// let theResponse = await source.insertObject( "TestObject_1999", JSON.stringify( source ));
let theResponse = await source.getObjects();

console.log( "theResponse: " +  theResponse );