module.exports = {
    head: {
        title: 'nuxt-login-template',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'nuxt login template' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            }
        ]
    },
    plugins: [],
    css: [
        '~/assets/css/main.css'
    ],
    build: {
        vendor: ['@nuxtjs/axios'],
        extractCSS: true,
        extend(config) {
            if (process.server && process.browser) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }

        }
    },
    serverMiddleware: [
        '~/api/index.js'
    ],
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/vuetify'
    ],
    axios: {
        proxy: true
    },
    proxy: {
        '/api': `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
    },
    auth: {
        redirect: {
            login: '/login',
            logout: '/',
            callback: '/login',
            home: '/'
        },
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/api/auth/login',
                        method: 'post',
                        propertyName: 'token.accessToken'
                    }
                }
            }
        }
    },
    vuetify: {}
};
