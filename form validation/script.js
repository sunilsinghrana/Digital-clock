function validateform(){

    let textboxname = document.getElementById('inputname');
    let textboxemail = document.getElementById('inputemail');
    let textboxphone = document.getElementById('inputtel');
    
    textboxname = textboxname.value;
    
    if(textboxname.length == 0){
        let textalert = document.getElementById('givealertname')
        // alert('Enter your name')
        textalert.innerHTML = "*Please Enter your name";
    }else{
        console.log("you'r safe");
    }



}