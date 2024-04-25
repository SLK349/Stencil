'use strict';

const index = require('./index-a370c7e1.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const getCapacitor = () => {
    if (index.win !== undefined) {
        return index.win.Capacitor;
    }
    return undefined;
};

exports.getCapacitor = getCapacitor;

//# sourceMappingURL=capacitor-97b4d9f3.js.map