import { add } from './Calculator.js'
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

export const whatIs2Plus2 = () => {
    return add(2, 2)
}

export const whatIs3Plus3 = () => {
    return add(3, 3)
}

export default thing
