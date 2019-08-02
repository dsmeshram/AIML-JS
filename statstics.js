var stat = function(){
    this.stat = this;
}

stat.prototype.mean = function(list) {
    //mean = sum(list)/n
    if (Array.isArray(list)) {
        var count = list.length;
        var sum = list.reduce(sumArray, 0)
        return sum / count;
    } else {
        console.log('data should be in array form. list = []')
    }
}

function sumArray(total, num) {
    return total + num;
}

stat.prototype.mode = function(list) {
    if (Array.isArray(list)) {
        var mf = 1;
        var m = 0;
        var item;
        for (var i = 0; i < list.length; i++) {
            for (var j = i; j < list.length; j++) {
                if (list[i] == list[j])
                    m++;
                if (mf < m) {
                    mf = m;
                    item = list[i];
                }
            }
            m = 0;
        }
        if (item != undefined) {
            return item;
        } else {
            console.log('Mode not available');
        }
    } else {
        console.log('Data should be in array form. list = []');
    }
}

stat.prototype.median = function(list) {
    if (Array.isArray(list)) {
        if (list.length === 0) return 0;

        list.sort(function (a, b) {
            return a - b;
        });

        var half = Math.floor(list.length / 2);

        if (list.length % 2)
            return list[half];

        return (list[half - 1] + list[half]) / 2.0;
    } else {
        console.log('Data should be in array form. list = []');
    }
}


stat.prototype.linearReagressition= function(x,y){
    //y = b0 + b1 * x
    var lr = {};
        var n = y.length;
        var sum_x = 0;
        var sum_y = 0;
        var sum_xy = 0;
        var sum_xx = 0;
        var sum_yy = 0;

        for (var i = 0; i < y.length; i++) {

            sum_x += x[i];
            sum_y += y[i];
            sum_xy += (x[i]*y[i]);
            sum_xx += (x[i]*x[i]);
            sum_yy += (y[i]*y[i]);
        } 

        lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
        lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
        var result_x =[];
        var result_y=[]
        for(var v = 0; v < n; v++){
            var x1 = x[v];
            var y1 = x1 * lr['slope'] + lr['intercept'];
            result_x.push(x1);
            result_y.push(y1)
        }
        lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);
        lr['result_X'] = result_x;
        lr['result_y'] = result_y;
        
        return lr;
}
