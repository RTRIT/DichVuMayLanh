const homeRouter = require('./home');
const usersRouter = require('./user');
const adminRouter = require('./admin');
const qlyRouter = require('./QLY');


function route(app){
    // app.use to specify middleware as the callback function
    // Những thằng ở dưới đều là middleware function có Mount path, function sẽ được thực thi cho HTTP request tới path đã được đề cập
    // app.use('/search', searchRouter);
    // app.use('/news', newRouter);
    // Trang cho user
    
    app.use('/qly', qlyRouter);
    app.use('/admin', adminRouter);
    app.use('/user', usersRouter);
    app.use('/', homeRouter);
   
    
    // app.use('/me', meRouter);
    // Trang cho admin
    // app.use('/', hpRouter);
    // app.use('/', hpRouter);

    
}

module.exports = route;
 


