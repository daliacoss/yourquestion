/* taken from: https://github.com/mozdevs/webfont-preloading */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 
 'use strict';

// We create our own custom loader class extending Phaser.Loader.
// This new loader will support webfonts
function CustomLoader(game) {
    Phaser.Loader.call(this, game);
}

CustomLoader.prototype = Object.create(Phaser.Loader.prototype);
CustomLoader.prototype.constructor = CustomLoader;

// new method to load webfonts
// this follows the structure of all of the file assets loading methods
CustomLoader.prototype.webfont = function (key, fontName, overwrite) {
    if (typeof overwrite === 'undefined') { overwrite = false; }

    // here fontName will be stored in file's `url` property
    // after being added to the file list
    this.addToFileList('webfont', key, fontName);
    return this;
};

CustomLoader.prototype.loadFile = function (file) {
    Phaser.Loader.prototype.loadFile.call(this, file);

    // we need to call asyncComplete once the file has loaded
    if (file.type === 'webfont') {
        var _this = this;
        // note: file.url contains font name
        var font = new FontFaceObserver(file.url);
        font.load(null, 10000).then(function () {
            _this.asyncComplete(file);
        }, function ()  {
            _this.asyncComplete(file, 'Error loading font ' + file.url);
        });
    }
};
