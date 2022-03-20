const mongoose = require("mongoose");
const Joi = require("joi");

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
     
    },
  },
  {
    timestamps: true,
  }
);
// userSchema.methods.matchPassword = async function (password) {
//   const user = this;
//   return await bcrypt.compare(password, user.password);
// };

const Task = mongoose.model("Task", taskSchema);

function validateTask(task) {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
  });
  return schema.validate(task);
}

module.exports = { Task, validateTask };
