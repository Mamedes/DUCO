export default class Hotel {
  id: number;
  name: string;
  email: string;
  table: number;
  constructor(id: number, name: string, email: string, table: number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.table = table;
  }
}
