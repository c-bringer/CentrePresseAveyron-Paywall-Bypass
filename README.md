# CentrePresseAveyron Paywall Bypass

## Utilisation

Copier le contenu du script puis le coller dans la Console de l'inspecteur depuis la page 
de l'article.

```javascript
var e = null,
    t = document.querySelector('[rel="js-article-premium"]');

var a = t.dataset.articleToken;
!a || e && e !== a || (this.serverPaywall ? $.get("/ajax/article-content?k=" + a, (function(e) {
    $("[rel=js-article-content]").html(e),
    $(".paywall").hide()
})) : ($("[rel=js-article-content]").removeAttr("data-state").removeAttr("data-selection").removeAttr("style"),
$(".paywall").hide()))
```
    
