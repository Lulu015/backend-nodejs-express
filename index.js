const herois = ["Mulher-maravilha", "Capitã Marvel", "Homem de Ferro"];
const express = require ("express");
const app = express();

//Habilitação do processamento de JSON
app.use(express.json());

//Endpoint inicial
app.get("/", function (req, res) {
    res.send("Hello World!");
});

//Endpoint /oi
app.get("/oi", function (req, res) {
    res.send("Olá mundo!");
});

//Lista
const lista = ["Mulher-maravilha", "Capitã Marvel", "Homem de Ferro"];

//Read ALL -> [GET] /herois
app.get("/herois", function (req, res) {
    res.send(lista);
});

//Create -> [POST] /herois
app.post("/herois", function (req, res) {
    //Debug de verificação da requisição
    console.log(req.body);
    //Extrai o nome do corpo da requisição 
    const item = req.body.nome;
    //Inseri o item na lista
    lista.push(item);
    //Envia a resposta de sucesso para o frontend
    res.send("Heroi adicionado com sucesso!");
});

//Read by ID -> [GET] /herois/:id
app.get("/herois/:id", function (req, res) {
    //Parâmetro inicial da rota (id)
    const id = req.params.id - 1;
    //Busca o item na lista pelo id
    const item = lista[id];
    //Exibe o item encontrado
    res.send(item);
});

//Update -> [PUT] /herois/:id
app.put("/herois/:id", function (req, res) {
    //Parâmetro inicial da rota (id)
    const id = req.params.id - 1;
    //Extrai o nome do corpo da requisição
    const item = req.body.nome;
    //Atualiza o item na lista 
    lista[id] = item;
    //Exibe a resposta de sucesso 
    res.send("Heroi atualizado com sucesso!");
});

//Delete -> [DELETE] /herois/:id
app.delete("/herois/:id", function (req, res) {
    //Remove o 'null' da lista após deleção 
    res.send(lista.filter(Boolean));
    //Parâmetro inicial da rota (id)
    const id = req.params.id - 1;
    //Remove o item da lista
    delete lista[id];
    //Exibe a resposta de sucesso
    res.send("Heroi removido com sucesso!");
});

app.listen(3000);