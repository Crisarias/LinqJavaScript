(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    function main() {
        var vm = this;

        var list = [
            { name: "Cris", lastName: "Arias", age: 24 },
            { name: "Marta", lastName: "Arias", age: 26 },
            { name: "Carlos", lastName: "Salas", age: 22 },
            { name: "Stephanie", lastName: "Salas", age: 28 },
            { name: "Mario", lastName: "Santana", age: 28 },
        ];

        vm.filter1 = $linq(list).where(function (x) { return x.name === 'Cris'; }).toArray();
        vm.filter2 = $linq(list).where(function (x) { return x.lastName === 'Salas'; }).toArray();
        vm.filter3 = $linq(list).select(function (x) { return { name: x.name, age: x.age } }).toArray();
        vm.filter4 = $linq(list).sum(x => x.age);
        vm.filter5 = $linq(list).groupBy(
    x => x.lastName,                 // key selector
    null)  // element selector
    //.select("x => x.key + ': (' + x.values.join(', ') + ')'")
    .toArray();
        vm.filter6 = $linq(list).groupBy(
    x => x.lastName,                 // key selector
    null)  // element selector
    .select(function (x) {
        return {
            lastName: x.key, age: $linq(x.values).
                sum(
                x => x.age
                )
        }
    })
    .toArray();

        vm.title = "NG-App";
        vm.text = 'Enter debug mode to see the code';

    }



})();