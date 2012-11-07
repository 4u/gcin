var XRegExp = require('xregexp').XRegExp;

var create = function(docs) {
  docs = docs instanceof Array ? docs : [docs];
  var ret = '';

  docs.forEach(function(doc, pos) {
    if (pos > 0) {
      ret += '\n';
    }
    doc.msgs.forEach(function(msg, pos) {
      if (pos > 0) {
        ret += '\n';
      }

      ret += '#: ' + doc.ns + '\n';
      if (msg.desc) {
        ret += '#. ' + msg.desc + '\n';
      }
      if (msg.mean) {
        ret += '#. ' + msg.mean + '\n';
      }

      ret += 'msgctxt "' + (doc.id ? doc.id + ' ' : '') + msg.id + '"\n';
      if (msg.body.indexOf('\n') != -1) {
        ret += 'msgid ""\n"' + msg.body.replace(/"/g, '\\"').replace(/\n/g, '\\n"\n"') + '"\n';
      } else {
        ret += 'msgid "' + msg.body.replace(/"/g, '\\"') + '"\n';
      }
      ret += 'msgstr ""\n';
    });
  });

  return ret;
};

var parse = function(data) {
  var _getMultiStrParam = function(param) {
    return '' +
      '(?!\\\\)"' +
        '(?<' + param + '>.*?((?!\\\\)"\\n(?!\\\\)".+?)*)' +
      '(?!\\\\)"';
  };

  var MSG_REG_EXP = '(#.+?\\n)*' +
                    // '(#: GCINID:\\s*(?<gcinid>.+)\\s*\\n)*' +
                    '(#.+?\\n)*' +
                    '(msgctxt ' + _getMultiStrParam('ctx') + '\\n)?' +
                    'msgid ' + _getMultiStrParam('id') + '\\n' +
                    'msgstr ' + _getMultiStrParam('str') + '\\n';

  var doc = {
    msgs: []
  };

  XRegExp.forEach(data, new XRegExp(MSG_REG_EXP, 'm'), function(match, i) {

    var msg = {
      id: _formatMultiLineStr(match.id),
      // gcinid: _formatMultiLineStr(match.gcinid),
      ctx: _formatMultiLineStr(match.ctx),
      str: _formatMultiLineStr(match.str)
    };

    doc.msgs.push(msg);
  }, this);

  return doc;
};

var _formatMultiLineStr = function(data) {
  if (!data) {
    return null;
  }

  return data
    .replace(/"\n"/g, '')
    .replace(/\\n/g, '\n')
    .replace(/\\\n/g, '\\n')
    .replace(/\\t/g, '\t')
    .replace(/\\\t/g, '\\t')
    .replace(/\\\"/g, '"');
};

var getMap = function(doc) {
  var map = {};
  doc.msgs.forEach(function(msg) {
    if (!msg.ctx) {
      return;
    }
    map[msg.ctx] = msg;
  });

  return map;
};

module.exports = {
  parse: parse,
  create: create,
  getMap: getMap
};
