const { CacheContentTypeConfig } = require("./CacheContentTypeConfig");

const CacheControlResponseMaxAge = Object.freeze({
    /**
     * Do not include maxAge in response Cache-Control
     */
    NONE: "NONE",
    /**
     * Include maxAge in response Cache-Control - set it to maxAge configured in Strategy
     */
    CONFIG: "CONFIG",
});

const CacheControlResponseSMaxAge = Object.freeze({
    /**
     * Do not include s-max-age in response Cache-Control
     */
    NONE: "NONE",
    /**
     * Include s-max-age in response Cache-Control - set it to maxAge configured in Strategy.
     * This is useful for example when you want to instruct CDN to cache the response for the same amount of time
     * your server caches it, and want to instruct devices to cache it shorter periods of time (max-age).
     */
    MAX_AGE: "MAX_AGE",
});

class CacheControlResponseHeaderConfig {
    /**
     * stale-while-revalidate
     * see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#response_directives
     * @type {number | boolean}
     */
    staleWhileRevalidate = false;
    
    /**
     * @type {CacheControlResponseMaxAge | number}
     */
    maxAge = CacheControlResponseMaxAge.NONE;

    /**
     * @type {CacheControlResponseSMaxAge | number}
     */
    sMaxAge = CacheControlResponseSMaxAge.NONE;

    constructor(options = {}) {
        const {
            staleWhileRevalidate = false,
            maxAge = CacheControlResponseMaxAge.NONE,
            sMaxAge = CacheControlResponseSMaxAge.NONE,
        } = options;

        this.staleWhileRevalidate = staleWhileRevalidate;
        this.maxAge = maxAge;
        this.sMaxAge = sMaxAge;
    }
}

module.exports = {
    CacheControlResponseHeaderConfig,
    CacheControlResponseMaxAge,
    CacheControlResponseSMaxAge,
}
