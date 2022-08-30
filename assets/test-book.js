"use strict";



define('test-book/app', ['exports', 'test-book/resolver', 'ember-load-initializers', 'test-book/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('test-book/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('test-book/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('test-book/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('test-book/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('test-book/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('test-book/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('test-book/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('test-book/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('test-book/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('test-book/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('test-book/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('test-book/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('test-book/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('test-book/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('test-book/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('test-book/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('test-book/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('test-book/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('test-book/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('test-book/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('test-book/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('test-book/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('test-book/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('test-book/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('test-book/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('test-book/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('test-book/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('test-book/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('test-book/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('test-book/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('test-book/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('test-book/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('test-book/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('test-book/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('test-book/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('test-book/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('test-book/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('test-book/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('test-book/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('test-book/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('test-book/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('test-book/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('test-book/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('test-book/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('test-book/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('test-book/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('test-book/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('test-book/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('test-book/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('test-book/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('test-book/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('test-book/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('test-book/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('test-book/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('test-book/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('test-book/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('test-book/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('test-book/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('test-book/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('test-book/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('test-book/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('test-book/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('test-book/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('test-book/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
define('test-book/controllers/books', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        init: function init() {
            this._super.apply(this, arguments);
            this.set('book', Ember.Object.create());
        },


        actions: {
            editBook: function editBook() {
                this.transitionToRoute('edit-book');
            }
        },
        queryParams: ["search"],
        search: ''
    });
});
define('test-book/controllers/edit-meeting', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            editReport: function editReport() {
                this.transitionToRoute('edit-report');
            }
        }
    });
});
define('test-book/controllers/meetings', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            editMeeting: function editMeeting() {
                this.transitionToRoute('edit-meeting');
            }
        }
    });
});
define('test-book/controllers/speakers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            editSpeaker: function editSpeaker() {
                this.transitionToRoute('edit-speaker');
            }
        }
    });
});
define('test-book/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('test-book/helpers/app-version', ['exports', 'test-book/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('test-book/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('test-book/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('test-book/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('test-book/helpers/get-book', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBook = getBook;
  function getBook(params /*, hash*/) {
    return params;
  }

  exports.default = Ember.Helper.helper(getBook);
});
define('test-book/helpers/get-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSpeaker = getSpeaker;
  function getSpeaker(params /*, hash*/) {
    return params;
  }

  exports.default = Ember.Helper.helper(getSpeaker);
});
define('test-book/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('test-book/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('test-book/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('test-book/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('test-book/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('test-book/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('test-book/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('test-book/helpers/url', ['exports', 'test-book/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.url = url;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function url(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        property = _ref2[0];

    return Ember.get(_environment.default, property);
  }

  exports.default = Ember.Helper.helper(url);
});
define('test-book/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'test-book/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('test-book/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('test-book/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('test-book/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('test-book/initializers/export-application-global', ['exports', 'test-book/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('test-book/initializers/load-bootstrap-config', ['exports', 'test-book/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define("test-book/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('test-book/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('test-book/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('test-book/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('test-book/router', ['exports', 'test-book/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('meetings');
    this.route('books');
    this.route('speakers');
    this.route('edit-book', { path: 'books/edit-book' });
    this.route('edit-speaker', { path: 'speakers/edit-speaker' });
    this.route('edit-meeting', { path: 'meetings/edit-meeting' });
    this.route('edit-report', { path: 'meetings/edit-meeting/edit-report' });
    this.route('404', { path: '*path' });
  });

  exports.default = Router;
});
define('test-book/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('test-book/routes/books', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Route.extend({
        dataService: Ember.inject.service('data'),
        queryParams: {
            search: {
                refreshModel: true
            },
            tag: {
                refreshModel: true
            }
        },

        model: function model(queryParams) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                Ember.run.later(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var books;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    if (!queryParams.search) {
                                        _context.next = 7;
                                        break;
                                    }

                                    _context.next = 4;
                                    return _this.get("dataService").getBooksInfo(queryParams.search);

                                case 4:
                                    _context.t0 = _context.sent;
                                    _context.next = 10;
                                    break;

                                case 7:
                                    _context.next = 9;
                                    return _this.get("dataService").getBooksInfo();

                                case 9:
                                    _context.t0 = _context.sent;

                                case 10:
                                    books = _context.t0;

                                    if (!queryParams.tag) {
                                        _context.next = 17;
                                        break;
                                    }

                                    _context.next = 14;
                                    return _this.get("dataService").getBooksInfo(queryParams.tag);

                                case 14:
                                    _context.t1 = _context.sent;
                                    _context.next = 20;
                                    break;

                                case 17:
                                    _context.next = 19;
                                    return _this.get("dataService").getBooksInfo();

                                case 19:
                                    _context.t1 = _context.sent;

                                case 20:
                                    books = _context.t1;

                                    if (!queryParams) {
                                        _context.next = 27;
                                        break;
                                    }

                                    _context.next = 24;
                                    return _this.get("dataService").getBooksInfo(queryParams.search, queryParams.tag);

                                case 24:
                                    _context.t2 = _context.sent;
                                    _context.next = 30;
                                    break;

                                case 27:
                                    _context.next = 29;
                                    return _this.get("dataService").getBooksInfo();

                                case 29:
                                    _context.t2 = _context.sent;

                                case 30:
                                    books = _context.t2;

                                    resolve(books);
                                    _context.next = 37;
                                    break;

                                case 34:
                                    _context.prev = 34;
                                    _context.t3 = _context['catch'](0);

                                    reject('Connection failed');

                                case 37:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this, [[0, 34]]);
                })));
            });
        },

        actions: {
            loading: function loading() {
                return false;
            }
        }
    });
});
define('test-book/routes/books/edit-book', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('test-book/routes/edit-book', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('test-book/routes/edit-meeting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('test-book/routes/edit-report', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('test-book/routes/edit-speaker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('test-book/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('test-book/routes/meetings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('test-book/routes/speakers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Route.extend({
        dataService: Ember.inject.service('data'),
        queryParams: {
            name: {
                refreshModel: true
            }
        },

        model: function model(_ref) {
            var _this = this;

            var name = _ref.name;

            return new Promise(function (resolve, reject) {
                Ember.run.later(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var nameSpeaker;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    if (!name) {
                                        _context.next = 7;
                                        break;
                                    }

                                    _context.next = 4;
                                    return _this.get("dataService").getSpeakersInfo(name);

                                case 4:
                                    _context.t0 = _context.sent;
                                    _context.next = 10;
                                    break;

                                case 7:
                                    _context.next = 9;
                                    return _this.get("dataService").getSpeakersInfo();

                                case 9:
                                    _context.t0 = _context.sent;

                                case 10:
                                    nameSpeaker = _context.t0;

                                    resolve(nameSpeaker);
                                    _context.next = 17;
                                    break;

                                case 14:
                                    _context.prev = 14;
                                    _context.t1 = _context['catch'](0);

                                    reject('Connection failed');

                                case 17:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this, [[0, 14]]);
                })));
            });
        },

        actions: {
            loading: function loading() {
                return false;
            }
        }
    });
});
define('test-book/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('test-book/services/data', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        getBooksInfo: function getBooksInfo(search, tag) {
            var queryParams = '';
            if (search) {
                queryParams = '?q=' + search;
            }
            if (tag) {
                queryParams = '?tags_like=' + tag;
            }
            if (search && tag) {
                queryParams = '?q=' + search + '&tags_like=' + tag;
            }
            return fetch('http://localhost:3000/books/' + queryParams).then(function (response) {
                return response.json();
            });
        },
        getSpeakersInfo: function getSpeakersInfo(name) {
            var queryParams = '';
            if (name) {
                queryParams = '?full_name_like=' + name;
            }
            return fetch('http://localhost:3000/speakers' + queryParams).then(function (response) {
                return response.json();
            });
        }
    });
});
define("test-book/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hkPHHyTG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop additional-routes-wrapper\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"wrapper-image additional-routes\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/images/404.jpg\"],[10,\"alt\",\"404\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/404.hbs" } });
});
define("test-book/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ouUg5At0", "block": "{\"symbols\":[],\"statements\":[[6,\"body\"],[10,\"class\",\"home-page\"],[8],[0,\"\\n    \"],[6,\"nav\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/logo-dark.png\"]]],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n    \\t\\tКнижный клуб\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item active\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"                        Рабочий стол\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"meetings\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"                        Встречи клуба\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"                        Книги\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"\\t\\t\\t\\t    \\tСпикеры\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-success\"],[10,\"href\",\"#\"],[8],[0,\"Оставить заявку\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-primary\"],[10,\"href\",\"#\"],[8],[0,\"Запланировать\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link text-info\"],[10,\"href\",\"register.html\"],[8],[0,\"Регистрация\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"login.html\"],[8],[0,\"Войти\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n\\n\\t\"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n\\t\\t  \\t\"],[6,\"span\"],[8],[0,\"© New Platform Ltd., 2022\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/application.hbs" } });
});
define("test-book/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZRNZFloO", "block": "{\"symbols\":[\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Книги\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n        \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить книгу\"],[10,\"type\",\"button\"],[8],[0,\"\\n          \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"placeholder\",\"aria-label\",\"value\"],[\"form-control mr-2 search-long\",\"search\",\"Найти по полям\",\"Найти по полям\",[22,[\"search\"]]]]],false],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \"],[1,[26,\"input\",null,[[\"class\",\"type\",\"placeholder\",\"aria-label\",\"value\"],[\"form-control mr-2\",\"tags\",\"Поиск по тегам\",\"Найти по тегам\",[22,[\"tag\"]]]]],false],[0,\"\\n          \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Поиск\"],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3 fix-margin\"],[8],[0,\"\\n\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[11,\"id\",[27,[[21,1,[\"id\"]]]]],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n            \"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],[21,1,[\"cover\"]]]]],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Обложка книги\"],[8],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card-header\"],[8],[0,\"\\n                \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[21,1,[\"title\"]],false],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"ul\"],[10,\"class\",\"list-group list-group-flush\"],[8],[0,\"\\n              \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Автор\"],[9],[0,\": \"],[1,[21,1,[\"author\"]],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Количество страниц\"],[9],[0,\": \"],[1,[21,1,[\"number_pages\"]],false],[9],[0,\"\\n                \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Теги\"],[9],[0,\": \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"tag-link\"],[8],[6,\"span\"],[10,\"class\",\"small\"],[8],[1,[21,1,[\"tags\"]],false],[9],[9],[9],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                    Рейтинг:\\n                  \"],[9],[0,\"\\n                  \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                      \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 25%;\"],[10,\"aria-valuenow\",\"25\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[1,[21,1,[\"rating\"]],false],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                  \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"card-link line-offset\"],[8],[0,\"Описание\"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editBook\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                      \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n\\n                  \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                      \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                      \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/books.hbs" } });
});
define('test-book/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('test-book/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("test-book/templates/edit-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rqDLp+/K", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование книги: Название\"],[9],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Название\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputTitle\"],[10,\"placeholder\",\"Полное название книги\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputAuthor\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Автор\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputAuthor\"],[10,\"placeholder\",\"Фамилия И.О. автора\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputPagesCount\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Объем\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPagesCount\"],[10,\"placeholder\",\"Количество страниц книги\"],[10,\"type\",\"number\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputDescriptionURL\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Описание\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputDescriptionURL\"],[10,\"placeholder\",\"Ссылка на сайт с описанием книги\"],[10,\"type\",\"url\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"customFile\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Обложка\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"input-group input-group-lg col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"custom-file\"],[8],[0,\"\\n                        \"],[6,\"input\"],[10,\"class\",\"custom-file-input\"],[10,\"id\",\"customFile\"],[10,\"lang\",\"ru\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n                        \"],[6,\"label\"],[10,\"class\",\"custom-file-label form-control-lg placeholder-color\"],[10,\"for\",\"customFile\"],[10,\"data-browse\",\"Выбрать\"],[8],[0,\"Выберите файл\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                        \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary custom-file-clear\"],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"X\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputTags\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Теги\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control\"],[10,\"id\",\"inputPatronymic\"],[10,\"placeholder\",\"#Теги через запятую\"],[10,\"type\",\"text\"],[8],[9],[0,\" \\n                    \"],[6,\"select\"],[10,\"multiple\",\"multiple\"],[10,\"data-role\",\"tagsinput\"],[10,\"style\",\"display: none;\"],[10,\"id\",\"inputTags\"],[8],[0,\"\\n                        \"],[6,\"option\"],[10,\"value\",\"суперкнига\"],[10,\"selected\",\"selected\"],[8],[0,\"суперкнига\"],[9],[0,\"\\n                        \"],[6,\"option\"],[10,\"value\",\"программирование\"],[10,\"selected\",\"selected\"],[8],[0,\"программирование\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Отмена\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/edit-book.hbs" } });
});
define("test-book/templates/edit-meeting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "h6jQdJup", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование встречи\"],[9],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n                \"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                            \"],[6,\"input\"],[10,\"placeholder\",\"Дата...\"],[10,\"class\",\"form-control\"],[10,\"id\",\"meetingDate\"],[10,\"value\",\"24.10.2020\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                                \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                        \"],[6,\"h4\"],[8],[0,\"Список докладов\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                        \"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[10,\"type\",\"button\"],[8],[0,\"\\n                            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus-square card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"d\",\"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z\"],[8],[9],[0,\"\\n                                \"],[6,\"path\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\t\\t\\t\\t\\t\\t\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n                    \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n                                \"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n                                \"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n                                    \"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n                                        Оценка:\\n                                    \"],[9],[0,\"\\n                                    \"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n                                        \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                                            \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 75%;\"],[10,\"aria-valuenow\",\"75\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"75%\"],[9],[0,\"\\n                                        \"],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-4 d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[0,\"\\n                                    Molestiae molestiae saepe commodi delectus possimus nobis et. Assumenda sunt blanditiis. Pariatur et aut molestiae nihil. Blanditiis explicabo autem error. Qui aperiam sunt earum quod aut deserunt corporis accusamus.\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter d-inline-block align-middle\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n                                \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                                \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"row align-items-center col-md-2\"],[8],[0,\"\\n                                \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-right\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editReport\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                                \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-left\"],[10,\"type\",\"button\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                    \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n                                \"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n                                \"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n                                    \"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n                                        Оценка:\\n                                    \"],[9],[0,\"\\n                                    \"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n                                        \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                                            \"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 90%;\"],[10,\"aria-valuenow\",\"90\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"90%\"],[9],[0,\"\\n                                        \"],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-4\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n                                \"],[6,\"p\"],[8],[0,\"\\n                                    Sapiente possimus temporibus eligendi id ea voluptate sit. Qui dolore tempore assumenda est quis et ut ut. Fugit reiciendis harum. Iusto magni aut illo in nesciunt reprehenderit. Porro ut aliquam autem vel.\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n                                \"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n                                \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                                \"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"col-md-2 row align-items-center\"],[8],[0,\"\\n                                \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-right\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editReport\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                                \"],[6,\"button\"],[10,\"class\",\"btn pl-2 pr-2 col-md-6 text-left\"],[10,\"type\",\"button\"],[8],[0,\"\\n                                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                        \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                                    \"],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Отмена\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/edit-meeting.hbs" } });
});
define("test-book/templates/edit-report", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5VBj8npN", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование доклада\"],[9],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"reportDate\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Дата доклада\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n                        \"],[6,\"input\"],[10,\"placeholder\",\"Дата...\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"reportDate\"],[10,\"value\",\"24.10.2020\"],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n                            \"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n                                \"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n                                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputMark\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Оценка книги\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"min\",\"1\"],[10,\"max\",\"5\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputMark\"],[10,\"placeholder\",\"Введите оценку\"],[10,\"type\",\"number\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputPresentation\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"URL презентации\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPresentation\"],[10,\"placeholder\",\"Введите URL презентации\"],[10,\"type\",\"url\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputVideo\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"URL видео\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputVideo\"],[10,\"placeholder\",\"Введите URL видео\"],[10,\"type\",\"url\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputBook\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Книга\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"select\"],[10,\"class\",\"selectpicker form-control form-control-lg\"],[10,\"id\",\"inputBook\"],[10,\"data-live-search\",\"true\"],[10,\"data-size\",\"5\"],[10,\"title\",\"Выберите книгу...\"],[8],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Книга 1\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Книга 2\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Книга 3\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Книга 4\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Книга 5\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Книга 6\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Книга 7\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\t\\t\\t\\t\\t\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputSpeaker\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Спикер\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"select\"],[10,\"class\",\"selectpicker form-control form-control-lg\"],[10,\"id\",\"inputSpeaker\"],[10,\"data-live-search\",\"true\"],[10,\"data-size\",\"5\"],[10,\"title\",\"Выберите спикера...\"],[8],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Фамилия Имя 1\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Фамилия Имя 2\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Фамилия Имя 3\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Фамилия Имя 4\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Фамилия Имя 5\"],[9],[0,\"\\n                        \"],[6,\"option\"],[8],[0,\"Фамилия Имя 6\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\t\\t\\t\\t\\t\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputReview\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Рецензия\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"textarea\"],[10,\"id\",\"inputReview\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPatronymic\"],[10,\"placeholder\",\"Введите рецензию\"],[10,\"rows\",\"4\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Отмена\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/edit-report.hbs" } });
});
define("test-book/templates/edit-speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GaFZyhH0", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование спикера: Имя Фамилия\"],[9],[0,\"\\n        \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputSurname\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Фамилия\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputSurname\"],[10,\"placeholder\",\"Введите фамилию\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputName\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Имя\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputName\"],[10,\"placeholder\",\"Введите имя\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"label\"],[10,\"for\",\"inputPatronymic\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Отчество\"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                    \"],[6,\"input\"],[10,\"class\",\"form-control form-control-lg\"],[10,\"id\",\"inputPatronymic\"],[10,\"placeholder\",\"Введите отчество\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Отмена\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/edit-speaker.hbs" } });
});
define("test-book/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D32CJLdK", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop additional-routes-wrapper\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"wrapper-image additional-routes\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/images/error.png\"],[10,\"alt\",\"error\"],[10,\"class\",\"error-image\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/error.hbs" } });
});
define("test-book/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K4IJIHP5", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center h-100 home-page-nav\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"meetings\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Книги\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/index.hbs" } });
});
define("test-book/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "wBUtT3qI", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"htop additional-routes-wrapper\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"wrapper-image additional-routes\"],[8],[0,\"\\n            \"],[6,\"img\"],[10,\"src\",\"/images/loading.gif\"],[10,\"alt\",\"loading\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/loading.hbs" } });
});
define("test-book/templates/meetings", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nO8JqxEK", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between align-items-end\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-1\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить встречу\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-3 align-top\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"h5\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"select\"],[10,\"class\",\"selectpicker form-control dropdown-filter-control\"],[10,\"data-live-search\",\"true\"],[10,\"data-size\",\"5\"],[10,\"title\",\"Спикер...\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Фамилия имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Фамилия имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Фамилия имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Фамилия имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Фамилия имя\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"h5\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"select\"],[10,\"class\",\"selectpicker form-control dropdown-filter-control\"],[10,\"data-live-search\",\"true\"],[10,\"data-size\",\"5\"],[10,\"title\",\"Книга...\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"option\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-3\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"h5\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"form-group py-2 my-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"datepicker date input-group p-0 w-100\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"input\"],[10,\"placeholder\",\"Дата...\"],[10,\"class\",\"form-control\"],[10,\"id\",\"meetingDateFilter\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto text-right col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-funnel card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary my-2\"],[10,\"disabled\",\"disabled\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-x card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"input\"],[10,\"placeholder\",\"Дата встречи\"],[10,\"class\",\"form-control meeting-date\"],[10,\"value\",\"24.10.2020\"],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editMeeting\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Список докладов\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 75%;\"],[10,\"aria-valuenow\",\"75\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"75%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\tMolestiae molestiae saepe commodi delectus possimus nobis et. Assumenda sunt blanditiis. Pariatur et aut molestiae nihil. Blanditiis explicabo autem error. Qui aperiam sunt earum quod aut deserunt corporis accusamus. Quia numquam est magnam cumque.\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 90%;\"],[10,\"aria-valuenow\",\"90\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"90%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\tSapiente possimus temporibus eligendi id ea voluptate sit. Qui dolore tempore assumenda est quis et ut ut. Fugit reiciendis harum. Iusto magni aut illo in nesciunt reprehenderit. Porro ut aliquam autem vel. Dolorum officiis nobis ducimus dolorem nulla laudantium deleniti mollitia recusandae.\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 100%;\"],[10,\"aria-valuenow\",\"100\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"100%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\tEum non qui tempore. Omnis debitis ut tenetur vero esse quia. Animi eum non vel consectetur unde voluptas modi qui error.\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"input\"],[10,\"placeholder\",\"Дата...\"],[10,\"class\",\"form-control meeting-date\"],[10,\"value\",\"03.11.2020\"],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editMeeting\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Список докладов\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 75%;\"],[10,\"aria-valuenow\",\"75\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"75%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\tMolestiae molestiae saepe commodi delectus possimus nobis et. Assumenda sunt blanditiis. Pariatur et aut molestiae nihil. Blanditiis explicabo autem error. Qui aperiam sunt earum quod aut deserunt corporis accusamus. Quia numquam est magnam cumque.\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 75%;\"],[10,\"aria-valuenow\",\"75\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"75%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\tEum non qui tempore. Omnis debitis ut tenetur vero esse quia. Animi eum non vel consectetur unde voluptas modi qui error.\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"border border-dark rounded p-4 mb-4\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Дата встречи\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between mb-4\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"datepicker datepicker-meeting date input-group p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"input\"],[10,\"placeholder\",\"Дата...\"],[10,\"class\",\"form-control meeting-date\"],[10,\"value\",\"12.11.2020\"],[10,\"disabled\",\"disabled\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"class\",\"input-group-text px-4\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"width\",\"1em\"],[10,\"height\",\"1em\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-clock\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editMeeting\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"h4\"],[8],[0,\"Список докладов\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"list-group\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 75%;\"],[10,\"aria-valuenow\",\"75\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"75%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\tMolestiae molestiae saepe commodi delectus possimus nobis et. Assumenda sunt blanditiis. Pariatur et aut molestiae nihil. Blanditiis explicabo autem error. Qui aperiam sunt earum quod aut deserunt corporis accusamus. Quia numquam est magnam cumque.\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row h-100 justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Спикер\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],\"images/speaker.jpg\"]]],[10,\"class\",\"rounded w-100\"],[10,\"alt\",\"Спикер\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Фамилия Имя\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Книга\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Название книги\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"Автор\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row align-items-center m-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto pl-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tОценка:\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col p-0\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"progress-bar\"],[10,\"role\",\"progressbar\"],[10,\"style\",\"width: 75%;\"],[10,\"aria-valuenow\",\"75\"],[10,\"aria-valuemin\",\"0\"],[10,\"aria-valuemax\",\"100\"],[8],[0,\"75%\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-6\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"text-center py-2\"],[8],[0,\"Отзыв\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\tSapiente possimus temporibus eligendi id ea voluptate sit. Qui dolore tempore assumenda est quis et ut ut. Fugit reiciendis harum. Iusto magni aut illo in nesciunt reprehenderit. Porro ut aliquam autem vel. Dolorum officiis nobis ducimus dolorem nulla laudantium deleniti mollitia recusandae.\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-2 text-center col-filter\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"py-2\"],[8],[0,\"Ссылки\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-video\"],[10,\"title\",\"Посмотреть запись доклада\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-camera-reels card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"href\",\"#\"],[10,\"class\",\"btn btn-present\"],[10,\"title\",\"Скачать презентацию\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-file-ppt card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M6 4a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 6 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"nav\"],[10,\"aria-label\",\"Page navigation example\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"ul\"],[10,\"class\",\"pagination justify-content-end\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"page-item disabled\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"page-link\"],[10,\"href\",\"#\"],[10,\"aria-label\",\"Previous\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"aria-hidden\",\"true\"],[8],[0,\"«\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"page-item active\"],[10,\"aria-current\",\"page\"],[8],[6,\"a\"],[10,\"class\",\"page-link\"],[10,\"href\",\"#\"],[8],[0,\"1 \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"(текущая)\"],[9],[9],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"page-item\"],[8],[6,\"a\"],[10,\"class\",\"page-link\"],[10,\"href\",\"#\"],[8],[0,\"2\"],[9],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"page-item\"],[8],[6,\"a\"],[10,\"class\",\"page-link\"],[10,\"href\",\"#\"],[8],[0,\"3\"],[9],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"li\"],[10,\"class\",\"page-item\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"a\"],[10,\"class\",\"page-link\"],[10,\"href\",\"#\"],[10,\"aria-label\",\"Next\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"span\"],[10,\"aria-hidden\",\"true\"],[8],[0,\"»\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/meetings.hbs" } });
});
define("test-book/templates/speakers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EgZqgaUC", "block": "{\"symbols\":[\"speaker\"],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n\\t\\t\"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-outline-primary my-2\"],[10,\"title\",\"Добавить спикера\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"form\"],[10,\"class\",\"form-inline\"],[8],[0,\"\\n          \\t\\t\"],[1,[26,\"input\",null,[[\"class\",\"type\",\"placeholder\",\"aria-label\",\"value\"],[\"form-control mr-2 search-long search-only\",\"search\",\"ФИО\",\"Спикер\",[22,[\"name\"]]]]],false],[0,\"\\t\\n\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"div\"],[11,\"id\",[27,[[21,1,[\"id\"]]]]],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[11,\"src\",[27,[[26,\"url\",[\"rootURL\"],null],[21,1,[\"photo\"]]]]],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Фото спикера\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[21,1,[\"full_name\"]],false],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-edit\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"editSpeaker\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[10,\"type\",\"button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "test-book/templates/speakers.hbs" } });
});


define('test-book/config/environment', [], function() {
  var prefix = 'test-book';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("test-book/app")["default"].create({"name":"test-book","version":"0.0.0+d4ff3e33"});
}
//# sourceMappingURL=test-book.map
