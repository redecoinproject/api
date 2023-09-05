/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'generalapi',
        environment: environment,
        rootURL: '/',
        locationType: 'hash',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            WebsiteName : 'redecoin.eu',
            Currency : 'USD',

        ETH: {
            // API host and port
            ApiUrl: '//pool.redecoin.eu/',

            // HTTP mining endpoint
            HttpHost: 'http://pool.redecoin.eu',
            HttpPort: 40001,

            // Stratum mining endpoint
            StratumHost: 'eth-us01.daggerpool.com',
            StratumPort: 40011,

            StratumHost1: 'eth-uk01.daggerpool.com',
            StratumPort1: 40011,

            NicehashHost: 'eth-nh.daggerpool.com',
            NicehashPost: 40021,

            // Fee and payout details
            PoolFee: '0.99%',
            PayoutThreshold: '0.1',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Ethereum',
            CoinShortName: 'ETH',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'eth.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'https://etherscan.io/address/',
	    TransactionAddress : 'https://etherscan.io/tx/',
            UncleAddress : 'https://etherscan.io/uncle/',
            BlockAddress : 'https://etherscan.io/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },
        ETC: {
            // API host and port
            ApiUrl: '//pool2.redecoin.eu/',

            // HTTP mining endpoint
            HttpHost: 'http://pool.redecoin.eu',
            HttpPort: 40002,

            // Stratum mining endpoint
            StratumHost: 'etc-us01.daggerpool.com',
            StratumPort: 9009,

            StratumHost1: 'etc-uk01.daggerpool.com',
            StratumPort1: 9009,

            NicehashHost: 'etc-nh.daggerpool.com',
            NicehashPost: 40022,

            // Fee and payout details
            PoolFee: '0.9%',
            PayoutThreshold: '0.5',
            ShareDifficulty: '4000000000',

            //Current and Localization
            Currency: 'USD',
            CoinName: 'Ethereum Classic',
            CoinShortName: 'ETC',
            PaymentText: 'every 2 hours',
            SupportMail: 'helpdesk@daggerpool.com',
            SupportHelpdesk: 'http://helpdesk.daggerpool.com',
            WebsiteName: 'etc.daggerpool.com',

            //Coin Bases Settings
            ChainAddress : 'https://gastracker.io/addr/',
	    TransactionAddress : 'https://gastracker.io/tx/',
            UncleAddress : 'https://gastracker.io/uncle/',
            BlockAddress : 'https://gastracker.io/block/',

            //Twitter Parameter
            TwitterURL: 'https://twitter.com/',
            TwitterHash: 'daggerpool_com',


            // For network hashrate (change for your favourite fork)
            BlockTime: 15


        },



        }
    };

    if (environment === 'development') {
        /* Override ApiUrl just for development, while you are customizing
         frontend markup and css theme on your workstation.
         */
        ENV.APP.ETH.ApiUrl = 'https://pool.redecoin.eu/'
        ENV.APP.ETC.ApiUrl = 'https://pool2.redecoin.eu/'
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.baseURL = '/ember-cli-twitter-feed/';
    }

    ENV.contentSecurityPolicy = {
        'script-src': [
            "'self'",
            'https://syndication.twitter.com',
			            'https://cdn.syndication.twimg.com',
            "'sha256-XnNQECY9o-nIv2Qgcd1A39YarwxTm10rhdzegH_JBxY='"],
        'style-src': [
            "'self'",
            'http://platform.twitter.com',
            "'sha256-zCvYlDs6LsUp0EqrJFjIGUiM_AG2fGlkNrzJ2YiBTG0='"],
        'img-src': [
            "'self'",
            'data:',
            'https://pbs.twimg.com',
            'https://syndication.twitter.com',
            'http://platform.twitter.com']
    };
    return ENV;
};
