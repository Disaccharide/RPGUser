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

var arr: Hero[] = [];

function test(hero: Hero) {
    return true;
}

var is_every_hero_in_team = arr.every(hero => hero.isInTeam)

class User {
    cash = 0;
    gold = 0;
    exp = 0;
    totalExp = 0;
    level = 0;
    heros: Hero[] = [];
    _herosInTeam: Hero[] = [];
    pet: pet;
    
    constructor(){}

    get herosInTeam() {
        return this.heros.filter(hero => hero.isInTeam)
    }

    @logger
    print() {
        console.log("111");
    }

    getFightPower() {
        var result = 0;
        this.herosInTeam.map(hero => result += hero.getFightPower());
        result += this.pet.getFightPower();
        return result;
    }

}


class Hero {
    isInTeam: boolean = false;
    equipments: Equipment[] = [];
    hp = 50;
    level = 1;
    quality: number = 2.8;

    get maxHp() {
        return this.level * 100 * this.quality;
    }

    get attack() {
        var result = 0;
        this.equipments.forEach(e => result += e.attack)
        return result;
    }

    get fightPower() {
        return this.getFightPower();
    }

    getFightPower() {
        return this.maxHp * 1.5 + this.attack * 1.8;
    }

}

class Equipment {

    jewels: jewel[] = [];

    get attack() {
        return 50;
    }

}

class jewel {}

class pet {
    getFightPower() {
        return 200;
    }
}

var logger: MethodDecorator = (target, key, desc) => {
    const method = desc.value;
    desc.velue = function (...arg) {
        console.log("111");
        return method.apply(this, arg);
    }
}

var Cache: MethodDecorator = (target, propertykey, desc) => {

    const method = desc.value;
    desc.velue = function (...arg) {
        console.log(target,desc);
        var cacheKey = "_cache"+ propertykey;
        if(!target[cacheKey]){
            target[cacheKey] = method.apply(this,arg);
        }
        return target[cacheKey];
    }

}