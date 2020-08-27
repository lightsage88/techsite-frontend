export const base64ToImage = data => {
  const arrayBufferToBase64 = buffer => {
    var binary = ''
    var bytes = new Uint8Array( buffer )
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] )
    }
    return window.btoa( binary )
  }
  
  const imageSrc = 
    data.image 
      ? `data:${data.mimetype};base64,${arrayBufferToBase64(data.image.data)}`
      : null
  
  return imageSrc
}

