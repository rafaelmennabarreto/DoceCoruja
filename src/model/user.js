export default class User {
  constructor({id, name, photoUrl}) {
    this.id = id || 0;
    this.name = name || '';
    this.photoUrl = photoUrl || '';
  }
}
