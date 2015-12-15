(function(){

  var Rectangle = Backbone.Model.extend({});

  var RectangleView = Backbone.View.extend({
    tagName: 'div',
    className: 'rectangle',


    events: {
      'click': 'move'
    },

    move: function() {
      this.$el.css('left', this.$el.position().left + 10);
    },

    render: function() {
      this.setDimensions();
      this.setPosition();
      this.setColor();
      return this;
    },

    setDimensions: function() {
      this.$el.css({
        width: this.model.get('width') + 'px',
        height: this.model.get('height') + 'px'
      });
    },

    setPosition: function() {
      var position = this.model.get('position');
      this.$el.css({
        left: position.x,
        top: position.y
      });
    },

    setColor: function() {
      var color = this.model.get('color');
      this.$el.css('background-color', color);
    },
  });

  var models = [
    new Rectangle({
    width: 100,
    height: 60,
    position: { x: 300, y: 150 },
    color: 'purple'}),

    new Rectangle({
    width: 200,
    height: 120,
    position: { x: 150, y: 75 },
    color: 'red'}),

    new Rectangle({
    width: 100,
    height: 60,
    position: { x: 75, y: 35.5},
    color: 'blue'})
  ]

  var myRectangle = new Rectangle({
    width: 100,
    height: 60,
    position: { x: 300, y: 150 },
    color: 'purple'
  });

  _(models).each(function(model) {
    var myView = new RectangleView({model: model});

    $('#canvas').append(myView.render().el);
  });


})();
