// $(document).ready(function()){
//
// });
// $.ajax({
//   type: 'GET',
//   url: 'includes/coupons.json',
//   dataType: 'json',
//   success: jsonParser
// });
//
// function jsonParser(json){
//   //$('#load').fadeOut();
//   $.getJSON('includes/coupons.json', function(data){
//     $.each(data.coupons.coupon, function(k,v){
//       var title = v.title;
//       var description = v.description;
//       var price = v.price;
//
//       $('#coupons_container').append('<div class="coupon">' + title + '</div><br/><div class="desc">' +
//     description + '</div>');
//     });
//   });
// }


// //var parties = [{id: 'p1'},{id: 'p2'},{id: 'p3'},{id: 'p4'},{id: 'p5'},{id: 'p6'}],
// 	//Create empty containers for later use
// 	$html = $rows = $(),
// 	//Break limit
//     colsPerWrap = 3;
//
// $.each(parties, function(partyIdx, party) {
// 	//Create a jQuery object with the desired content
//     var $col = $("<div/>", {
//         'class': 'col-md-4',
//         'html': '<p>' + party.id + '</p>'
//     });
// 	//Add the created object to the container
//     $rows = $rows.add($col);
// 	//At every break limit
//     if ( (partyIdx+1) % colsPerWrap === 0 ) {
// 	    //Append the cols to the inner wrapper
//         var $wrap = $("<div/>", { 'class': 'row' });
//         $wrap.append($rows);
// 	    //Empty the container for the next iteration
//         $rows = $();
// 	    //Populate the container with each inner wrapper
//         $html = $html.add($wrap);
//     }
// });
// //Always append outside the loop as DOM scan is expensive!
// $('#coupons_container').empty().append($html);
