var count = 0;
function validate() {
    document.getElementById("send").style.display = "none";
    var name = document.getElementById("name").value;
    if (name.length < 4) {
        document.getElementById("namep").innerHTML = "Please Enter at least 4 Characters"
    }
    else {
        document.getElementById("namep").innerHTML = " "
        count = 1;
    }}





    function validateem(){
        var email = document.getElementById("email").value;
    if (email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)) {
        document.getElementById("emailp").innerHTML = " "
        count = 2
    }
    else {
        document.getElementById("emailp").innerHTML = "Enter a valid Email address"
    }
    }






    function validatesub() {
        var sub = document.getElementById("subject").value;
    if (sub.length < 10) {
        document.getElementById("subp").innerHTML = "Please enter at least 10 characters"
    }
    else {
        document.getElementById("subp").innerHTML = " "
        count = 3
    }
        
    }


    function validatemsg() {
        var msg = document.getElementById("message").value;
    if (msg.length < 10) {
        document.getElementById("msgp").innerHTML = "Please enter atleast 10 characters"
    }
    else {
        document.getElementById("msgp").innerHTML = ""
        count = 4
    }
    console.log(count)

        
    }



function send() {
    if (count == 4) {

        $("#submit-form").submit((e) => {
            e.preventDefault()
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbwAJ245l08Qd_sB9MlHWVSnZS-0JN3AQXr2ds2ZbjtMB4SfnPJ5x9_7fsK0w8shllVE/exec",
                data: $("#submit-form").serialize(),
                method: "post",
                beforeSend: function () {
                    document.getElementById("load").style.display = "block";
                },
                success: function () {
                    document.getElementById("load").style.display = "none";
                    document.getElementById("send").style.cssText = "display:block; background-color: green;";
                    document.getElementById("send").innerHTML = "Your Message has send succesfully";

                    setTimeout(function () {
                        window.location.reload()
                    }, 3000)

                },
                error: function (err) {
                    document.getElementById("load").style.display = "none";
                    document.getElementById("error").style.display = "block";
                    document.getElementById("error").innerHTML = "Something went wrong, Try again";
                     setTimeout(function(){
                        window.location.reload()   
                     } ,3000)
                }
            })
        })
    } else {
        document.getElementById("send").style.cssText = "display:block; background-color: red;"
        document.getElementById("send").innerHTML = "Please fill all fields";
         
    }
}
