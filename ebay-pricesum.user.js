// ==UserScript==
// @include https://(m|www).ebay.(at|ca|ch|com|com.au|com.hk|com.my|com.sg|co.uk|de|es|fr|ie|it|nl|ph|pl)/.*
// eBay-PriceSum: sum the price for item and shipping.

function main() {
  for (e of document.querySelector("#itemPrice")){
    //do something;
  }
}
window.addEventListener("DOMContentLoaded", main);
