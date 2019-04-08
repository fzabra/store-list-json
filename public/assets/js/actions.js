$.getJSON( "http://localhost:8888/api/V1/categories/list", function( data ) {
    $(function () {        
        function parseMenu(li, menu) {
        for (var i=0;i<menu.length;i++) {
            var li=$(li).append('<li class="nav-item"><a href="/api/V1/categories/'+menu[i].id+'">'+menu[i].name+'</a></li>');
        }
    }
    var items=$('#menu ul');
        parseMenu(items, data.items);
     });
  });

  $.getJSON( "http://localhost:8888/api/V1/categories/1", function( data ) {
    $(function () {        
        function parsePage(element, item) {
        for (var i=0;i<item.length;i++) {
            var element=$(element).append('<div id="product" class="col-md-4">'+
            '<p class="thumb"><img src="'+item[i].image+'" alt="'+item[i].name+'"></p>'+
            '<p class="description">'+item[i].name+'</p>'+
            '<p class="price">R$ '+item[i].price+'</p>');
        }
    }
    var items=$('#products');
        parsePage(items, data.items);
     });
  });