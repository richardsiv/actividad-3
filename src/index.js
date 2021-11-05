const express = require ('express');
const app = express();

//Configuracion
app.set('port', process.env.port || 3000);

//Midelware
app.use(express.json());

//Routes
app.use(require('./routes/productos'));

app.listen(app.get('port'), () => {
    console.log('Sever port', app.get('port'));
});