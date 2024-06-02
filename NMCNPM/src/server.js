const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars').engine



const app = express();
const port = 3000;

// Nạp file index.js của folder routes vào
const route = require('./routes/index');

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));


app.engine('hbs', handlebars({ extname: ".hbs" }))
app.engine('.hbs', handlebars({
    extname: '.hbs',
    helpers: require('./config/handlebars-helper') //only need this
  }));
app.set('view engine','hbs') 
app.set("views", path.join(__dirname, "resource/views"));

// app.get('/', function(req,res){
//     res.render('home', {layout:false});
// })

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

//View engine setup
// app.set('views', path.join(__dirname, 'resource','views')); // Cấu hình views sẽ được tìm theo đường dẫn được tạo ra từ path.join(__dirname, 'resource','views')


// load asset files
// app.use('/css', express.static(path.join(__dirname, "/assets/css")));
// app.use(express.static(path.join(__dirname, "public")));
// app.use('/js', express.static(path.join(__dirname, "/assets/js")));
// app.use('/css', express.static(path.join(__dirname, "/assets/css")));

//  Cấu hình sử dụng những file tĩnh đứng từ public
//  express.static is a built-in middleware function in Express, it serves static file and is based on server-static
//  Dòng code bên dưới hiểu là: Serve static content for the app 
//from the “public” directory in the application directory:
app.use(express.static(path.join(__dirname, 'public')));



// load routers
// app.use('/', require('./server/users/users.router'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})