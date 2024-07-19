//importar o express atravé do require 
import express from 'express'

//instanciando o express
const app = express()

// indicar para o express ler body com json
app.use(express.json())

// mock
const selecoes = [ 
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suiça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
    
]

// criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso de NodeJs!')
})

app.get('/selecoes', (rep, res) => {
    res.status(200).send(selecoes)
})

app.post('/selecoes', (rep, res) => {
    selecoes.push(rep.body)
    res.status(201).send('Seleção cadastrada com sucesso')
})
        
 
export default app






