window.onload = function(){
	listenToKeybord(hash);
	mainTag();
}

var keys = {
	'0':[
		['~', '`'],
		['!', '1'],
		['@', '2'],
		['#', '3'],
		['$', '4'],
		['%', '5'],
		['^', '6'],
		['&', '7'],
		['*', '8'],
		['(', '9'],
		[')', '0'],
		['_', '-'],
		['+', '='],
		['delete']
	],
	'1':[
		['tab'],
		['Q'],
		['W'],
		['E'],
		['R'],
		['T'],
		['Y'],
		['U'],
		['I'],
		['O'],
		['P'],
		['{', '['],
		['}', ']'],
		['|','\\']
	],
	'2':[
		['caps lock'],
		['A'],
		['S'],
		['D'],
		['F'],
		['G'],
		['H'],
		['J'],
		['K'],
		['L'],
		[':',';'],
		['"', '\''],
		['enter', 'return']
	],
	'3':[
		['shift'],
		['Z'],
		['X'],
		['C'],
		['V'],
		['B'],
		['N'],
		['M'],
		['<',','],
		['>','.'],
		['?','/'],
		['shift']
	],
	'4':[
		['fn'],
		['control'],
		['alt','option'],
		['Command'],
		[' '],
		['command'],
		['alt','aption'],
		['←'],
		['↑'],
		['↓'],
		['→']
	]
}

var hash = {'q': 'qq.com', 'w': 'weibo.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'tianya.com', 'y': 'youtube.com', 'u': 'uc.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': undefined, 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
			}

function tag(tagName,attribute,tagChild){
	var element = document.createElement(tagName);
	for(var key in attribute){
		element[key] = attribute[key];
	}
	return element;
}

function listenToKeybord(hash){
	document.onkeypress = function(keybord){
		var website = hash[keybord['key']];
		window.open('http://'+website,'_blank');
	}
}

function createkbd(){

}

function mainTag(){
	for(var key in keys){
		var row = keys[key];
		var divs = tag('div',{'className':'row clearfix'})
		for(var key1 in row){
			var kbds = tag('kbd',{'className':'key'},spans);
			for(var key2 in row[key1]){
				var row1 = row[key1];
				var content = row1[key2];
				var spans = tag('span',{'className':'text','textContent':content});
				kbds.appendChild(spans);
			}
			divs.appendChild(kbds);
		}
		mainWrapper.appendChild(divs);
	}
}