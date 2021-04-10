// 「関数（function）」は、繰り返し使われる一連の処理を1つにまとめたもの
// JavaScriptでは、functionに続けて関数名を書き、{ }内に処理内容を記述する

// function 関数名(引数){
//  処理
//  return 戻り値;
// }

function addString(strA){
// functionの後に、関数名「addString」を記述し、引数として「strA」を定義している
  var addStr = "Hello " + strA;
  // 変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合している
  return addStr;
  // 結合結果の格納された「addStr」を、関数の戻り値としている returnを記述することで、出力結果が表示される
}