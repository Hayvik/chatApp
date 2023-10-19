const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Connect to your MongoDB database.
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
