var username = "Cliffton";
var email = "cliffton@gmail";

function getconfirmation() {
    var retVal = confirm("Do you want to continue?");

    if (retVal == true) {
        document.getElementById("name").value = username;
        document.getElementById("email").value = email;

        // document.write("User will proceed..");
        // return true;
    } else {// document.write("user has cancelled the operation.");
        //return false;
    }
}