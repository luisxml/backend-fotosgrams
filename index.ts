import Server from './classes/server';
import userRoutes from './routes/user';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';

const server = new Server();


// Body parser
server.app.use(bodyParser.urlencoded({ extended: true}));
server.app.use(bodyParser.json());

//Rutas de apliacion
server.app.use('/user', userRoutes)

// Conectar BD
mongoose.connect('mongodb://localhost:27017/fotosgram',
                {useNewUrlParser: true, useCreateIndex: true}, (err) => {
    if (err) throw err;
    console.log('Base de Datos online...');
});

// Levantar express
server.start( () => {
    console.log(`Servidor Express corriendo en el puerto Nro: ${server.port}`);
});