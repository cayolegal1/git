Array.prototype.saludar = function(){
    return this.forEach(item => typeof item === 'string' && console.log(`Hola ${item}`))
}

const arr = ['Julio', 'Maria', 'Mama', {nombre: 'hola'}]

arr.saludar()
