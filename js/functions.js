function resizeIframeToFitContent(iframe){
	if(iframe.contentWindow.document.title.includes("Unity WebGL Player")){
	    iframe.style.width  = iframe.contentWindow.document.getElementById("unity-canvas").style.width;
	    iframe.style.height = iframe.contentWindow.document.getElementById("unity-canvas").style.height;
		iframe.contentWindow.focus();
	}
	iframe.style.border = "none";
}