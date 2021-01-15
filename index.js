


stage = new createjs.Stage("document-preview");


circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
circle.x = circle.y = 50;
stage.addChild(circle)





const textarea = document.getElementById('textarea')


const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"


var text = new createjs.Text(loremIpsum, "20px Arial", "#000000");
text.x = 50;
text.y = 200;
text.lineWidth = 900

text.textBaseline = "alphabetic";

stage.addChild(text);

stage.update();





textarea.addEventListener('input', function(e) {
  text.text = loremIpsum + e.target.value
  stage.update();
}, false)
