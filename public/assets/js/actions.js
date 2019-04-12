$(document).ready(function ($) {
    responsiveViewClass();
    $(window).resize(function () {
        responsiveViewClass();
    });
    getPage(1);
});
function getPage(itemId) {
    $.getJSON("http://localhost:8888/api/V1/categories/" + itemId, function (data) {
        $(function () {
            // console.log(data);
            function parsePage(element, item) {
                $(element).empty();
                for (var i = 0; i < item.length; i++) {
                    var element = $(element).append('<div id="product" class="col-md-4 col-sm-12">' +
                        '<p class="thumb"><img src="' + item[i].image + '" class="img-fluid" alt="' + item[i].name + '"></p>' +
                        '<p class="description">' + item[i].name + '</p>' +
                        '<p class="price">R$ ' + item[i].price + '</p>' +
                        '<p><button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button></p>');
                }
            }
            var elementoDom = $('#products');
            parsePage(elementoDom, data.items);
        })
    })

    $.getJSON("http://localhost:8888/api/V1/categories/list", function (data2) {
        $(function () {
            function parseMenu(li, menu) {
                $(li).empty();
                for (var i = 0; i < menu.length; i++) {
                    var li = $(li).append('<li class="nav-item"><a href="#" onclick="getPage(' + menu[i].id + ')">' + menu[i].name + '</a></li>');
                }
            }
            var domElementMenu = $('#menu ul');
            parseMenu(domElementMenu, data2.items);

            function parseTitle(h1, titlePage) {
                if (itemId == 0) {
                    $(h1).empty();
                    var h1 = $(h1).append(titlePage[1].name);
                } else {
                    $(h1).empty();
                    var h1 = $(h1).append(titlePage[itemId].name);
                }

            }
            var domElementTitle = $('#titlePage h1');
            parseTitle(domElementTitle, data2.items);
        });
    });
}

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

