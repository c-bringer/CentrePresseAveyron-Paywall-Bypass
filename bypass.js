//1.0
var e = null,
    t = document.querySelector('[rel="js-article-premium"]');

var a = t.dataset.articleToken;
!a || e && e !== a || ($("[rel=js-article-content]:not(.article-paywall-srv)").length > 0 ? ($("[rel=js-article-content]").removeAttr("data-state").removeAttr("data-selection"),
    $(".paywall").hide()) : $.get("/ajax/article-content?k=" + a, (function (e) {
        $("[rel=js-article-content]").html(e),
            $(".paywall").hide()
    }
)))

//2.0
var e = null,
    t = document.querySelector('[rel="js-article-premium"]');

var a = t.dataset.articleToken;
!a || e && e !== a || (this.serverPaywall ? $.get("/ajax/article-content?k=" + a, (function(e) {
    $("[rel=js-article-content]").html(e),
    $(".paywall").hide()
})) : ($("[rel=js-article-content]").removeAttr("data-state").removeAttr("data-selection").removeAttr("style"),
$(".paywall").hide()))
