function validate() {
    var emailID = document.myForm.Email.value;
    var ad = emailID.indexOf("@");
    var sp = emailID.lastIndexOf(".");
    var space = emailID.indexOf(" ");
    if (document.myForm.FirstName.value == "") {
        alert("Nhập first name");
        document.myForm.FirstName.focus();
        return false;
    }
    if (document.myForm.LastName.value == "") {
        alert("Nhập last name");
        document.myForm.LastName.focus();
        return false;
    }
    if (ad == -1 || ad < 1 || sp == -1 || sp < (ad + 2) || (sp + 1) >= emailID.length || (space > -1)) {
        alert("email không hợp lệ")
        document.myForm.Email.focus();
        return false;
    }
    var p1 = myForm.password.value;
    var p2 = myForm.CFpassword.value;
    if (document.myForm.password.value == "") {
        alert("Mật khẩu để trống");
        document.myForm.password.focus();
        return false;
    }
    if (p1 != p2) {
        alert("Nhập lại mật khẩu");
        document.myForm.CFpassword.focus();
        return false;
    }
    var sdtphone = document.myForm.phone.value;
    var ktphone = isNaN(sdtphone);
    if (sdtphone == "") {
        alert("Điện thoại không được để trống");
        return false;
    }
    if (ktphone == true) {
        alert("Số chưa đúng định dạng.");
        return false;
    }

    var check = document.getElementById("alo");
    if (alo.checked == false) {
        alert("Bạn chưa đồng ý với điều khoản");
        return false;
    }
    alert("đăng ký tài khoản thành công");
    return (true);

}