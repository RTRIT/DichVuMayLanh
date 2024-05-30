const usersRouter = require('./user')


function route(app){
    // app.use to specify middleware as the callback function
    // Những thằng ở dưới đều là middleware function có Mount path, function sẽ được thực thi cho HTTP request tới path đã được đề cập
    // app.use('/search', searchRouter);
    // app.use('/news', newRouter);
    // Trang cho user
    app.use('/user', usersRouter);
    // app.use('/me', meRouter);
    // Trang cho admin
    // app.use('/', hpRouter);
    // app.use('/', hpRouter);

    
}

module.exports = route;
 


