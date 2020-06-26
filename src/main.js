import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { SuperGalactic } from './../src/superGalactic.js';

$(document).ready(function() {
  $("form#ageForm").submit(function(event) {
    event.preventDefault();
    const ageInput = $("#age").val();
    const lifeExpectancyInput = $("#lifeExpectancy").val();
    let sG = new SuperGalactic(ageInput, lifeExpectancyInput);
    $("#output").text(sG.runSuperGalactic());
  });
});