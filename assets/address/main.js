var output = ""

  var provinceName = ["上海市","北京市","江苏省","广东省","浙江省","四川省","山东省","河南省","湖北省","福建省","安徽省","辽宁省","陕西省","江西省","广西壮族自治区","重庆市","天津市","云南省","黑龙江省","内蒙古自治区","吉林省","山西省","贵州省","新疆维吾尔自治区","甘肃省","海南省","宁夏回族自治区","青海省","西藏自治区"]

  var cityNames = {
    "上海市": [""],
    "北京市": [""],
    "江苏省": [
      "南京市",
      "徐州市",
      "苏州市"
    ],
    "广东省": [""]

  }

console.log(cityNames["江苏省"]);
// Process names
for (var i = 0; i < 1000; i++) {
  m = Math.floor(Math.pow(Math.random(), 2) * provinceName.length + 1)-1;
  output = provinceName[m]

 // document.getElementById("names").innerHTML += output + "<br>"

};
