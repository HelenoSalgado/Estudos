const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = express();
const path       = require('path');
const db         = require('./db/connection');
const MaisInfo   = require('./models/MaisInfo');
const PORT       = 4000;
const bodyParser = require('body-parser');


// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// headle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// DB connection e ativação da porta 3000
    
const resultado = db.sync().then(() => {

  console.log('Banco de dados conectado');

  app.listen(PORT, () => {
    console.log('Express rodando na porta ' + PORT);
    // Routes
    app.get('/', async (req, res) => {

    const maisInfos = await MaisInfo.findAll({raw: true});

    console.log(maisInfos);

    const user = {
       active: true,
       nome: 'heleno'
    }

    res.render('index', {user: user});

  })
}) 

}).catch(console.error());
      


// Jobs routes

app.use('/mais-info', require('./routes/maisInfos'));

