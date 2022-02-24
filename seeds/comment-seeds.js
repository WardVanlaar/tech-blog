const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'I completely agree',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'No way',
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: 'Way to go',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: 'I cannot disagree more',
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: 'Wow',
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;