
<script LANGUAGE="JavaScript">

<!-- hide from non-scriptable browsers



function chooseRandom(form) {

var m = parseInt(form.lower.value);

var n = parseInt(form.upper.value) - m;



// alert("m is is " + m + " n is " + n);



var output = Math.round(Math.random() * n) + m;

form.result.value = output;





}





// Clear a form

function clearForm(form) {

	form.upper.value="";

	form.lower.value="";

	form.upper.focus();

    form.upper.select();

}

// end hiding -->

</script>





