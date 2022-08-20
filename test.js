import DataSource from './DataSource.js';
import MonitoredObjectConfig from './MonitoredObjectConfig.js';

const config = { "url": "https://americansjewelry.com/test2/runQ.php/index.php/user/list?limit=20" };
// const config = { "url": "http://localhost:60191/index.php/user/list?limit=20" };
const source = new DataSource( new MonitoredObjectConfig( config ));
let theResponse = await source.getObjects();
console.log( "theResponse: " +  theResponse );