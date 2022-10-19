// need to require mongoose and express
// make sure both are installed to start server
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  // Find and modify may be necessary?
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// log mongo queries below
mongoose.set('debug', true);

app.listen(PORT, () => console.log(` Connected on localhost:${PORT}`));