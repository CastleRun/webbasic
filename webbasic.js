//webBASIC
for(var i=0;i<10;i++){
  if(document.scripts[i].type=="webbasic"){
    execute(document.scripts[i]);
  }
}
function execute(script){
  x=script.text.split("\n");
  for(var j=0;j<x.length;j++){
    y=x[j].split(" ");
    switch(y[0]){
      case "ECHO":
        var str="";
        for(var m=1; m<y.length; m++){
          str.concat(y[m]);
          str.concat(" ");
        }
        console.log(str);
        break;
      case "GOTO":
        j=parseInt(y[1]);
        break;
      case "IF":
        var c;
        switch(y[2]){
          case "EQUAL":
            k=(parseInt(y[1])==parseInt(y[3]))?true:false;
            break;
          case "UNEQUAL":
            k=(parseInt(y[1])!=parseInt(y[3]))?true:false;
            break;
          case "LESS":
            k=(parseInt(y[1])<parseInt(y[3]))?true:false;
            break;
          case "GREATER":
            k=(parseInt(y[1])>parseInt(y[3]));
            break;
          case "GOE":
            k=(parseInt(y[1])>=parseInt(y[3]))?true:false;
            break;
          case "LOE":
            k=(parseInt(y[1])<=parseInt(y[3]))?true:false;
            break;
        }
        if(k===true){
              var z=new Array(y.length-4);
              for(var l=5;l<y.length;l++){
                z[l-5]=y[l];
              }
              switch(z[0]){
                      case "ECHO":
                        var st="";
                        for(var n=1; n<y.length; n++){
                          st.concat(z[n]);
                          st.concat(" ");
                        }
                        break;
                      case "GOTO":
                        j=parseInt(z[1]);
                        break;
                      default:
                        console.log("ERROR");
                        continue;
              }
            break;
            
            }
        break;
      case "'":
        break;
      default:
        console.log("ERROR");
    }
  }
}