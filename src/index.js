const app = require('./app');
const port = process.env.PORT || 4153;
app.listen(port, ()=> console.log(`Server is working on ${port}`));