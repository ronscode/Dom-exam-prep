function encodeAndDecodeMessages() {
    console.log('TODO...')
    let textBoxes = document.getElementsByTagName('textarea');
    let theButtons = document.getElementsByTagName('button')
    let encodeBox = textBoxes[0];
    let decodeBox = textBoxes[1];
    let encodeButton = theButtons[0];
    let decodeButton = theButtons[1];
    console.log("encode box ", encodeBox);
    //console.log("decode box", decodeBox);
  console.log(theButtons, encodeButton, decodeButton)
  encodeButton.addEventListener('click', () => {
    console.log("the encode button was clicked.", encodeBox.value)
    let toEncode = encodeBox.value;
    let secretMessage = [] // empty array for results
    // convert each letter to ASCII
    // Subtract 1 then convert back to new letter
    for (var i = 0; i < toEncode.length; i++) {
      let tempASCIINum = toEncode.charCodeAt(i) + 1; // temp storage var
      console.log("temp ascii num before converting back to char is ", tempASCIINum)
      secretMessage.push(String.fromCharCode(tempASCIINum)) 
      console.log(String.fromCharCode(tempASCIINum -1))
    }
    let secretMessageASCII = secretMessage.join("");
    encodeBox.value = "";
    decodeBox.innerText = secretMessageASCII;
  });

  decodeButton.addEventListener('click', () => { // "click" is our event, 2nd arg is the function to exectute
    console.log("the decode button was clicked.", decodeBox.value)
    let toDecode = decodeBox.value;
    let decodedMessage = [] // just a letter storage silo
    // convert each letter to ASCII
    // Subtract 1 then convert back to new letter
    for (var i = 0; i < toDecode.length; i++) { // HOW TO DECODE? 
      let tempASCIINum = toDecode.charCodeAt(i) - 1; // find the number, subtract 1 to find original value
      decodedMessage.push(  String.fromCharCode( tempASCIINum  )) // push each letter onto an array.
    }
    let decodedMessageASCII = decodedMessage.join("");
    decodeBox.innerText = decodedMessageASCII;
  });
}
//var someNum = 65;
var res = String.fromCharCode(49);
console.log(res, Number(res))
console.log("res is..." ,typeof(Number(res)))