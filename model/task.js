const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  sfname: String,
  slname: String,
  sclass: String,
  saddr: String,
  smarks: {
    type: String,
    default:"Not Graded"
  },
    sem1as :Number,
    sem2as :Number,
    sem3as :Number,
    sem4as :Number,


    sem1se :Number,
    sem2se :Number,
    sem3se :Number,
    sem4se :Number,


    sem1mt :Number,
    sem2mt :Number,
    sem3mt :Number,
    sem4mt :Number,

    sem1ex :Number,
    sem2ex :Number,
    sem3ex :Number,
    sem4ex :Number,

  
});

module.exports = mongoose.model('tasks', TaskSchema);
