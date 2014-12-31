/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Transform = famous.core.Transform;
var Surface = famous.core.Surface;

// create the main context
var mainContext = Engine.createContext();
//mainContext.setPerspective(200);

// create the red surface
var redSurface = new Surface({
    size: [200, 200],
    content:'red',
    properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
    }
});

// create the blue surface
var blueSurface = new Surface({
  size: [200, 200],
  content:'blue',
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#102B6A'
  }
});

// create the green surface
var greenSurface = new Surface({
  size: [200, 200],
  content:'green',
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#7FB80E'
  }
});

var centerModifier = new Modifier({
  origin: [0.5,0.5],
  align: [0.5,0.5]
});

var translateModifierRed = new Modifier({
  transform:Transform.translate(10, 10, 0)
});

var translateModifierBlue = new Modifier({
  transform:Transform.translate(-100,0,0)
});

var translateModifierGreen = new Modifier({
  transform:Transform.translate(500,100,0)
});

var rotateModifierRed = new Modifier({
  transform:Transform.rotateX(Math.PI/2)
});

var rotateModifierBlue = new Modifier({
  transform:Transform.rotateY(-2*Math.PI/3)
});

var rotateModifierGreen = new Modifier({
  transform:Transform.rotateY(-Math.PI/3)
});

//var node = mainContext.add(translateModifierRed).add(redSurface);
//node.add(translateModifierBlue).add(rotateModifierBlue).add(blueSurface);
//node.add(translateModifierGreen).add(rotateModifierGreen).add(greenSurface);

var node = mainContext.add(translateModifierRed);
node.add(redSurface);
node.add(rotateModifierBlue).add(translateModifierBlue).add(blueSurface);
node.add(rotateModifierBlue).add(translateModifierBlue).add(blueSurface);

var initialTime = Date.now();
var centerSpinModifier = new Modifier({
  origin: [0.5, 0.5],
  align: [0.5, 0.5],
  transform : function () {
    return Transform.rotateY(.002 * (Date.now() - initialTime));
  }
});

mainContext.add(centerSpinModifier).add(node);
