const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {
    app.use(
        createProxyMiddleware('/resource', {
            target: 'http://localhost:3333',
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware('/auth',{
            target: 'http://localhost:3333',
            changeOrigin: true,
        })
    );
};