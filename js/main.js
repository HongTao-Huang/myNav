var keys = [
			['q','w','e','r','t','y','u','i','o','p'],
			['a','s','d','f','g','h','j','k','l'],
			['z','x','c','v','b','n','m']
		]
var hash = {
	'q': 'qq.com',
	'w': 'weibo.com',
	'e': 'ele.me',
	'r': 'renren.com',
	't': 'tianya.com',
	'y': 'youtube.com',
	'u':  'uc.com',
	'i':  'iqiyi.com',
	'o': 'opera.com',
	'p': undefined,
	'a': 'acfun.tv',
	's': 'sohu.com',
	'z': 'zhihu.com',
	'm': 'https://www.mcdonalds.com.cn/',
	'b':'baidu.com'
}

window.onload = function(){
	var hashInlocalStorage = JSON.parse(localStorage.getItem("urlContainer") || "null");
	if(hashInlocalStorage){
		hash = hashInlocalStorage;
	}
	kbdNav();
	keyEvent();
}

function tag(tagName){
	return document.createElement(tagName);
}

function keyEvent(){
	document.onkeypress = function(keyValue){
		var value = keyValue['key'];
		var website = hash[value];
		window.open("http://"+website , "_blank");
	}
}

function kbdNav(){
	for(var i = 0; i < keys.length; i++){
		var row = keys[i];
		var divs = tag('div');
		for(var j = 0; j < row.length; j++){
			var kbds = tag('kbd');
			var buttons = tag('button');
			  buttons.id = row[j];
			buttons.onclick = function(keyValue){
				var btId = keyValue['target']['id'];
				var gainUrl = prompt("（网址不需要输入http://）请编辑网址：");
				hash[btId] = gainUrl;
				localStorage.setItem('urlContainer', JSON.stringify(hash));
			}
			buttons.textContent = "编辑";
			kbds.className = 'key';
			kbds.textContent = row[j];
			kbds.appendChild(buttons);
			divs.appendChild(kbds);
		}
		keyboard.appendChild(divs);
	}
}

