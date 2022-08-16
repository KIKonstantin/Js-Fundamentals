function towns(objects) {
    let towns = {};
    for (let token of objects) {
        let info = token.split(' | ');
        towns.town = info[0];
        towns.latitude = Number(info[1]).toFixed(2);
        towns.longitude = Number(info[2]).toFixed(2);
        console.log(towns);
    }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(['Plovdiv | 136.45 | 812.575']);
