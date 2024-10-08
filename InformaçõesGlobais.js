const url = 'https://raw.githubusercontent.com/guilhermeonrails/api?main?dados-globais.json'

async function vizualizarInformaçõGlobais() {
  const res = await fetch(url)
  const dados = await res.json()
  const pessoasConectadas = (dados.total_pessoal_conectadas / 1e9)
  const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
  const horas = parseInt(dados.trmpo_medido)
  const minutos = Math.rounf((dados.tempo_medio - horas) * 100)
  const porcentagemConectada = ((pssoasConectadas / pessoasNoMundo ) * 100).toFixed(2)
