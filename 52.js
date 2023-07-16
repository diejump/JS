function fun(arr){
    var arr2=new Array()
    
    for(let item of arr){
        var flag=0
        for(let i2 of arr2){
            if(i2==item){
                flag++;
            }
        }
        if(flag==0){
            arr2.push(item)
        }
    }

    for(i=0;i<arr2.length-1;i++){
        for(j=0;j<arr2.length-1-i;j++){
            if(arr2[j+1]<=arr2[j]){
                var b=arr2[j+1]
                arr2[j+1]=arr2[j]
                arr2[j]=b
            }
        }
    }

    return arr2
}

var arr = [1,2,3,4,3,4,3,5,5,6,4,1,1,]
console.log(fun(arr))