'use strict';

module.exports = {
  topicsResponse: {
    data: { type: 'array', itemType: 'Topic' },
    error_msg: { type: 'string' },
    success: { type: 'boolean', required: true },
  },
};
