$(document).ready(function(){
    
// Use Chrome extension open new window
$('#seolist').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
});

//if (!location.origin)
  //location.origin = location.protocol + "//" + location.host;
    
    //var currenturl = window.location.toString();
    
    //var currenturl = tabs[0].url;
//chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//    var currenturl = tabs[0].url;
//});
chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
    //alert(tab.url);
    //var newurl = nohttp(tab.url);
    var curentBaseurl = nohttp(baseurl(tab.url))

//var newurl = location.origin.replace(/.*?:\/\//g, "");
//var newurl = location.origin.replace(/^https?\:\/\//i, "");

var urllist = [
    {"url":"http://altnews.top","service":"RSS News"},
    {"url":"http://scriptsmashup.com","service":"Wordpress Plugins"},
    {"url":"http://softplug.com","service":"VST synths"},
    {"url":"http://reveilletoi.com","service":"My blog"},
    {"url":"http://allo.com","service":"WP mobile plugin"},
    {"url":"http://reveilletoi.com","service":"Funny Videos"},
    {"url":"http://reveilletoi.com","service":"Funny Videos"},

  //{"url":"https://www.whois.com/whois/%s","service":"pineapple"},
];
    


var html = "";
$.each(urllist, function(i, obj) {
  //alert(obj.tagName);
  html += '<a class="blue-text collection-item" href="' + baseurl(obj.url) + '" target="_blank">';
  html += '<img src="http://s2.googleusercontent.com/s2/favicons?domain=' + baseurl(obj.url) + '"/>';
  html += obj.url + '<span class="new badge blue" data-badge-caption="' + obj.service + '"><span><a/>';
});

$("div.seolist").html(html);
    
    
}); // chrome tab end

//string interpolation in JavaScript 2
//var customURL = 'http://www.browseo.net/?url=%s';  //demo
//s = parse(customURL, newurl); // parse interpolation use

/******** FUNCTION *********/
function parse(url) {
  var args = [].slice.call(arguments, 1),
    i = 0;

  return url.replace(/%s/g, function() {
    return args[i++];
  });
}

/************************/

function baseurl(url) {
  var domain;
  //find & remove protocol (http, ftp, etc.) and get domain
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  } else {
    domain = url.split('/')[0];
  }
  //find & remove port number
  domain = domain.split(':')[0];

  return domain;
}
//console.log(baseurl(url));

/************************/
function nohttp(url) {
  //var protomatch = /^(https?|ftp):\/\//; // NB: not '.*'
  //return url.replace(/^https?\:\/\//i, "");
  //return url.replace(/.*?:\/\//g, "");
  url = url.replace("www.", "");
  return url.replace(/.*?:\/\//g, "");
  //return url.replace((http|https):\/\)?;
}
// MATERIALIZE CSS

  $(".dropdown-button").dropdown();
    
    
}); // Doc ready end

