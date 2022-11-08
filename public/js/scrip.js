identificar_pedido()
//Declarando variables:

var botonOpen = document.getElementById("btn-open");
var barraLateral = document.getElementById("pull-down");

botonOpen.addEventListener("click", dezplegarBarra);

function dezplegarBarra(){
    barraLateral.classList.toggle("barra-dezplegada")
    barraLateral.classList.toggle("pull-down")
}
function logout (){
    let url = '/auth/lagout';
    let config = {
        method: 'POST',
        body: ""
    }
    fetch(url, config)
    .then(res => res.json())
    .then(data=> {
        localStorage.removeItem('token');
        if(data.status == 'error') return window.location.href = '/';
        else window.location.href = '/'
    })
    .catch(err => console.log(err))
}
let token = localStorage.getItem('token');
    window.addEventListener("load", async() =>{
        if(!token) window.location.href = '/'
        console.log(token)
    })


    function identificar_pedido(){
      
        fetch(`/pedidosPendientes` ,{
          method: 'get'
        })
        .then(resp=>resp.json())
        .then(data=>{
            let pedido = ``
            data.forEach(element => {
                pedido+=`"${element.pedidos}"`
            });
          console.log(data) 
          document.getElementById('pedidos').innerHTML= pedido;
          console.log(pedido)
        })
        
    }
    
    
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
                                {"data": "cliente"},
                                {"data": "fecha"},
                                {"data": "producto"},
                                {"data": "total"}
                            ]
                }) 
          })
      }

      module.exports = {identificar_pedido, pedidosPendientes}