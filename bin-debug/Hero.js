/*var Cache:MethodDecorator = (target:any,propertyName,desc:PropertyDescriptor)=>{
    const getter = desc.get;
    desc.get = function(){
        return getter.apply(this);
    }
    return desc;
}

class Hero{
    public level:number = 1;

    @Cache
    public get maxHp():number {
        return this.level = 10;
    }
}*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var arr = [];
function test(hero) {
    return true;
}
var is_every_hero_in_team = arr.every(function (hero) { return hero.isInTeam; });
var User = (function () {
    function User() {
        this.cash = 0;
        this.gold = 0;
        this.exp = 0;
        this.totalExp = 0;
        this.level = 0;
        this.heros = [];
        this._herosInTeam = [];
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "herosInTeam"
        ,function () {
            return this.heros.filter(function (hero) { return hero.isInTeam; });
        }
    );
    p.print = function () {
        console.log("111");
    };
    p.getFightPower = function () {
        var result = 0;
        this.herosInTeam.map(function (hero) { return result += hero.getFightPower(); });
        result += this.pet.getFightPower();
        return result;
    };
    __decorate([
        logger
    ], p, "print", null);
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero() {
        this.isInTeam = false;
        this.equipments = [];
        this.hp = 50;
        this.level = 1;
        this.quality = 2.8;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.level * 100 * this.quality;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.attack; });
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.maxHp * 1.5 + this.attack * 1.8;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment() {
        this.jewels = [];
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            return 50;
        }
    );
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var jewel = (function () {
    function jewel() {
    }
    var d = __define,c=jewel,p=c.prototype;
    return jewel;
}());
egret.registerClass(jewel,'jewel');
var pet = (function () {
    function pet() {
    }
    var d = __define,c=pet,p=c.prototype;
    p.getFightPower = function () {
        return 200;
    };
    return pet;
}());
egret.registerClass(pet,'pet');
var logger = function (target, key, desc) {
    var method = desc.value;
    desc.velue = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        console.log("111");
        return method.apply(this, arg);
    };
};
var Cache = function (target, propertykey, desc) {
    var method = desc.value;
    desc.velue = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i - 0] = arguments[_i];
        }
        console.log(target, desc);
        var cacheKey = "_cache" + propertykey;
        if (!target[cacheKey]) {
            target[cacheKey] = method.apply(this, arg);
        }
        return target[cacheKey];
    };
};
//# sourceMappingURL=Hero.js.map