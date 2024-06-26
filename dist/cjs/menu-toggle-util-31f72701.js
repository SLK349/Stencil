'use strict';

const index = require('./index-f91760f5.js');

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
// Given a menu, return whether or not the menu toggle should be visible
const updateVisibility = async (menu) => {
    const menuEl = await index.menuController.get(menu);
    return !!(menuEl && (await menuEl.isActive()));
};

exports.updateVisibility = updateVisibility;

//# sourceMappingURL=menu-toggle-util-31f72701.js.map