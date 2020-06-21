window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.getElementById("hide-header").style.display = "none";
    document.getElementById("hide-header2").style.display = "none";
    document.getElementById("navbar").style.position = "fixed";
    document.getElementById("navbar").style.top = "-1.1vh";
    document.getElementById("navbar").style.margin = "0";
    document.getElementById("navbar").style.padding =
      "1rem 34.5rem 0.4rem 7rem";
    document.getElementById("navbar").style.width =
      "100vh";
    document.getElementById("request-demo").style.right = "-17.3%";
    document.getElementById("request-demo").style.top = "1.1vh";
    document.getElementById("request-demo").style.paddingRight = "18%";
    document.getElementById("triangle").style.top = "11%";
    document.getElementById("triangle").style.right = "10.45%";
  } else {
    document.getElementById("hide-header").style.display = "flex";
    document.getElementById("hide-header2").style.display = "flex";
    document.getElementById("navbar").style.position = "absolute";
    document.getElementById("navbar").style.top = "10.5rem";
    document.getElementById("navbar").style.margin = "1% 6% 0";
    document.getElementById("navbar").style.margin = "0.5rem 5rem 0";
    document.getElementById("navbar").style.padding =
      "0.5rem 34.5rem 0.4rem 1.5rem";
    document.getElementById("navbar").style.width =
      "80vh";
    document.getElementById("request-demo").style.right = "-1.5%";
    document.getElementById("request-demo").style.top = "0";
    document.getElementById("request-demo").style.padding =
      "2.925vh 1% 2.925vh 0";
    document.getElementById("triangle").style.top = "0";
    document.getElementById("triangle").style.right = "10.1%";
  }
}
function ex() {
  document.getElementById("qtp-description").classList.remove("no-display");
  document.getElementById("qtp-description").classList.add("inline");
  document.getElementById("up-qtp").classList.add("up-q");
}
function exOut() {
  document.getElementById("qtp-description").classList.remove("inline");
  document.getElementById("qtp-description").classList.add("no-display");
  document.getElementById("up-qtp").classList.remove("up-q");
}
function ex2() {
  document.getElementById("qa-description").classList.remove("no-display");
  document.getElementById("qa-description").classList.add("inline");
  document.getElementById("up-qa").classList.add("up-q");
}
function exOut2() {
  document.getElementById("qa-description").classList.remove("inline");
  document.getElementById("qa-description").classList.add("no-display");
  document.getElementById("up-qa").classList.remove("up-q");
}
