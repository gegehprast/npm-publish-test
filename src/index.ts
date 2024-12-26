import Thing from './Thing.js'

const thing = (name: string) => {
    return new Thing(name)
}

export const hello = (name: string) => {
    return thing(name).sayHello()
}

export const goodbye = (name: string) => {
    return thing(name).sayGoodbye()
}

export const isTheOrderOfThePhoenix = (name: string) => {
    return name === 'Dumbledore'
}

export default thing
