import * as SecureStore from 'expo-secure-store';


export default async function Entrar(info) {

    try {

        const Usuarios = await SecureStore.getItemAsync("usuarios");
        const UsuariosLista = JSON.parse(Usuarios || "[]");

        if (UsuariosLista.length > 0) {

            for (let i = 0; i < UsuariosLista.length; i++) {

                const usuario = UsuariosLista[i]
                console.log(usuario)
                if (usuario.user == info.user && usuario.pass == info.pass) {

                    console.log(UsuariosLista)
                    console.log(info)

                    console.log("Login bem-sucedido!");
                    const userCorrigido = JSON.stringify(info.user);
                    await SecureStore.setItemAsync("userLogged", userCorrigido);
                    
                    return true;
                }
            }
            console.log(info)
            return false
        }
        else {
            return false

        }


    }catch(erro) {

        console.log(erro)
    }
}