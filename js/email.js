var regName = /^[a-zA-Z]$/;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

document.querySelector("#sendme").addEventListener(
  "click",

  (e) => {
    e.preventDefault();
    verifyEmail();
  }
);
const verifyEmail = () => {
  let name = document.myForm.name.value;
  let phone = document.myForm.phpneNo.value;
  let email = document.myForm._replyto.value;
  let subject = document.myForm.subject.value;
  let message = document.myForm.message.value;

  if (name == "") {
    alert("Please provide your name!");
    document.myForm.Name.focus();
    return false;
  }
  if (email == "") {
    alert("Please provide your Email!");
    document.myForm._replyto.focus();
    return false;
  } else if (!mailformat.test(email)) {
    alert("Please enter proper phone nu (+1-123-123-1234).");
    document.myForm._replyto.focus();
    return false;
  }
  if (phone == "") {
    alert("Please provide your phone number");
    document.myForm.phpneNo.focus();
    return false;
  } else if (!phoneno.test(phone)) {
    alert("Please enter proper phone nu (+1-123-123-1234).");
    document.myForm.phpneNo.focus();
    return false;
  }
  if (subject == "") {
    alert("Please provide your subject");
    document.myForm.subject.focus();
    return false;
  }
  if (message == "") {
    alert("Please provide your message");
    document.myForm.message.focus();
    return false;
  }
  document.myForm.submit();
};
