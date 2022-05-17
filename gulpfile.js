// Активация
const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Конигурация
const path = require('./tasks/config/path');
const app = require('./tasks/config/app');

// Задачи
const clear = require('./tasks/clear.js');
const html = require('./tasks/html.js');
const scss = require('./tasks/scss.js');
const js = require('./tasks/js.js');
const img = require('./tasks/img.js');
const font = require('./tasks/font.js');
const jquery = require('./tasks/script/jquery.js');
const style = require('./tasks/script/style.js');

// Браузер
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

// Наблюдатель
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.img.watch, img).on('all', browserSync.reload);
  watch(path.font.watch, font).on('all', browserSync.reload);
};

const build = series(clear, parallel(html, scss, js, jquery, style, img, font));
const dev = series(build, parallel(watcher, server));

// Запуск задач
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;
exports.jquery = jquery;
exports.style = style;

// Сборка
exports.default = app.isProd ? build : dev;
