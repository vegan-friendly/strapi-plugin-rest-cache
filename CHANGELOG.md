# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.3.3](https://github.com/vegan-friendly/strapi-plugin-rest-cache/compare/v4.3.2...v4.3.3) (2024-10-02)

### Features

* cache-control response header - allow setting s-max-age

## [4.3.2](https://github.com/vegan-friendly/strapi-plugin-rest-cache/compare/v4.3.1...v4.3.2) (2024-10-02)

### Bug Fixes

* fix maxAge in response headers, when config cacheControlHeader.response.maxAge=CONFIG -
the configured maxAge is in milliseconds, and the response header needs to be in seconds.

## [4.3.1](https://github.com/vegan-friendly/strapi-plugin-rest-cache/compare/v4.2.9...v4.3.1) (2024-09-26)

### Features

* allow setting cache-control response header

## [4.2.8](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.7...v4.2.8) (2023-07-27)

### Bug Fixes

* fix: Remove community eslint, fix router matching, and various other cleanup stuff by @derrickmehaffy in https://github.com/strapi-community/strapi-plugin-rest-cache/pull/61

## [4.2.7](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.6...v4.2.7) (2023-03-15)

### Bug Fixes

* fix(recv): remove transformer plugin by @ComfortablyCoding in https://github.com/strapi-community/strapi-plugin-rest-cache/pull/46

## [4.2.6](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.5...v4.2.6) (2022-12-27)

### Bug Fixes

* Update strapi-plugin-redis to v1.0.1 by @derrickmehaffy in https://github.com/strapi-community/strapi-plugin-rest-cache/pull/39
* Add support for Strapi REST API Prefix by @derrickmehaffy in https://github.com/strapi-community/strapi-plugin-rest-cache/pull/38

## [4.2.5](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.4...v4.2.5) (2022-12-02)

### Bug Fixes

* Install rest memory provider by default by @beebop1032 in https://github.com/strapi-community/strapi-plugin-rest-cache/pull/30
* Fix del function in cacheStore.js, causes cache key not purged properly by @dinhkhanh in https://github.com/strapi-community/strapi-plugin-rest-cache/pull/27
* Transform data before storing in cache by @nystrand1 in https://github.com/strapi-community/strapi-plugin-rest-cache/pull/35

## [4.2.4](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.3...v4.2.4) (2022-03-19)

### Bug Fixes

* **perfs:** split keys computation into smaller functions ([5aba888](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/5aba8888cf132be241ef8a1ced7a83bfb1a626cb))

## [4.2.3](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.2...v4.2.3) (2022-03-18)

### Bug Fixes

* **etag:** send a 304 (Not Modified) when valid If-None-Match header contains multiple values ([ccf936a](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/ccf936a02fbbb04a13bcf8143dd6009a3d1148c5))
* **purge-rest-cache:** cannot purge with redis ([aa1da6d](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/aa1da6da1b2165cabf4de5894eb6179e02ebe633))

## [4.2.2](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.1...v4.2.2) (2022-03-15)

### Bug Fixes

* ensure keyprefix is not undefined ([9134f52](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/9134f52a0ea8a8399db4af59a5dc689742104739))

## [4.2.1](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.2.0...v4.2.1) (2022-03-11)

### Bug Fixes

* empty keys returned by providers ([fb5c79c](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/fb5c79c490309e8bd4458726fe8aedacbfae503b))

## [4.2.0](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.1.0...v4.2.0) (2022-03-09)

### Bug Fixes

* configuration header sort ([c0eec8f](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/c0eec8f475b3b25722fbb5de659212e25f263534))
* route checking should be absolute ([fdf8666](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/fdf866648a98036b8c70500769cf3bcac42671d8))

### Features

* expose new clearByUid and clearByRegexp functions in cacheStore service ([c7d67fd](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/c7d67fd532ccca66df90b3621061ba2d65b70fe1))

## [4.1.0](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.6...v4.1.0) (2022-03-05)

### Bug Fixes

* better path resolution when using custom delimiters ([943393d](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/943393d97fc36e0995884a05bacc9720a7f78fe1))

### Features

* add strategy debug option ([0dda260](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/0dda26065d17f5b884b224616ffe07c2b8fbcba8))

## [4.0.6](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.5...v4.0.6) (2022-03-02)

### Bug Fixes

* only use boostrap lifecycle to register the plugin ([46eaf0b](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/46eaf0bbf60f67c06cf1d8d0ad95f087f68a58b1))

## [4.0.5](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.4...v4.0.5) (2022-03-02)

### Bug Fixes

* pluginId used to register permissions actions ([3376b4a](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/3376b4a74a53e563d50f520cd02f72be0e6ee89d))

## [4.0.4](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.3...v4.0.4) (2022-02-26)

### Bug Fixes

* add missing server entrypoint ([820c967](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/820c967b414c29b19bf4ba483e15692ba613a4d6))
* ignore unexisting routes instead of throwing ([7f06c9d](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/7f06c9d9633d6a07b741f480352bac6ad86b6678))

## [4.0.3](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.2...v4.0.3) (2022-02-26)

### Bug Fixes

* use short plugin name ([7acc0e7](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/7acc0e790f9a2d060943e7d506a45a515ed0988c))

## [4.0.2](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.1...v4.0.2) (2022-02-24)

### Bug Fixes

* use short plugin name ([8daf416](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/8daf41643c2479c0df19a2fe137cae7ec395ec78))

## [4.0.1](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.0...v4.0.1) (2022-02-24)

### Bug Fixes

* empty npm packages ([1fde26a](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/1fde26a1da956c854661b036bc48483c49f9f75e))

## [4.0.0](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.0-alpha.1...v4.0.0) (2022-01-31)

### Bug Fixes

* peerDependencies fixed version ([4b5e317](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/4b5e317ae9319a91f90d7d7fb62fbcb7401d67af))

### Features

* **core:** add keysPrefix strategy option ([8ed2149](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/8ed21495fadd2d2d709c741c3bccdc48d17376bd))

## [4.0.0-alpha.1](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v4.0.0-alpha.0...v4.0.0-alpha.1) (2022-01-31)

### Bug Fixes

* peerDependencies fixed version ([f43ef96](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/f43ef96b87c274618ecd041b733ecfa22c824c74))

## [4.0.0-alpha.0](https://github.com/strapi-community/strapi-plugin-rest-cache/compare/v1.0.1-alpha.0...v4.0.0-alpha.0) (2022-01-31)

### Bug Fixes

* **redis:** remove ready listener on error ([9a90fa2](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/9a90fa2938650a826dcf293ddda292d8d8f3a175))

* feat(core)!: add keys alterations options ([a4214f2](https://github.com/strapi-community/strapi-plugin-rest-cache/commit/a4214f2fb90259400c1c5a9701b83221ac2fa1bb))

### BREAKING CHANGES

* move headers to keys.useHeaders
add keys.useQueryParams option
