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

[1]: https://github.com/thinkpixellab/PxLoader
[2]: http://jqueryui.com/download/
[3]: https://jqueryui.com/download/#!version=1.11.4&components=1100000000000001000000000000000000000