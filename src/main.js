import { returnPara, SomeClass } from './elements.js'

document.getElementById('btnChangeText').addEventListener('click', function() {
  let para = returnPara();
  para.textContent = 'I am changed!';
});

let someclassObj = new SomeClass();
someclassObj.prop1 = "";