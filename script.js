const {createApp} = Vue;

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

const app = createApp({

    data:() => ({

        emails: []

    }),

    computed: {
        //mi restituisce la lunghezza di destinations
        lastElementIndex(){
            return this.destinations.length - 1;
        },
       
    },

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