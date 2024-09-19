'use strict';

const { CacheControlResponseHeaderConfig } = require("./CacheControlResponseHeaderConfig");


/**
 * CacheControlHeaderConfig.js
 */
class CacheControlHeaderConfig {

    /**
     * @type {CacheControlResponseHeaderConfig}
     */
    response = null;

    constructor(options = {}) {
        const {
            response = null,
        } = options;

        this.response = response;
    }
}

module.exports = { CacheControlHeaderConfig };