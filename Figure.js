function Figure(name, vitality, energy, damage, defense, avoid, exactly, x, y) {
    this.name = name;
    this.vitality = vitality;
    this.energy = energy;
    this.damge = damage;
    this.defense = defense;
    this.avoid = avoid;
    this.exactly = exactly;
    this.x = x;
    this.y = y;
    // vị trí ban đầu
    this.viTriFirst = function (x, y) {
        x = this.x;
        y = this.y;
        return x, y;
    };
    // tạo phương thức di chuyển
    this.moveTo = function (nhanvat) {
        nhanvat.viTriFirst(this.x, this.y);
        console.log("Di chuyển Đến " + nhanvat.name + " Vị trí " + nhanvat.viTriFirst(this.x, this.y));
    };
    //tạo phương thức check sức sống
    this.daeth = function (nhanvat) {
        if (nhanvat.vitality <= 0) {
            alert(nhanvat.name + " The daeth...!");
            return true;
        }
    };
    //tạo phương thức né tránh:
    this.checkAvoid = function (nhanvat) {
        let arrAvoid = [];
        let number = Math.floor(Math.random() * 10 + nhanvat.exactly) + 1;
        for (let i = 1; i < this.avoid; i++) {
            arrAvoid.push(i);
        }
        if (arrAvoid.indexOf(number) === -1) {
            return false;
        } else {
            return true;
        }
    };
}