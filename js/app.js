document.getElementById("htmlCode").value =
  window.localStorage.getItem("htmlCode") || "<div>\n\n</div>";
document.getElementById("cssCode").value =
  window.localStorage.getItem("cssCode") || "<style>\n\n</style>";
document.getElementById("jsCode").value =
  window.localStorage.getItem("jsCode") || "<script>\n\n</script>";

function showPreview() {
  var htmlCode = document.getElementById("htmlCode").value;
  var cssCode = "" + document.getElementById("cssCode").value + "";
  var jsCode = "" + document.getElementById("jsCode").value + "";
  var frame = document.getElementById("preview-window").contentWindow.document;
  window.localStorage.setItem("htmlCode", htmlCode);
  window.localStorage.setItem("cssCode", cssCode);
  window.localStorage.setItem("jsCode", jsCode);
  frame.open();
  frame.write(
    window.localStorage.getItem("htmlCode") +
      window.localStorage.getItem("cssCode") +
      window.localStorage.getItem("jsCode")
  );
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}
