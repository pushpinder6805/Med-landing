import Component from "@glimmer/component";
import { service } from "@ember/service";
import { action } from "@ember/object";

export default class CustomHomepageContent extends Component {
  @service router;

  get isCustomHomepage() {
    return this.router?.currentURL === "/";
  }

  @action
  openLogin() {
    this.router.transitionTo("login");
  }
}

