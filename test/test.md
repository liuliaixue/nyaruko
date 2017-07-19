var url = "http://localhost:8890/user/add"; 
xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = state_Change;
xmlhttp.open("post", url, true);
xmlhttp.setRequestHeader("Content-Type","application/json; charset=utf-8");
var params = {"fileName":"testCXXXXSS.png","fileContentType":"image/png","uploadToken":"NtUN7hZ1PKkci9O","fileSize":"1000"};
xmlhttp.send(JSON.stringify(params));
var state_Change = function() {

}