const path = require('path'); // подключаем path к конфигу вебпак

module.exports = {
    entry: { main: './src/js/script.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }
}