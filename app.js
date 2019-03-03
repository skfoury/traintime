var now = moment().format('HH:mm');

function update() {
  $('#currenttime').html(now);
}

setInterval(update, 1000);

//  var config = {
//   apiKey: "AIzaSyBdWpLTCdOtvmIUez5pBOR9yWXLptECvHw",
//   authDomain: "train-7a9f1.firebaseapp.com",
//   databaseURL: "https://train-7a9f1.firebaseio.com",
//   storageBucket: "bucket.appspot.com"
// };
// firebase.initializeApp(config);

// var database = firebase.database();


 $("#submitbutton").on("click", function() {
    var name = $("#name").val().trim();
    var destination = $("#destination").val().trim();
    var time = $("#time").val().trim();
    var frequency = $("#frequency").val().trim();
    $( "#namediv" ).append( name + "<br/>");
    $( "#destdiv" ).append( destination + "<br/>");
    $( "#freqdiv" ).append( frequency + "<br/>");
    $( "#timediv" ).append( time + "<br/>");
    $( "#minsdiv" ).append( "" );
    var timenow = moment(now, "HH:mm");
    var mins = moment(time, "HH:mm");
    var minsfromnow = mins.diff(timenow, "minutes");
    $( "#minsdiv" ).append( minsfromnow + "<br/>" );
 });
 