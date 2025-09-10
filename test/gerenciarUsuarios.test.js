const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario({
            nome: 'Denis',
            email: 'denis@denis.com'
        });
        // 2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();
        // 3. Comparar se o novo nome está no fim da lista de usuários
        // expect(listaDeUsuarios.at(-1).nome).to.equal('Denis');  // para comparar dois valores
        // expect(listaDeUsuarios.at(-1).email).to.equal('denis@denis.com');
        expect(listaDeUsuarios.at(-1)).to.eql({
            email: 'denis@denis.com',           //vai comparar o objeto todo e n olha para ordem da propriedade
            nome: 'Denis'

        });
    });
});
