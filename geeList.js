var numList = ee.List([4,5,7,8,9])
print(numList)

var inNumList = numList.map(function(num){
  var num = ee.Number(num)
  return num.multiply(4)
})
print(inNumList)