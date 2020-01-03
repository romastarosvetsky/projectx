export class SelectOption {
  value: string;
  name: string;

  constructor(value: string, name?: string) {
    this.value = value;
    this.name = name || this.value;
  }
}
