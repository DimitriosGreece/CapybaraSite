function ValidateContact() {
   var hello = document.getElementById("contactinformation").value.trim();
   if (hello === "") {
   alert("please enter valid contact information")
    return false;
   }
   console.log(hello);
   return true;
}