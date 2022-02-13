module.exports = {
    title:'Eren UI',
    base: "/eren-demo-3/",
    themeConfig: {
        nav: [
            {text: '文档', link: '/install/'},
            {text: 'Github', link: 'https://github.com/jgorijinal/eren-demo-3'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                ]
            },

        ]
    }
}