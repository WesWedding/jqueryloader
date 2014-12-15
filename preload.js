var GameApp = GameApp || {};

GameApp.Preloader = {
  _self: this,
  _loader: new PxLoader(),
  _progress: 0,
  _progressBarElement: null,
  _finishedCallback: null,
  
  // Array file file objects: {filename, isDone}
  _files: [],
  
  start: function() {
  
    _loader.addProgressListener(function(e) {
      console.log(e);
      self.updateProgress();
    });
    _loader.start();
  },
  
  onFilesFinished: function() {
    var self = this;
    console.log("feeenish");
    // Delay the removal of the UI element so that there is a brief, more satifying period where the bar is full.
    setTimeout(function(){
      $(self._progressBarElement).hide();
      $(self._progressBarElement).progressbar("disable");
      if (Object.prototype.toString.call(self._finishedCallback) == '[object Function]') {
        self._finishedCallback();
      }
    }, 800);
    console.log("progress", "Preload done.");
    this._files = [];
  },
  
  addImageFile: function (key, name) {
    var img = _loader.addImage(name);
    self.addFileToList(key, name);
  },
  
  addFontFile: function (name) {
  },
  
  /**
   * Can be called directly just to add files being handled by loaders other than PxLoader.
   * Those loaders should be invoking fileWasLoaded() when necessary.
   */ 
  addFileToList: function (fileKey, name) {
    $(this._progressBarElement).progressbar("enable");
    $(this._progressBarElement).show();
    var arrayLength = this._files.length;
    for (var i = 0; i < arrayLength; i++) {
      if (this._files[i].key === fileKey) {
        throw new Error("GameApp.Preloader.addFile(): Already added file named '" + name + "' for key '" + fileKey + "'");
      }
    }
    this._files.push({key: fileKey, filename: name, isDone: false});
  },
  
  fileWasLoaded: function (identifier) {
    var arrayLength = this._files.length;
    console.log(identifier);
    for (var i = 0; i < arrayLength; i++) {
      if (this._files[i].filename === identifier || this._files[i].key === identifier) {
        this._files[i].isDone = true;
        console.log("preloader", identifier + " marked as loaded.");
        return this.updateProgress();
      }
    }
  },
  
  updateProgress: function() {
    var fileDoneCount = 0,
      fileTotalCount = 0,
      arrayLength = this._files.length,
      newProgress = 100;
      
      for (var i = 0; i < arrayLength; i++, fileTotalCount++) {
        if (this._files[i].isDone) fileDoneCount++;
      }
      
      newProgress = (fileDoneCount / fileTotalCount) * 100;
      if (newProgress !== this._progress) {
        this._progress = newProgress;
        this.updateProgressUI();
      }
      if (this._progress == 100)  this.onFilesFinished();
  },
  
  setProgressUI: function(obj) {
    this._progressBarElement = obj;
  },
  
  setFinishedCallback: function(func) {
    this._finishedCallback = func;
  },
  
  updateProgressUI: function() {
    if (this._progressBarElement) {
      $(this._progressBarElement).progressbar("option", "value", this._progress);
    }
  },
  
  getProgress: function() {
    return this._progress;
  }
};


$(function() {
  GameApp.Preloader.setProgressUI($( "#load-progress" ).progressbar({
    value: 0
  }));
});