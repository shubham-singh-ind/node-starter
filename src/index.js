const app = require('./app');

const PORT = process.env.PORT || 5020;

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));

module.exports = app;