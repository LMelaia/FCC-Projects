/* Gets a quote when the page loads */
$(document).ready(function() {
  getQuote();
});

/*
  This function gets a random quote from
  https://andruxnet-random-famous-quotes.p.mashape.com.

  I got this function from
  https://codepen.io/FreeCodeCamp/pen/ONjoLe?editors=0010
  and modified for this webpage.
*/
function getQuote() {
  $("#quote").html("Getting quote...");
  $("#credit").html("");

  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      if (typeof response === 'string') {
       response = JSON.parse(response);
      }

      currentQuote = response.quote;
      currentAuthor = response.author;

      $("#quote").html('"' + currentQuote + '"');
      $("#credit").html('- by ' + currentAuthor);
    }
  });
}

/*
  Tweets the current quote.
*/
function tweet(){
  window.open(
    'https://twitter.com/intent/tweet?hashtags=&text=' + '"' + currentQuote + '" ' + currentAuthor
  );
}
