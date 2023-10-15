export
let std_name :string="ali";
let age :number=23;
console.log(std_name);
function detail(s:string,a:number){
    return s+" "+a;
}
let res = detail(std_name,age);
console.log(res);
let x:string[]=["ali","asad"];
let y :number[]=[23,25,29];
let z:any[]=[true,"ali",23]