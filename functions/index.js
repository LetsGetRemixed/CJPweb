const functions = require("firebase-functions");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const calendarRoutes = require('./routes/calendarRoutes');

const mongostring = 'mongodb+srv://Colby:colby@cjpweb.vujp6.mongodb.net/?retryWrites=true&w=majority&appName=CJPWeb'
const app = express();
const PORT = process.env.PORT || 5100;


app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(mongostring, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/calendar', calendarRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

exports.api = functions.https.onRequest(app);
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
