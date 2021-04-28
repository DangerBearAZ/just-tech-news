// import all models
const Post = require('./Post');
const User = require('./User');
const Vote = require('./Vote');

// create association user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id'
});

  // a post can only have one post 
  Post.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
  //when looking up Post, we can see a total of how many votes a user creates;
  User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
  });

  //query a User, we can see all of the posts they've voted on.
  Post.belongsToMany(User, {
    through: Vote, 
    as: 'voted_posts',
    foreignKey: 'post_id'
  }); 

  Vote.belongsTo(User, {
    foreignKey : 'user_id'
  });

  Vote.belongsTo(Post, {
    foreignKey: 'post_id'
  });
  
  User.hasMany(Vote, {
    foreignKey: 'user_id'
  });
  
  Post.hasMany(Vote, {
    foreignKey: 'post_id'
  });


  module.exports = { User, Post, Vote };
  