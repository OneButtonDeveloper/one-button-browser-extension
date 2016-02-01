// Generated by CoffeeScript 1.10.0
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (function(LorenIpsum) {
    var Randomizer;
    Randomizer = (function() {
      function Randomizer() {
        this.getMeat = bind(this.getMeat, this);
      }

      Randomizer.prototype.meat = ['alcatra', 'amet', 'andouille', 'bacon', 'ball', 'beef', 'belly', 'biltong', 'boudin', 'bresaola', 'brisket', 'capicola', 'chicken', 'chop', 'chuck', 'corned', 'cow', 'cupim', 'dolor', 'doner', 'drumstick', 'fatback', 'filet', 'flank', 'frankfurter', 'ground', 'ham', 'hamburger', 'hock', 'ipsum', 'jerky', 'jowl', 'kevin', 'kielbasa', 'landjaeger', 'leberkas', 'loin', 'meatball', 'meatloaf', 'mignon', 'pancetta', 'pastrami', 'picanha', 'pig', 'porchetta', 'pork', 'prosciutto', 'ribeye', 'ribs', 'round', 'rump', 'salami', 'sausage', 'shank', 'shankle', 'short', 'shoulder', 'sirloin', 'spare', 'steak', 'strip', 'swine', 't-bone', 'tail', 'tenderloin', 'tip', 'tongue', 'tri-tip', 'turducken', 'turkey', 'venison'];

      Randomizer.prototype.getMeat = function() {
        return this.meat[Math.floor(Math.random() * this.meat.length)];
      };

      Randomizer.get = function() {
        return Randomizer.randomizer != null ? Randomizer.randomizer : Randomizer.randomizer = new Randomizer();
      };

      return Randomizer;

    })();
    return LorenIpsum.initialize = function() {
      var handlers;
      console.log('initialize');
      handlers = {};
      handlers.input = function($el) {
        return $el.val(Randomizer.get().getMeat());
      };
      shortcut.add("Alt+F1", function() {
        var el, name;
        if (el = document.activeElement) {
          return typeof handlers[name = el.tagName.toLowerCase()] === "function" ? handlers[name]($(el)) : void 0;
        }
      });
      return console.log('initialize2');
    };
  })(OButton.LorenIpsum != null ? OButton.LorenIpsum : OButton.LorenIpsum = {});

}).call(this);

