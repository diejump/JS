function fun(){
    for(i=0;i<=9;i++){
        for(j=0;j<=i;j++){
            process.stdout.write(i+"*"+j+"="+i*j+"\t")
        }
        console.log("\n")
    }
}
fun()