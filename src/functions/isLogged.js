import * as SecureStore from 'expo-secure-store';

export default async function Entrar(info) {

    try {
       
        const logs = await SecureStore.getItemAsync("userLogged");
        const logsLista = JSON.parse(logs || false);

        if (logsLista) {
            return logs
        }
        else {
            return false
        }

    }catch(erro) {
        console.log(erro)
    }
}