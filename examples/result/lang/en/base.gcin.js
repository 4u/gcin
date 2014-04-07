// Content below is autogenerated by gcin
// usually there is no reason to edit it manually

goog.provide('my.i18n.msgs.lang.en.base');


my.i18n.msgs.lang.en.base.serverError = function() {
  /**  @desc Server error */
  var MSG_EN_SERVERERROR_0_0 = goog.getMsg('Server error');
  return MSG_EN_SERVERERROR_0_0;
};

my.i18n.msgs.lang.en.base.test = function() {
  /**  @desc Тестовое описание */
  var MSG_EN_TEST_0_1 = goog.getMsg('Test');
  return MSG_EN_TEST_0_1;
};

/** @param {Object} options */
my.i18n.msgs.lang.en.base.helloUser = function(options) {
  /**  @desc Приветствуем юзера */
  var MSG_EN_HELLOUSER_0_2 = goog.getMsg('Привет, {$username}', {
    'username': options.username
  });
  return MSG_EN_HELLOUSER_0_2;
};

my.i18n.msgs.lang.en.base.quote = function() {
  /**  @desc quote */
  var MSG_EN_QUOTE_0_3 = goog.getMsg(
    '"Pushkin\'s quote."' +
    '  A. S. Pushkin'
  );
  return MSG_EN_QUOTE_0_3;
};

my.i18n.msgs.lang.en.base.title = function() {
  /**  @desc Подзаголовок серпа */
  var MSG_EN_TITLE_0_4 = goog.getMsg(
    '{GUESTS, select,' +
    '    all {' +
    '      for {NUM_ADULTS} {NUM_ADULTS, plural,' +
    '        one {adult}' +
    '        other {adults}' +
    '      } and {NUM_CHILDREN} {NUM_CHILDREN, plural' +
    '        one {child}' +
    '        other {children}' +
    '      }' +
    '    }' +
    '    adults {' +
    '      for {NUM_ADULTS} {NUM_ADULTS, plural,' +
    '        one {adult}' +
    '        other {adults}' +
    '      }' +
    '    }' +
    '    children {' +
    '      для {NUM_CHILDREN} {NUM_CHILDREN, plural,' +
    '        one {child}' +
    '        other {children}' +
    '      }' +
    '    }' +
    '    other {}' +
    '  }' +
    '  {IS_DATELESS, select,' +
    '    no {' +
    '      from {NUM_FROM_DATE} {IS_SAME_MONTH, select,' +
    '        no {{NUM_FROM_MONTH}}' +
    '        other {}' +
    '      }  to {NUM_TO_DATE} {NUM_TO_MONTH}' +
    '    }' +
    '    other {}' +
    '  }'
  );
  return MSG_EN_TITLE_0_4;
};
