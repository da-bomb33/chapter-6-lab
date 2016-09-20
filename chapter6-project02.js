window.onload = function(e) {
	function Text(x, y, z){
		var und = "Undefined";
		if(y==""||y==undefined){
			y = "Undefined";
		}
		if(z==""||z==undefined){
			z = "Undefined";
		}
		return "<div class='ShowName' onclick='alert(\"ID: "+y+"\\ninnerText: "+z+"\")';\">"+x+"</div>";
	}

	function traverse(node){
		for(node=node.firstChild; node!=null; node = node.nextSibling){
			traverse(node);
			tagName = node.nodeName.toUpperCase().replace("#", "");
			tagId = node.id;
			inlineText = node.innerText;
			node.innerHTML += Text(tagName, tagId, inlineText);
		}
	}

	traverse(document.body);

}