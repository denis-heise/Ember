'use strict';

define('test-book/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/books.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/edit-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/edit-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/meetings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/meetings.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/speakers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/speakers.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-book.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/get-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/get-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/url.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/url.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/404.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/404.js should pass ESLint\n\n');
  });

  QUnit.test('routes/books.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/books.js should pass ESLint\n\n');
  });

  QUnit.test('routes/books/edit-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/books/edit-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-meeting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-meeting.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-report.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-report.js should pass ESLint\n\n');
  });

  QUnit.test('routes/edit-speaker.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/edit-speaker.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/meetings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/meetings.js should pass ESLint\n\n');
  });

  QUnit.test('routes/speakers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/speakers.js should pass ESLint\n\n');
  });

  QUnit.test('services/data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/data.js should pass ESLint\n\n');
  });
});
define('test-book/tests/integration/helpers/get-book-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Helper | get-book', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "Oip3wl/i",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-book\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('test-book/tests/integration/helpers/get-speaker-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Helper | get-speaker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "gCcE6r8t",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"get-speaker\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('test-book/tests/integration/helpers/url-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

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

  (0, _qunit.module)('Integration | Helper | url', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('inputValue', '1234');

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "3rEjAiSL",
                  "block": "{\"symbols\":[],\"statements\":[[1,[26,\"url\",[[22,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:

                assert.equal(this.element.textContent.trim(), '1234');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('test-book/tests/test-helper', ['test-book/app', 'test-book/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('test-book/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/helpers/get-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/get-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/get-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/url-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/url-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/books/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/books/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/edit-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/edit-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/meetings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/meetings-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/404-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/404-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/books/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/books/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-meeting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-meeting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-report-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-report-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/edit-speaker-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/edit-speaker-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/meetings-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/meetings-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/speakers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/speakers-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/data-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/data-test.js should pass ESLint\n\n');
  });
});
define('test-book/tests/unit/controllers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('test-book/tests/unit/controllers/books-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books');
      assert.ok(controller);
    });
  });
});
define('test-book/tests/unit/controllers/books/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | books/edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:books/edit-book');
      assert.ok(controller);
    });
  });
});
define('test-book/tests/unit/controllers/edit-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | edit-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:edit-meeting');
      assert.ok(controller);
    });
  });
});
define('test-book/tests/unit/controllers/meetings-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | meetings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:meetings');
      assert.ok(controller);
    });
  });
});
define('test-book/tests/unit/controllers/speakers-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:speakers');
      assert.ok(controller);
    });
  });
});
define('test-book/tests/unit/routes/404-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | 404', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:404');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/books-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/books/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | books/edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:books/edit-book');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/edit-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-book');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/edit-meeting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-meeting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-meeting');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/edit-report-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-report', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-report');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/edit-speaker-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | edit-speaker', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:edit-speaker');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/meetings-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | meetings', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:meetings');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/routes/speakers-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | speakers', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:speakers');
      assert.ok(route);
    });
  });
});
define('test-book/tests/unit/services/data-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | data', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var service = this.owner.lookup('service:data');
      assert.ok(service);
    });
  });
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

require('test-book/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
