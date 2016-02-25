'use strict';

var AppRoutes = {
  cards: {scene: require('../scenes/CardsScene'), navTitle: 'Cards', useMainNav: true},
  services: {scene: require('../scenes/ServicesScene'), navTitle: 'Services', useMainNav: true}
}

var Routes = {
    getRoute: function(scene) {
      if(AppRoutes[scene]) {
        return AppRoutes[scene];
      }
      throw new Error('No route found for scene ' + scene);
    }
}

module.exports = Routes;
