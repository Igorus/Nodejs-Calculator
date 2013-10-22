function route(pathname) {
  console.log("About to route a request for " + pathname);
  switch(pathname)
  {
	  case "":
	  case "/": return "Hello"; break;
	  default: return "Hell"; 
  }
}

exports.route = route;