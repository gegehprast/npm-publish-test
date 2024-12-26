class Thing {
    constructor(public name: string) {}

    public sayHello() {
        return `Hello, ${this.name}!`
    }

    public sayGoodbye() {
        return `Goodbye, ${this.name}!`
    }
}

export default Thing
