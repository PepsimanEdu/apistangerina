const btc = document.getElementById('btc')
const consulta = document.getElementById('consulta')

const cli = document.getElementById('cli')
const consulta2 = document.getElementById('consulta2')

const cepi = document.getElementById('cepi')
const consulta3 = document.getElementById('consulta3')
const lbltext = document.getElementById('lbltext')

const dol = document.getElementById('dol')
const consulta4 = document.getElementById('consulta4')





//bitcoin abre.........................................................................................



const apibtc = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
});


async function consultar(){
    const response = await apibtc.get();
    const bit = (response.data.ticker.high);
    btc.innerHTML = 'R$ ' + parseFloat(bit).toFixed(2)
   
    //btc.innerHTML = parseFloat(bit.toFixed(2));
}

consulta.onclick = ()=>{
    consultar();
};



//bitcoin fecha.......................................................................................













//clima abre.........................................................................................



const apicli = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=eb03e9c5&city_name=Volta_Redonda,RJ'
});

async function consultar2(){
    const response = await apicli.get();
    cli.innerHTML = response.data.results.temp + '°';

    clim.innerHTML = response.data.results.description;

    clima.innerHTML = response.data.results.city_name;
}

consulta2.onclick = ()=>{
    consultar2();
};



//clima fecha.......................................................................................











//cep abre..........................................................................................



const apicep = axios.create({
    baseURL:'https://viacep.com.br/ws/'
});

async function consultar3(){
    const cep = lbltext.value
    const response = await apicep.get( cep + /json/);
    cepi.innerHTML = response.data.logradouro;

    bairro.innerHTML = response.data.bairro;

    cidade.innerHTML = response.data.localidade;

    DDD.innerHTML = response.data.ddd;
}

consulta3.onclick = ()=>{
    consultar3();
};



//cep fecha.........................................................................................











//dolar abre.......................................................................................



const apidol = axios.create({
    baseURL:'https://economia.awesomeapi.com.br/json/last/USD-BRL'
});

async function consultar4(){
    const response = await apidol.get();
    const resp = (response.data.USDBRL.bid);
    dol.innerHTML = 'R$ ' + parseFloat(resp).toFixed(2);
}

consulta4.onclick = ()=>{
    consultar4();
};



//dolar fecha......................................................................................






