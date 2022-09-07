import MonitorLedClassObject from "./MonitorLedClassObject.js";
/** @class MonitorLedData */

class MonitorLedData {
    constructor() {
        this.classObject   = new MonitorLedClassObject();
        this.ledText       = "ready."
        this.RUNNING_COLOR = "lightyellow";
        this.PASS_COLOR    = "lightgreen";
        this.FAIL_COLOR    = "#fb6666";
    }
}

export default MonitorLedData;
