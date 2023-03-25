form()
function form(){
    const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const alamat = JSON.parse(sessionStorage.getItem("alamat")) || [];
    const gender = JSON.parse(sessionStorage.getItem("gender")) || [];
    const indexAcc = localStorage.getItem("indexAcc");
    
    const inputNama = document.getElementById('bio_nama');
    const inputEmail = document.getElementById('bio_email');
    const inputAlamat = document.getElementById('bio_alamat');
    const inputGender = document.getElementById('bio_gender');

    inputNama.innerHTML   ="Name          : " + nama[indexAcc];
    inputEmail.innerHTML  ="Email         : " + email[indexAcc];
    inputAlamat.innerHTML ="URL Anda      : https://example.com/users/" + alamat[indexAcc];
    inputGender.innerHTML ="Jenis Kelamin : " + gender[indexAcc];

    // alert(nama.indexOf(input_nama))
    // const userInputAddress = document.getElementById('address_form');
    // const userInputPhone = document.getElementById('phone_form');
    // const userInputEmail = document.getElementById('email_form');
    // const userInputRadio = document.getElementById('radio_form');  
    // const userInputDesc = document.getElementById('desc_form');
    // const userInputCheckbox = document.getElementById('checkbox_form');

    // userInputAddress.innerHTML =  "Address                     : " + address;
    // userInputPhone.innerHTML =    "Phone Number                : " + phone;
    // userInputEmail.innerHTML =    "Email                       : " + email;
    // userInputRadio.innerHTML =    "Photo Type                  : " + radio;
    // userInputDesc.innerHTML =     "Description                 : " + desc;
    // userInputCheckbox.innerHTML = "Additional Tool Suggestions : " + checkbox;
}