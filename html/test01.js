(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Generated by psc-bundle 0.11.6
var PS = {};
(function(exports) {
  /* jshint maxparams: false */
  /* global exports, XMLHttpRequest */
  "use strict";

  // module Audio.WebAudio.AudioContext

  exports.makeAudioContext = function() {
    return new (window.AudioContext || window.webkitAudioContext)();
  };


  exports.createOscillator = function(ctx) {
    return function() {
      return ctx.createOscillator();
    };
  };



  exports.createGain = function(ctx) {
    return function() {
      return ctx.createGain();
    };
  };

  exports.currentTime = function(cx) {
    return function() {
      return cx.currentTime;
    };
  };



  exports.connect = function(_) {
    return function(_) {
      return function(source) {
        return function(sink) {
          return function() {
            source.connect(sink);
          };
        };
      };
    };
  };
})(PS["Audio.WebAudio.AudioContext"] = PS["Audio.WebAudio.AudioContext"] || {});
(function(exports) {
    "use strict";

  exports.pureE = function (a) {
    return function () {
      return a;
    };
  };

  exports.bindE = function (a) {
    return function (f) {
      return function () {
        return f(a())();
      };
    };
  };
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Category = PS["Control.Category"];
  var flip = function (f) {
      return function (b) {
          return function (a) {
              return f(a)(b);
          };
      };
  };
  exports["flip"] = flip;
})(PS["Data.Function"] = PS["Data.Function"] || {});
(function(exports) {
    "use strict";

  exports.unit = {};
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Show"];     
  var Show = function (show) {
      this.show = show;
  }; 
  var show = function (dict) {
      return dict.show;
  };
  exports["Show"] = Show;
  exports["show"] = show;
})(PS["Data.Show"] = PS["Data.Show"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Unit"];
  var Data_Show = PS["Data.Show"];
  exports["unit"] = $foreign.unit;
})(PS["Data.Unit"] = PS["Data.Unit"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Data.Functor"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Function = PS["Data.Function"];
  var Data_Unit = PS["Data.Unit"];        
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  exports["Functor"] = Functor;
  exports["map"] = map;
})(PS["Data.Functor"] = PS["Data.Functor"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];        
  var Apply = function (Functor0, apply) {
      this.Functor0 = Functor0;
      this.apply = apply;
  };                      
  var apply = function (dict) {
      return dict.apply;
  };
  exports["Apply"] = Apply;
  exports["apply"] = apply;
})(PS["Control.Apply"] = PS["Control.Apply"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Apply = PS["Control.Apply"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Applicative = function (Apply0, pure) {
      this.Apply0 = Apply0;
      this.pure = pure;
  };
  var pure = function (dict) {
      return dict.pure;
  };
  var liftA1 = function (dictApplicative) {
      return function (f) {
          return function (a) {
              return Control_Apply.apply(dictApplicative.Apply0())(pure(dictApplicative)(f))(a);
          };
      };
  };
  exports["Applicative"] = Applicative;
  exports["liftA1"] = liftA1;
  exports["pure"] = pure;
})(PS["Control.Applicative"] = PS["Control.Applicative"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Control.Bind"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Category = PS["Control.Category"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Bind = function (Apply0, bind) {
      this.Apply0 = Apply0;
      this.bind = bind;
  };                     
  var bind = function (dict) {
      return dict.bind;
  };
  var bindFlipped = function (dictBind) {
      return Data_Function.flip(bind(dictBind));
  };
  exports["Bind"] = Bind;
  exports["bind"] = bind;
  exports["bindFlipped"] = bindFlipped;
})(PS["Control.Bind"] = PS["Control.Bind"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var Monad = function (Applicative0, Bind1) {
      this.Applicative0 = Applicative0;
      this.Bind1 = Bind1;
  };
  var ap = function (dictMonad) {
      return function (f) {
          return function (a) {
              return Control_Bind.bind(dictMonad.Bind1())(f)(function (v) {
                  return Control_Bind.bind(dictMonad.Bind1())(a)(function (v1) {
                      return Control_Applicative.pure(dictMonad.Applicative0())(v(v1));
                  });
              });
          };
      };
  };
  exports["Monad"] = Monad;
  exports["ap"] = ap;
})(PS["Control.Monad"] = PS["Control.Monad"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Control.Monad.Eff"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad = PS["Control.Monad"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Unit = PS["Data.Unit"];        
  var monadEff = new Control_Monad.Monad(function () {
      return applicativeEff;
  }, function () {
      return bindEff;
  });
  var bindEff = new Control_Bind.Bind(function () {
      return applyEff;
  }, $foreign.bindE);
  var applyEff = new Control_Apply.Apply(function () {
      return functorEff;
  }, Control_Monad.ap(monadEff));
  var applicativeEff = new Control_Applicative.Applicative(function () {
      return applyEff;
  }, $foreign.pureE);
  var functorEff = new Data_Functor.Functor(Control_Applicative.liftA1(applicativeEff));
  exports["functorEff"] = functorEff;
  exports["applyEff"] = applyEff;
  exports["applicativeEff"] = applicativeEff;
  exports["bindEff"] = bindEff;
  exports["monadEff"] = monadEff;
})(PS["Control.Monad.Eff"] = PS["Control.Monad.Eff"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Control_Monad_Eff = PS["Control.Monad.Eff"];        
  var AudioNode = {};
  var audioNodeOscillatorNode = AudioNode;             
  var audioNodeGainNode = AudioNode;
  var audioNodeDestinationNode = AudioNode;
  exports["AudioNode"] = AudioNode;
  exports["audioNodeGainNode"] = audioNodeGainNode;
  exports["audioNodeDestinationNode"] = audioNodeDestinationNode;
  exports["audioNodeOscillatorNode"] = audioNodeOscillatorNode;
})(PS["Audio.WebAudio.Types"] = PS["Audio.WebAudio.Types"] || {});
(function(exports) {
  /* jshint maxparams: false */
  /* global exports, XMLHttpRequest */
  "use strict";

  // module Audio.WebAudio.Utils


  exports.unsafeSetProp = function(prop) {
    return function(obj) {
      return function(value) {
        return function() {
          obj[prop] = value;
        };
      };
    };
  };


  exports.unsafeGetProp = function(prop) {
    return function(obj) {
      return function() {
        return obj[prop];
      };
    };
  };
})(PS["Audio.WebAudio.Utils"] = PS["Audio.WebAudio.Utils"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Audio.WebAudio.Utils"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Prelude = PS["Prelude"];
  exports["unsafeGetProp"] = $foreign.unsafeGetProp;
  exports["unsafeSetProp"] = $foreign.unsafeSetProp;
})(PS["Audio.WebAudio.Utils"] = PS["Audio.WebAudio.Utils"] || {});
(function(exports) {
    "use strict";
  var $foreign = PS["Audio.WebAudio.AudioContext"];
  var Audio_WebAudio_Types = PS["Audio.WebAudio.Types"];
  var Audio_WebAudio_Utils = PS["Audio.WebAudio.Utils"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Data_ArrayBuffer_Types = PS["Data.ArrayBuffer.Types"];
  var Prelude = PS["Prelude"];        
  var destination = Audio_WebAudio_Utils.unsafeGetProp("destination");
  exports["destination"] = destination;
  exports["connect"] = $foreign.connect;
  exports["createGain"] = $foreign.createGain;
  exports["createOscillator"] = $foreign.createOscillator;
  exports["currentTime"] = $foreign.currentTime;
  exports["makeAudioContext"] = $foreign.makeAudioContext;
})(PS["Audio.WebAudio.AudioContext"] = PS["Audio.WebAudio.AudioContext"] || {});
(function(exports) {
  /* jshint maxparams: false */
  /* global exports, XMLHttpRequest */
  "use strict";

  // module Audio.WebAudio.AudioParam

  exports.setValue = function(value) {
    return function(param) {
      return function() {
        param.value = value;
      };
    };
  };


  exports.getValue = function(param) {
    return function() {
      return param.value;
    };
  };


  exports.setValueAtTime = function(value) {
    return function(startTime) {
      return function(param) {
        return function() {
          param.setValueAtTime(value, startTime);
        };
      };
    };
  };
})(PS["Audio.WebAudio.AudioParam"] = PS["Audio.WebAudio.AudioParam"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Audio.WebAudio.AudioParam"];
  var Audio_WebAudio_Types = PS["Audio.WebAudio.Types"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Prelude = PS["Prelude"];
  exports["getValue"] = $foreign.getValue;
  exports["setValue"] = $foreign.setValue;
  exports["setValueAtTime"] = $foreign.setValueAtTime;
})(PS["Audio.WebAudio.AudioParam"] = PS["Audio.WebAudio.AudioParam"] || {});
(function(exports) {
  /* jshint maxparams: false */
  /* global exports, XMLHttpRequest */
  "use strict";

  // module Audio.WebAudio.GainNode

  exports.gain = function(node) {
    return function() {
      return node.gain;
    };
  };
})(PS["Audio.WebAudio.GainNode"] = PS["Audio.WebAudio.GainNode"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Audio.WebAudio.GainNode"];
  var Audio_WebAudio_Types = PS["Audio.WebAudio.Types"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["gain"] = $foreign.gain;
})(PS["Audio.WebAudio.GainNode"] = PS["Audio.WebAudio.GainNode"] || {});
(function(exports) {
  /* jshint maxparams: false */
  /* global exports, XMLHttpRequest */
  "use strict";

  // module Audio.WebAudio.Oscillator

  exports.startOscillator = function(when) {
    return function(n) {
      return function() {
        return n[n.start ? 'start' : 'noteOn'](when);
      };
    };
  };
})(PS["Audio.WebAudio.Oscillator"] = PS["Audio.WebAudio.Oscillator"] || {});
(function(exports) {
    "use strict";
  var $foreign = PS["Audio.WebAudio.Oscillator"];
  var Audio_WebAudio_Types = PS["Audio.WebAudio.Types"];
  var Audio_WebAudio_Utils = PS["Audio.WebAudio.Utils"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Show = PS["Data.Show"];
  var Prelude = PS["Prelude"];        
  var Sine = (function () {
      function Sine() {

      };
      Sine.value = new Sine();
      return Sine;
  })();
  var Square = (function () {
      function Square() {

      };
      Square.value = new Square();
      return Square;
  })();
  var Sawtooth = (function () {
      function Sawtooth() {

      };
      Sawtooth.value = new Sawtooth();
      return Sawtooth;
  })();
  var Triangle = (function () {
      function Triangle() {

      };
      Triangle.value = new Triangle();
      return Triangle;
  })();
  var Custom = (function () {
      function Custom() {

      };
      Custom.value = new Custom();
      return Custom;
  })();
  var oscillatorTypeShow = new Data_Show.Show(function (v) {
      if (v instanceof Sine) {
          return "sine";
      };
      if (v instanceof Square) {
          return "square";
      };
      if (v instanceof Sawtooth) {
          return "sawtooth";
      };
      if (v instanceof Triangle) {
          return "triangle";
      };
      if (v instanceof Custom) {
          return "custom";
      };
      throw new Error("Failed pattern match at Audio.WebAudio.Oscillator line 13, column 1 - line 13, column 51: " + [ v.constructor.name ]);
  });
  var setOscillatorType = function (t) {
      return function (n) {
          return Audio_WebAudio_Utils.unsafeSetProp("type")(n)(Data_Show.show(oscillatorTypeShow)(t));
      };
  };
  var frequency = Audio_WebAudio_Utils.unsafeGetProp("frequency");
  exports["Sine"] = Sine;
  exports["Square"] = Square;
  exports["Sawtooth"] = Sawtooth;
  exports["Triangle"] = Triangle;
  exports["Custom"] = Custom;
  exports["frequency"] = frequency;
  exports["setOscillatorType"] = setOscillatorType;
  exports["oscillatorTypeShow"] = oscillatorTypeShow;
  exports["startOscillator"] = $foreign.startOscillator;
})(PS["Audio.WebAudio.Oscillator"] = PS["Audio.WebAudio.Oscillator"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  exports.setTimeout = function (ms) {
    return function (fn) {
      return function () {
        return setTimeout(fn, ms);
      };
    };
  };
})(PS["Control.Monad.Eff.Timer"] = PS["Control.Monad.Eff.Timer"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Timer"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Ord = PS["Data.Ord"];
  var Prelude = PS["Prelude"];
  exports["setTimeout"] = $foreign.setTimeout;
})(PS["Control.Monad.Eff.Timer"] = PS["Control.Monad.Eff.Timer"] || {});
(function(exports) {
  // Generated by purs version 0.11.6
  "use strict";
  var Audio_WebAudio_AudioContext = PS["Audio.WebAudio.AudioContext"];
  var Audio_WebAudio_AudioParam = PS["Audio.WebAudio.AudioParam"];
  var Audio_WebAudio_GainNode = PS["Audio.WebAudio.GainNode"];
  var Audio_WebAudio_Oscillator = PS["Audio.WebAudio.Oscillator"];
  var Audio_WebAudio_Types = PS["Audio.WebAudio.Types"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Timer = PS["Control.Monad.Eff.Timer"];
  var DOM = PS["DOM"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var beep = function (ctx) {
      return function (osc) {
          return function (g) {
              return function __do() {
                  var v = Audio_WebAudio_Oscillator.frequency(osc)();
                  var v1 = Audio_WebAudio_AudioParam.getValue(v)();
                  Audio_WebAudio_AudioParam.setValue((function () {
                      var $13 = v1 === 55.0;
                      if ($13) {
                          return 53.0;
                      };
                      return 55.0;
                  })())(v)();
                  var v2 = Audio_WebAudio_AudioContext.currentTime(ctx)();
                  var v3 = Audio_WebAudio_GainNode.gain(g)();
                  var v4 = Audio_WebAudio_AudioParam.setValueAtTime(1.0)(v2)(v3)();
                  var v5 = Audio_WebAudio_AudioParam.setValueAtTime(1.0e-3)(v2 + 0.2)(v3)();
                  var v6 = Control_Monad_Eff_Timer.setTimeout(1000)(beep(ctx)(osc)(g))();
                  return Data_Unit.unit;
              };
          };
      };
  };
  var main = function __do() {
      var v = Audio_WebAudio_AudioContext.makeAudioContext();
      var v1 = Audio_WebAudio_AudioContext.createOscillator(v)();
      Audio_WebAudio_Oscillator.setOscillatorType(Audio_WebAudio_Oscillator.Square.value)(v1)();
      Audio_WebAudio_Oscillator.startOscillator(0.0)(v1)();
      var v2 = Audio_WebAudio_AudioContext.createGain(v)();
      Control_Bind.bindFlipped(Control_Monad_Eff.bindEff)(Audio_WebAudio_AudioParam.setValue(0.0))(Audio_WebAudio_GainNode.gain(v2))();
      Audio_WebAudio_AudioContext.connect(Audio_WebAudio_Types.audioNodeOscillatorNode)(Audio_WebAudio_Types.audioNodeGainNode)(v1)(v2)();
      Control_Bind.bindFlipped(Control_Monad_Eff.bindEff)(Audio_WebAudio_AudioContext.connect(Audio_WebAudio_Types.audioNodeGainNode)(Audio_WebAudio_Types.audioNodeDestinationNode)(v2))(Audio_WebAudio_AudioContext.destination(v))();
      var v3 = Control_Monad_Eff_Timer.setTimeout(250)(beep(v)(v1)(v2))();
      return Data_Unit.unit;
  };
  exports["beep"] = beep;
  exports["main"] = main;
})(PS["Test01"] = PS["Test01"] || {});
PS["Test01"].main();

},{}]},{},[1]);
