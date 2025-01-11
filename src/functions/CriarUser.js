import * as SecureStore from 'expo-secure-store';

export default async function criarUser(user, pass) {
    try {

            // Recupera os usuários já armazenados
            const Usuarios = await SecureStore.getItemAsync("usuarios");
            const UsuariosLista = JSON.parse(Usuarios || "[]");

            // Adiciona o novo usuário
            UsuariosLista.push({user, pass});

            // Converte a lista para string e salva novamente
            const UsuariosListaNovos = JSON.stringify(UsuariosLista);
            await SecureStore.setItemAsync("usuarios", UsuariosListaNovos);
    }
    catch(erro) {
        console.log(erro)
    }


}

