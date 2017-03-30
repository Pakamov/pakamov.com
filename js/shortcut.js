// Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

var shortcut;

switch(shortcut){
	case "chrome":
	if (var isChrome === true ){shortcut="<link rel='shortcut icon' type='image/png' href='favicon-chrome.ico'>";
	}
	break;
	case "safari":
	if (var isSafari === true){shortcut="<link rel='shortcut icon' type='image/png' href='favicon-safari.ico'>";
	}break;
	case "mozilla":
	if (var isFirefox === true){shortcut="<link rel='shortcut icon' type='image/png' href='favicon-firefox.ico'>";
	}break;
	case "ie":
	if(var isEdge === true){shortcut="<link rel='shortcut icon' type='image/png' href='favicon-edge.ico'>";
	}break;
	default:
	/*-- shortcut="<link rel='shortcut icon' type='image/png' href='open-book32.png'>"; -- */

}
