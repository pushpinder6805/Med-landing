import Component from "@glimmer/component";
import { service } from "@ember/service";

export default class CustomHomepageContent extends Component {
  @service router;

  get isCustomHomepage() {
    const currentURL = this.router?.currentURL;

    if (!currentURL) {
      return false;
    }

    return currentURL === "/";
  }
}

