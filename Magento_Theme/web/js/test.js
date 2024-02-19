/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent'
], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Magento_Theme/test',
            childText: 'It works!'
        },

        initialize: function () {
            this._super();

            return this;
        }
    });
});
