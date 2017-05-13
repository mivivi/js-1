//Задание №3
function task3 (x,y) {
    var res;
    if (x>0 && y>0) {
        res = (y-x);
    } else if (x<0 && y<0) {
        res = (x*y);
    } else if (x<0 && y>0 || x>0 && y<0) {
        res = (x+y);
    }
    return res;
}