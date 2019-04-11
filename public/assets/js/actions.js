$(document).ready(function ($) {
    responsiveViewClass();
    $(window).resize(function () {
        responsiveViewClass();
    });
});

$.getJSON("http://localhost:8888/api/V1/categories/list", function (data) {
    $(function () {
        function parseMenu(li, menu) {
            for (var i = 0; i < menu.length; i++) {
                var li = $(li).append('<li class="nav-item"><a href="/api/V1/categories/' + menu[i].id + '">' + menu[i].name + '</a></li>');
            }
        }
        function parseTitle(h1, titlePage) {
            var h1 = $(h1).append(titlePage[0].name);

        }
        var items = $('#menu ul');
        parseMenu(items, data.items);

        var items = $('#titlePage h1');
        parseTitle(items, data.items);
    });

});

$.getJSON("http://localhost:8888/api/V1/categories/1", function (data) {
    $(function () {
        function parsePage(element, item) {
            for (var i = 0; i < item.length; i++) {
                var element = $(element).append('<div id="product" class="col-md-4 col-sm-12">' +
                    '<p class="thumb"><img src="' + item[i].image + '" class="img-fluid" alt="' + item[i].name + '"></p>' +
                    '<p class="description">' + item[i].name + '</p>' +
                    '<p class="price">R$ ' + item[i].price + '</p>' +
                    '<p><button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button></p>');
            }
        }
        var items = $('#products');
        parsePage(items, data.items);
    });
});

$(".navbar-toggler").click(function () {
    $(".main-menu").toggleClass("main-menu-responsive");
    $("main").toggleClass("main-page-responsive");
});

var responsiveViewClass = function () {
    var desktopView = $(document).width();
    if (desktopView >= "768") {
        $("#navbarSupportedContent").removeClass("navbar-collapse collapse")
    } else if (desktopView <= "425") {
        $("#navbarSupportedContent").addClass("navbar-collapse collapse")
    };
    if (desktopView >= "400") {
        $("#bar-init").removeClass("text-center")
    } else if (desktopView <= "401") {
        $("#bar-init").addClass("text-center")
    };
}

