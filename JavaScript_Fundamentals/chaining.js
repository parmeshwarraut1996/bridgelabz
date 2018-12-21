var obj = function () {

    this.a = 0;
    this.add = function (a) {
        this.a += a;
        return this;

    };
    this.substract = function (a) {
        this.a -= a;
        return this;

    };
    this.print = function () {
console.log(this.a);
    };
};
var x=new obj();
x.add().substract().print();
//x.substract(2);
//x.print();