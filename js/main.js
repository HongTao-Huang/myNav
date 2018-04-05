window.onload = function(){
    // var hashA = init();
    // var hash = hashA['hash'];
    // var keys = hashA['keys'];
	listenToKeybord(hash);
	listenButton();
	mainTag();
}
// function init() {


    var keys = {
        '0': [
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
        '1': [
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
            ['|', '\\']
        ],
        '2': [
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
            [':', ';'],
            ['"', '\''],
            ['enter', 'return']
        ],
        '3': [
            ['shift'],
            ['Z'],
            ['X'],
            ['C'],
            ['V'],
            ['B'],
            ['N'],
            ['M'],
            ['<', ','],
            ['>', '.'],
            ['?', '/'],
            ['shift']
        ],
        '4': [
            ['fn'],
            ['control'],
            ['alt', 'option'],
            ['command'],
            [' '],
            ['command'],
            ['alt', 'aption'],
            ['←'],
            ['↑'],
            ['↓'],
            ['→']
        ]
    };

    var hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'tianya.com',
        'y': 'youtube.com',
        'u': 'uc.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'acfun.tv',
        's': 'sohu.com',
        'z': 'zhihu.com',
        'm': 'www.mcdonalds.com.cn'
    };
    var hashInLocalStorage = getFromLocalStorage('zzz');
    if(hashInLocalStorage){
        hash = hashInLocalStorage;
    }
//     return {
//         'keys':keys,
//         'hash':hash
//     }
// }
function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name) || 'null');
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

function listenButton(){
    btnEditor.onclick = function () {
        var x = prompt('给我一个网址(格式为q://lol.qq.com q:为指定要修改的按键)');
        if(x){
        	var key = x[0];
        	if(key >= 'a' && key <= 'z')
			{
				var imag = document.getElementById(key);
                var website = x.substr(2);
                hash[key] = website;
                imag.src = 'http://'+ website+ '/favicon.ico';
                imag.onerror = function(xxx){
                    xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png';
                }
                localStorage.setItem('zzz', JSON.stringify(hash));
            }
        }
    }
}

function createImage(domain , id){
    var img = tag('img',{'id':id})
    if(domain){
        img.src = 'http://'+ domain + '/favicon.ico'
    }else{
        img.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    img.onerror = function(xxx){
        xxx.target.src = '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    return img
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
				if(content >= 'A' && content <= 'Z'){
					var imag = createImage(hash[content.toLocaleLowerCase()] , content.toLocaleLowerCase());
					kbds.appendChild(imag);
				}
				kbds.appendChild(spans);
			}
			divs.appendChild(kbds);
		}
		mainWrapper.appendChild(divs);
	}
}