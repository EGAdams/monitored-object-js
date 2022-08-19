import DataSource from './DataSource.js';
import MonitoredObjectConfig from './MonitoredObjectConfig.js';

const config = { "url": "http://localhost:52707//DataSource.php" };
const source = new DataSource( new MonitoredObjectConfig( config ));
source.postFetchTest( "42" );