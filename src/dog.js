// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  bark() {
    return `Arf, I am ${this.name}`;
  }
}

export default Dog;
