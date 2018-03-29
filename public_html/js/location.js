/*console.log(
        document,
        document.forms,
        document.forms[0],
        document.images,
        document.links
);*/

console.log(
        document.location,
        document.location.hash, //Devuelve la localización interna de la página si la hubiera (anclas #)
        document.location.href,
        document.location.host,
        document.location.pathname,
        document.location.port,
        document.location.protocol,
        document.location.search,
        //document.location.reload(),
        document.location.assign("http://jonmircha.com"),
        document.location.assign("http://index.html")
);