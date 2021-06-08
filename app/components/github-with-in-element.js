import Component from '@glimmer/component';

export default class githubWithInElement extends Component {

  get destinationElement() {
    return document ? document.getElementById('tom-dale') : null;
  }
}
