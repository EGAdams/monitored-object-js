import MonitorLedClassObject from "./MonitorLedClassObject.js";
/** @class MonitorLedData */

class MonitorLedData {
    constructor() {
        this.classObject = new MonitorLedClassObject();
        this.ledText     = "ready.";
    }

}

export default MonitorLedData;
