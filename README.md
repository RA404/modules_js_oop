# Webpack
Сборка проекта webpack-ом

# Description
В ветке /gh-pages/ финальная версия проекта, минифицированный css, собран единый js из модулей

Просмотреть итоговый проект можно двумя способами:

1. На GitHub Environment - View deployment
2. Разместив файлы из ветки gh-pages у себя на сервере

В ветках /develop/ и /master/(финальная сборка) версия для разработки, проект разбит по модулям и отдельным блокам, можно развернуть при помощи git clone

## How to install
1. Склонировать проект
* git clone git@github.com:RA404/modules_js_oop.git
2. Установить зависимости для разработчика
* npm install --save-dev @babel/cli @babel/core @babel/preset-env autoprefixer babel-loader cross-env css-loader cssnano file-loader gh-pages html-loader html-webpack-plugin@3.2.0 image-webpack-loader lodash mini-css-extract-plugin postcss-loader resolve-url resolve-url-loader style-loader url-loader webpack webpack-cli webpack-dev-server webpack-md5-hash
3. Установить зависимости для продакшн версии
* npm install --save babel-polyfill core-js html-loader optimize-css-assets-webpack-plugin resolve-cwd
4. Собрать проект (продакшн версию)
* npm run build
5. Собрать проект (версия для разработчиков)
* npm run dev
6. "Задеплоить" проект
* npm run deploy

# Project link 
[https://github.com/RA404/modules_js_oop](https://github.com/RA404/modules_js_oop)

## Version v0.0.2
v0.0.1 - первая версия проекта

v0.0.2 - исправлена сборка проекта, дополнен readme файл

v0.0.3 - readme дополнен информацией об устаовке

