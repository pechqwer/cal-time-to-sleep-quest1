// ถ้า a ซ้ำกันให้เอา b และ c บวกกัน จงแสดงผลลัพธ์

const a = [{a: 1, b:1, c:99}, {a: 1, b: 99, c: 1}, {a:2 , b:0, c: 0}]
let arr = []
let x2 = () => { 
  a.forEach(x => {
    const i = arr.findIndex(s => x.a == s.a)
    if (i !== -1) {
      arr[i] = {
        a: arr[i].a,
        b: arr[i].b + x.b,
        c: arr[i].c + x.c
      }
    } else {
      arr.push(x)
    }
  })
}

x2()
console.log(arr)
// [{a: 1, b: 100, c: 100}, {a: 2, b: 0, c: 0}]
