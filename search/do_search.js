var arr=['df', 'rtr', 'wy', 'dafd', 'dfs', 'wefa', 'tyr','rty', 'rty', 'ryt', 'afds', 'wer', 'te'];

function do_search(arr,searchText){
	var newdata=[];
	arrClone = JSON.parse(JSON.stringify(arr));

	arrClone.sort(function(a,b){return a.indexOf('a')==-1?1:-1;});
	for(var i in arrClone){
		str=transform(arrClone[i]).toString();
		console.log(str);
		var row = str.indexOf(searchText);
		if (row == -1) {
			break;
		}
		newdata.push(arrClone[i]);
	}
	console.dir(newdata);
	return newdata;
}

function transform(obj){
	var arr = [];
	for(var item in obj){
		arr.push(obj[item]);
	}
	return arr;
}
// console.log(do_search(arr,"a"));