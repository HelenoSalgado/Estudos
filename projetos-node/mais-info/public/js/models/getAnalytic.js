var dataNavegadores = [['Element', 'Density', { role: 'style' }]]
var dataCidades = [['Element', 'Density', { role: 'style' }]]
var dataDispositivos = [['Element', 'Density', { role: 'style' }]]
var dataDasVisitas = [['Element', 'Density', { role: 'style' }]]
var dataTrafegos = [['Element', 'Density', { role: 'style' }]]


let getAnalytics =  async () => {


//https://clicky.com/?site_id=101379182&sitekey=002897bb580179e7
        
    const response = await fetch ("https://api.clicky.com/api/stats/4/?site_id=101330379&sitekey=eac397bc9a744d3f&type=web-browsers,cities,traffic-sources,operating-systems,actions-pageviews&date=last-7-days&output=json")

    //this-week,visitors-list,web-browsers,links-recent,traffic-sources,cities&output=json

    let dataResult = await response.json()

    // Visitas mais ativas

    let indexVisitantes = dataResult[4].dates[0].items

    for (let i = 0; i < indexVisitantes.length; i++) {

      let arrayVisitas = []
      arrayVisitas.push(indexVisitantes[i].title, Number(indexVisitantes[i].value),'stroke-color: #ff662d; stroke-width: 2; fill-color: #f32937; fill-opacity: 0.5');
      dataDasVisitas.push(arrayVisitas)
    
    }

    // Acessos por Navegadores

    let navegadores = dataResult[0].dates[0].items

    for (let i = 0; i < navegadores.length; i++) {

      let arrayNavegadores = []
      arrayNavegadores.push(navegadores[i].title, Number(navegadores[i].value),'stroke-color: #ff662d; stroke-width: 2; fill-color: #f32937; fill-opacity: 0.5');
      dataNavegadores.push(arrayNavegadores)
    
    }

    // Fontes de Tráfegos

    let trafegos = dataResult[2].dates[0].items

    for (let i = 0; i < trafegos.length; i++) {

      let arrayTrafegos = []
      arrayTrafegos.push(trafegos[i].title, Number(trafegos[i].value),'stroke-color: #ff662d; stroke-width: 2; fill-color: #f32937; fill-opacity: 0.5');
      dataTrafegos.push(arrayTrafegos)
    
    }

    // Trafego por Cidades

    let cidades = dataResult[1].dates[0].items

    for (let i = 0; i < cidades.length; i++) {

      let arrayCidades = []
      arrayCidades.push(cidades[i].title, Number(cidades[i].value),'stroke-color: #ff662d; stroke-width: 2; fill-color: #f32937; fill-opacity: 0.5');
      dataCidades.push(arrayCidades)
    
    }

    // Acesso por Dispositivos

    let dispositivos = dataResult[3].dates[0].items

    for (let i = 0; i < dispositivos.length; i++) {

      let arrayDispositivos = []
      arrayDispositivos.push(dispositivos[i].title, Number(dispositivos[i].value),'stroke-color: #ff662d; stroke-width: 2; fill-color: #f32937; fill-opacity: 0.5')
      dataDispositivos.push(arrayDispositivos)
    
    }

     console.log(dataResult)


 }


getAnalytics()

export { dataDasVisitas, dataNavegadores, dataTrafegos, dataCidades, dataDispositivos }
