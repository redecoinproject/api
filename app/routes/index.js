import Ember from 'ember';
import RSVP from 'rsvp';
import config from '../config/environment';

export default Ember.Route.extend({
    intl: Ember.inject.service(),
    beforeModel() {
        this.get('intl').setLocale('en-in');
    },   
    model: function () {
        var url_eth = config.APP.ETH.ApiUrl + 'api/stats'; 
        var url_etc = config.APP.ETC.ApiUrl + 'api2/stats'; 
        
      return RSVP.hash({
        model_eth:Ember.$.getJSON(url_eth).then(function (data) {
            return Ember.Object.create(data);
        
        }),
         model_etc:Ember.$.getJSON(url_etc).then(function (data) {
            return Ember.Object.create(data);
        
        }),
    });
        
      
        
    },
  
    setupController: function (controller, model) {
        this._super(controller, model);
        Ember.run.later(this, this.refresh, 5000);
    }
});
