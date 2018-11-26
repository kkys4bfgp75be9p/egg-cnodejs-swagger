'use strict';

module.exports = {
  topic: {
    title: { type: 'string', max: 100, min: 5 },
    tab: { type: 'string', enum: [ 'share', 'ask', 'job' ] },
    content: { type: 'string' },
  },
};
