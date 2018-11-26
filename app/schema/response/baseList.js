'use strict';

module.exports = {
  baseListResponse: {
    data: { type: 'array', itemType: 'User' },
    error_msg: { type: 'string' },
    success: { type: 'boolean', required: true },
  },
};
