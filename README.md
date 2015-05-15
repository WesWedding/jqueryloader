#Sticky HTML Game Preloader

A preloader that updates a jQuery UI Progress Bar widget as files are loaded.  Really just a fancy middleware between PxLoader and the Progress widget.

## Dependencies
* [PxLoader][1]
* [jQueryUI][2] (really just the [Progress][3] widget)

## Usage

### Initial setup
```
$(function() {
  GameApp.Preloader.setProgressUI($( "#load-progress" ).progressbar({
    value: 0
  }));
});
```

### Adding a file
```
GameApp.Preloader.addFileToList('quizSounds', './assets/audio/quiz-sound-effects.mp3');
```

### Updating the progress bar using other libraries' "on file load" event callbacks (Howler.js example)
(using: Preloader.fileWasLoaded(key, filename))
```
var sounds = new Howl({
    urls: ['./assets/audio/quiz-sound-effects.mp3'],
    sprite: {
      correct: [0, 1950],
      incorrect: [2000, 700],
      button_press: [3000, 500]
    },
    onload: function() {GameApp.Preloader.fileWasLoaded('quizSounds', './audio/Sound_Effects.mp3');},
    volume: 0.7
  }),
  ```
  
  
### License/Credit
Brought to you by the [creative agency beasts at Sticky Co][4].  

Credit is nice but not required (see below).

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org>


[1]: https://github.com/thinkpixellab/PxLoader
[2]: http://jqueryui.com/download/
[3]: https://jqueryui.com/download/#!version=1.11.4&components=1100000000000001000000000000000000000
[4]: http://www.sticky.tv