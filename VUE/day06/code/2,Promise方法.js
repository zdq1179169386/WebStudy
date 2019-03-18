const fs = require('fs')

function getFilePath(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, 'utf-8', (error, dataStr) => {
      if (error) return reject(error);
      resolve(dataStr);
    })
  })
}

// getFilePath('./file/1.txt').then(function(data){
//   console.log(data)
// },function(error){
//   console.log(error.message)
// })

// 前面的失败了，后面的就不执行了，可以不用指定失败的promise 
getFilePath('./file/1.txt').then(function (data) {
    console.log('---'+data);
    return getFilePath('./file/2.txt')
  })
  .then(function (data) {
    console.log('---'+data);
    return getFilePath('./file/3.txt')

  }).then(function (data) {
    console.log('---'+data);
  })
  .catch(function(error){
    console.log(error.message);
    
  })

// 分别在成功和失败的回调中返回promise 对象，这样后面的promise 就不会停止调用
// getFilePath('./file/1.txt').then(function (data) {
//   console.log('---'+data);
//   return getFilePath('./file/2.txt')

// },function(error){
//     console.log(error.message)
//     return getFilePath('./file/2.txt')

// })
// .then(function (data) {
//   console.log('---'+data);
//   return getFilePath('./file/3.txt')

// },function(error){
//   console.log(error.message)
//   return getFilePath('./file/3.txt')

// }).then(function (data) {
//   console.log('---'+data);

// },function(error){
//   console.log(error.message)
// })