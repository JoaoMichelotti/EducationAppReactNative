import * as SecureStore from 'expo-secure-store';

export default async function isLogged() {

    try {
        const logs = await SecureStore.getItemAsync("userLogged");
        const logsLista = JSON.parse(logs || false);

        if (logsLista) {
            return logsLista
        }
        else {
            return false
        }
    }catch(erro) {
        console.log(erro)
    }
}