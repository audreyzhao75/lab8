var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(request, response) {
    var rsvpEmail = request.body.rsvpEmail;
    //print when POST request made
    console.log(rsvpEmail);
    data.rsvp.push(rsvpEmail);
    //send back data
    response.send(rsvpEmail);
}
