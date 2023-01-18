class Accounts {
    personal: string;
    cooperative: string;
}

export class Cooperated {
    ni: string;
    name: string;
    nascimento: string;
    accounts: Accounts = new Accounts();


    constructor(data: any = null) {
        if (data != null && data != undefined) {
            this.ni = data.ni;
            this.name = data.nome;
            this.nascimento = data.nascimento;
            if (data.accounts) {
                this.accounts.personal = data.accounts.personal;
                this.accounts.cooperative = data.accounts.cooperative;
            }
        }
    }
}