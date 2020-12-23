const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware({
            target:'http://youtube.com',
            changeOrigin:true,
        })
    );
};