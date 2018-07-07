'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    userId: DataTypes.INTEGER,
    question: DataTypes.STRING
  });

  question.associate = (models) => {
    question.hasMany(models.answer, {
      foreignKey: 'questionId',
      as: 'answers',
    });
  };

  return question;
};