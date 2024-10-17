function longestWord(st){
    let arr = st.split(' ')  //.split: converts the string to array
    console.log(arr)
    let max = 0
    for (let i=0 ; i<arr.length ; i++){
        if(max<arr[i].length){
            max=arr[i].length
        }
    }
    return max
}
let sentence="The quick brown fox jumped over the lazy dog"
console.log(longestWord(sentence))