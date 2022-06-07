function runprogram(input){
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i=0;i<tc;i++){
        let [n,m] = input[line++].trim().split(" ").map(Number);
        let arr1 = input[line++].trim().split(" ").map(Number);
        let arr2 = input[line++].trim().split(" ").map(Number);
        console.log(kitchen(n,m,arr1,arr2))
    }
}

function kitchen(n,m,arr1,arr2){
  
    let max = 0;
    let arr = [];
    for(let i=0;i<n;i++){
        if(max<arr1[i]){
            max = arr1[i];
        }
    }
    for(let i=0;i<n;i++){
        if(max==arr1[i]){
            arr.push(i+1)
        }
    }
    // console.log(arr)
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<m;j++){
            if(arr[i]==arr2[j]){
                return "YES"
            }
        }
    }
    return "NO"
    // console.log("max",max)
}

if(process.env.USER === ""){
    runprogram('');
}
else{
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data",function(input){read+=input;});
    process.stdin.on("end",function(){
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runprogram(read);
    });
    process.on("SIGINT", function(){
        read = read.replace(/\n$/, "");
        runprogram(read);
        process.exit(0);
    });}