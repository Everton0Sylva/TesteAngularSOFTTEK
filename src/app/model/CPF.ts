export class Cpf {
  ni: string
  nome: string
  situacao: {
    codigo: number,
    descricao: string
  }
  nascimento: string;

  constructor(data: any = null) {
    if (data != null && data != undefined) {
      this.ni = data.ni;
      this.nome = data.nome;
      this.situacao = {
        codigo: parseInt(data.situacao.codigo),
        descricao: data.situacao.descricao
      };
      this.nascimento = data.nascimento;
    }
  }
}
