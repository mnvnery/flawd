module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {   
        extend: {
            colors: {
                'tcream': '#EEE9DB',
                'tyellow': '#F2F15B',
                'tdarkblue': '#264073',
                'tpink': '#D61A67',
                'tbeige': '#EDC195',
                'tlightblue': '#0271B1',
            },
            screens: {
                '3xl': '2000px'
            }
        },
    },
    plugins: [],
    safelist: [{
            pattern: /(bg|text|border)-t(cream|pink|yellow|darkblue|beige|lightblue)/
        }
    ],
}