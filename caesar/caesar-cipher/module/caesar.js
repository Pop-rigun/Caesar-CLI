module.exports = caesarCipher = (data, shift, action) => {
  const Alph = 26;
  const CodeUp = 65;
  const CodeLow = 122;
  const CodeUpEnd = 90;
  const CodeLowEnd = 97;

  shift = action === 'encode' ? +shift : -shift;

  data = data.toString()
  
  if (shift < 0) shift = shift + 26; 
  
  return data.split('').map(sign => {
    const value = sign.charCodeAt();
    
    if (value >= CodeUp && value <= CodeUpEnd) {
      sign = String.fromCharCode(
        ((value - CodeUp + shift) % Alph) + CodeUp);
    } 
    
    else if (value >= CodeLowEnd && value <= CodeLow) {
      sign = String.fromCharCode(
        ((value - CodeLowEnd + shift) % Alph) + CodeLowEnd);
      }
    
      return sign
  }).join('')
}
  