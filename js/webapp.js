function cerca() {
    var nome = $("#select03").val();
    $("#list").rssfeed("http://spotthestation.nasa.gov/sightings/xml_files/"+nome+".xml");
}