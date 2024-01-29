const {createApp} = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = createApp({

    data:() => ({

        emails: []

    }),

    created() {
        //ciclo che per 10 volte avvia una funzione che salva nell'array vuoto "emails" un'email random fornita dall'endpoint
        for(let i=0;i<10;i++) {
            axios.get(endpoint).then((res) => {
                console.log(res.data.response)
                this.emails.push(res.data.response)
            })
        }
    }
});

app.mount('#root')