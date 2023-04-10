export class Contacts {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string,
    public phone: string,
    public company: string,
    public status: string,
    public date: string,
    public probability_status: string,
    public state: string
  ) {}
}
