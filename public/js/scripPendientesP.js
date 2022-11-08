pedidosPendientes()
function pedidosPendientes(){

    console.log('holllllllllllllll')
          
      fetch("/pedidoP",{
          method : 'GET'
      }).then(resp => resp.json()
      ).then (data => {
            $('#tabla_content').DataTable({
              "paging": true,
              "autoWidth": false,
              "processing": true,
/*             scroollY: true,
 */           "pageLength" : 6,
              "responsive": true,
              "destroy": true,
              "data": data,
              dom: 'Bfrtip',
              buttons:[
                 'excel', 'pdf'
              ],
              columns: [
                            {"data": "Nº"},
                            {"data": "Cliente"},
                            {"data": "Estado"},
                            {"data": "Fecha"}
                        ]
            }) 
      })
  }
