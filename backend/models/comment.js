'use strict'
module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("Comment", {
    content: {
      type: Sequelize.STRING
    }
  });

  return Comment;
};