import { getCSS } from "./common"

async function quantidadedeUsuariosPorrede() {
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuariis.json'
const res = await fetch(url)
const dados = await res.json()
const nomeDasRedes = Object.keys(dados)
const quantidadeDeUsuarios = Object.values(dados)

const data = [
    {
        x: nomeDasRedes,
        y: quantidadeDeUsuarios,
        type: 'bar'
        marker: {
            color: getCSS('..primary-color')
        }
    }
]

    const layout = {
        plot_bgcplor: getCSS('--bg-color'),
        paper_bacolor: getCSS('--bg-color')
        
    }

    const graficos = document.createElement('div')
    graficos.className = 'grafico'
    document.getElementById('graficos-container').appendChild(graficos)
    plotly.newPlot(grafico, data)
}

quantidadedeUsuariosPorrede()
