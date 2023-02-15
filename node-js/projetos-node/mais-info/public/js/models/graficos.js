setTimeout(() => {
  
  google.charts.load('current', {'packages':['corechart']});
  
}, 500);

function desenharPizza (grafico, titleGrafico) {
  
  console.log(grafico)
  
  var tabela = google.visualization.arrayToDataTable(

      grafico
    
    )
    
    var view = new google.visualization.DataView(tabela);

    view.setColumns([0, 1,
      { calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation" },
      2]);
      
      var opcoes = {

        title: titleGrafico,

      };
      
      var desenhaGrafico = new google.visualization.ColumnChart(document.getElementById('graficoPizza'));
      desenhaGrafico.draw(view, opcoes);
      
    }
    
    $(window).resize(function(){
      
      desenharPizza();
      
    });
    
    
export { desenharPizza }