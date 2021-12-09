/**
 * javascript for main
 */

/**
* 各機能の処理に飛ぶ
*/
$(function(){

	//ログイン認証処理キック
	//$('#ebase6_logon').click(function(){
		//$.ninsyo();
	//});

	//ログアウト処理キック
	$('#ebase6_logout').click(function(){
		$.logout();
	});

	//品物一覧画面出力処理キック
	$('a[id=goodsView]').click(function(){
		$.itemlist();
	});

	//発注作業画面出力処理キック
	$('a[id=orderingWork]').click(function(){
		$.orderexe();
	});

	//品物検品画面出力処理キック
	$('a[id=goodsCheck]').click(function(){
		$.checkexe();
	});

	//在庫管理画面出力処理キック
	$('a[id=stockManegement]').click(function(){
		$('#datafield').empty();
		document.getElementById("ebase6_submenu").innerHTML="在庫管理";
	});

	//棚卸作業画面出力処理キック
	$('a[id=Inventories]').click(function(){
		$('#datafield').empty();
		document.getElementById("ebase6_submenu").innerHTML="棚卸作業";
	});

	//履歴表示画面出力処理キック
	$('a[id=History]').click(function(){
		$('#datafield').empty();
		document.getElementById("ebase6_submenu").innerHTML="履歴表示";
	});


});
