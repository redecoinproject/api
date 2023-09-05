import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

    get config_eth() {
        return config.APP.ETH  ;
    },

    height_eth: Ember.computed('model.model_eth.nodes', {
        get() {
            var node = this.get('bestNode_eth');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_eth: Ember.computed('model.model_eth.stats', {
        get() {
            return parseInt(this.get('model.model_eth.stats.roundShares'));
        }
    }),
    
    ethinr_eth: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_eth.exchangedata.price_inr'));
        }
    }),
    
     ethusd_eth: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_eth.exchangedata.price_usd'));
        }
    }),

    difficulty_eth: Ember.computed('model.model_eth.nodes', {
        get() {
            var node = this.get('bestNode_eth');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_eth: Ember.computed('difficulty_eth', {
        get() {
            return this.getWithDefault('difficulty_eth', 0) / config.APP.MUSIC.BlockTime;
        }
    }),

    immatureTotal_eth: Ember.computed('model.model_eth', {
        get() {
            return this.getWithDefault('model.model_eth.immatureTotal', 0) + this.getWithDefault('model.model_eth.candidatesTotal', 0);
        }
    }),

    bestNode_eth: Ember.computed('model.model_eth.nodes', {
        get() {
            var node = null;
            this.get('model.model_eth.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_eth: Ember.computed('model.model_eth.', {
        get() {
            return parseInt(this.get('model.model_eth.lastBlockFound')) || 0;
        }
    }),

    roundVariance_eth: Ember.computed('model.model_eth.', {
        get() {
            var percent = (this.get('model.model_eth.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),
   
    nextEpoch_eth: Ember.computed('height_eth', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_eth', 1) % 30000)) * 1000 * this.get('config_eth').BlockTime;
            return Date.now() + epochOffset;
        }
    }),
    
    get config_etc() {
        return config.APP.ETC  ;
    },

    height_etc: Ember.computed('model.model_etc.nodes', {
        get() {
            var node = this.get('bestNode_etc');
            if (node) {
                return node.height;
            }
            return 0;
        }
    }),

    roundShares_etc: Ember.computed('model.model_etc.stats', {
        get() {
            return parseInt(this.get('model.model_etc.stats.roundShares'));
        }
    }),
    
    ethinr_etc: Ember.computed('stats', {
        get() {
            return parseFloat(this.get('model.model_etc.exchangedata.price_inr'));
        }
    }),
    
     ethusd_etc: Ember.computed({
        get() {
            return parseFloat(this.get('model.model_etc.exchangedata.price_usd'));
        }
    }),

    difficulty_etc: Ember.computed('model.model_etc.nodes', {
        get() {
            var node = this.get('bestNode_etc');
            if (node) {
                return node.difficulty;
            }
            return 0;
        }
    }),

    hashrate_etc: Ember.computed('difficulty_etc', {
        get() {
            return this.getWithDefault('difficulty_etc', 0) / config.APP.ETC.BlockTime;
        }
    }),

    immatureTotal_etc: Ember.computed('model.model_etc', {
        get() {
            return this.getWithDefault('model.model_etc.immatureTotal', 0) + this.getWithDefault('model.model_etc.candidatesTotal', 0);
        }
    }),

    bestNode_etc: Ember.computed('model.model_etc.nodes', {
        get() {
            var node = null;
            this.get('model.model_etc.nodes').forEach(function (n) {
                if (!node) {
                    node = n;
                }
                if (node.height < n.height) {
                    node = n;
                }
            });
            return node;
        }
    }),

    lastBlockFound_etc: Ember.computed('model.model_etc.', {
        get() {
            return parseInt(this.get('model.model_etc.lastBlockFound')) || 0;
        }
    }),

    roundVariance_etc: Ember.computed('model.model_etc.', {
        get() {
            var percent = (this.get('model.model_etc.stats.roundShares')* 4000000000) / this.get('difficulty');
            if (!percent) {
                return 0;
            }
            return percent.toFixed(2);
        }
    }),
   
    nextEpoch_etc: Ember.computed('height_etc', {
        get() {
            var epochOffset = (30000 - (this.getWithDefault('height_etc', 1) % 30000)) * 1000 * this.get('config_etc').BlockTime;
            return Date.now() + epochOffset;
        }
    }),
    
    
    
    
    
   
    
});
