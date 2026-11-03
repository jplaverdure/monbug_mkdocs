// Open links to other sites, and to downloadable files (PDFs, videos), in a new tab.
// document$ fires on every page load, including navigation.instant page switches.
var FILE_LINK = /\.(pdf|mp4|webm|mov)$/i;

document$.subscribe(function () {
  document.querySelectorAll("a[href]").forEach(function (link) {
    var external = link.hostname && link.hostname !== window.location.hostname;
    if (external || FILE_LINK.test(link.pathname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    }
  });
});
