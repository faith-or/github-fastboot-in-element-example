import Component from '@glimmer/component';

export default class wrapper extends Component {

  get destinationElement() {
    return document ? document.getElementById('tom-dale') : null;
  }
}
