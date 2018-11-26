'use strict';

module.exports = {
  updateTopic: {
    topic_id: { type: 'string', max: 24, min: 24, required: true },
    title: { type: 'string', max: 100, min: 5, required: true },
    tab: { type: 'string', enum: [ 'share', 'ask', 'job' ] },
    content: { type: 'string', required: true },
  },
};
