function Decoder(bytes, port) {
  // Decode plain text; not recommended 
  return {txt:String.fromCharCode.apply(null, bytes)};
}
