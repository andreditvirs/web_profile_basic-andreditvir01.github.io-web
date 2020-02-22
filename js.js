

function validasi_form(form){
    var answer= confirm("Apakah anda yakin ingin menyimpan ?");
   if(answer){
     if (form.nama.value == ""){
        alert("Anda belum memilih salah satu rating point");
        form.nama.focus();
        return (false);
      }
     if (form.rate.value == ""){
        alert("Anda belum memilih salah satu rating point");
        form.rate[0].focus();
        return (false);
      }
     if (form.email.value == ""){
        alert("Anda belum mengisikan E-mail");
        form.email.focus();
        return (false);
      }
      alert("Terima Kasih atas pesan/komentarnya");
       location.href='index/html';
   }
 

}


function cekBukanAngka(evt){
    var charCode = (evt.which) ?
        evt.which : event.keyCode
    if((charCode < 65) && (charCode != 32) && (charCode != 8))
        return false;
    return true;
}
