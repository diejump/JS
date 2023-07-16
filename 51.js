let a=[1,5,10,3,37,478,9,54,25,84]

for(i=0;i<a.length-1;i++){
    for(j=0;j<a.length-1-i;j++){
        if(a[j+1]<=a[j]){
            var b=a[j+1]
            a[j+1]=a[j]
            a[j]=b
        }
    }
}

for(let i of a){
    console.log(i)
}