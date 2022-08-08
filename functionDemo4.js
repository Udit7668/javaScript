function fun_one(arg1,arg2,arg3){
  console.log(arg1,arg2,arg3);
}

function fun_two(){
    return "Hello-1";
}

function fun_three(){
    return "Hello-2";
}

function fun_four(){
    return "Hello-3";
}

fun_one(fun_two(),fun_three(),fun_four());