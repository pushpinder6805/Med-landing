import { service } from "@ember/service";
import { action } from "@ember/object";

export default {
  @service router,

  @action
  goToLogin() {
    this.router.transitionTo("login");
  },
};

