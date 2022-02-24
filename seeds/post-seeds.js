const { Post } = require('../models');

const postData = [
  {
    title: 'I like node',
    post_text: 'I just learned node and I like it!',
    user_id: 3,
  },
  {
    title: 'MySQL',
    post_text: 'When I installed MySQL it worked immediately!',
    user_id: 3,
  },
  {
    title: '.ENV',
    post_text: 'I forgot to add database name to .ENV',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;