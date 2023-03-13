"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceConnection = void 0;
class DataSourceConnection {
    constructor(dataSourse) {
        this.dataSourse = dataSourse;
        this.dataSourse.initialize();
        this._dataSourse = this.dataSourse;
    }
    async connection() {
        return this._dataSourse;
    }
}
exports.DataSourceConnection = DataSourceConnection;
