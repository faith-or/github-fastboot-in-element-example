import Route from '@ember/routing/route';
import fetch from 'fetch';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {

  @service
  fastboot;

  model() {
    return fetch('https://api.github.com/users/tomdale')
      .then(function(response) {
        return response.json();
      });
  }

  setupController(controller, model) {
    controller.set('isNotFastBoot', !this.fastboot.isFastBoot);
  }
}
