(function () {
    "use strict";
    angular.module("app").controller("Main", main);

    function main() {
        var vm = this;

        var list = [
          { name: "Cris", lastName: "Arias", age: 24 },
          { name: "Marta", lastName: "Arias", age: 26 },
          { name: "Carlos", lastName: "Salas", age: 22 },
          { name: "Stephanie", lastName: "Salas", age: 28 },
          { name: "Mario", lastName: "Santana", age: 28 }
        ];

        /*Where filter by name*/
        vm.filter1 = $linq(list)
          .where(function (x) {
              return x.name === "Cris";
          })
          .toArray();

        /*Where filter by lastName*/
        vm.filter2 = $linq(list).where(function (x) { return x.lastName === "Salas"; }).toArray();

        /*Select only name and age*/
        vm.filter3 = $linq(list).select(function (x) { return { name: x.name, age: x.age } }).toArray();

        /*Sum of age*/
        vm.filter4 = $linq(list).sum(x => x.age);

        /*Average of age*/
        vm.filter5 = $linq(list).average(x => x.age);

        /*Group by lastName*/
        vm.filter6 = $linq(list).groupBy(
            x => x.lastName, // key selector
            null) // element selector
          .toArray();

        /*Group by lastName and select with Sum*/
        vm.filter7 = $linq(list).groupBy(
            x => x.lastName, // key selector
            null) // element selector
          .select(function (x) { return { lastName: x.key, age: $linq(x.values).sum(x => x.age) } }).toArray();

        vm.title = "NG-App";

        vm.text = "Enter debug mode to see the code.\rThe library used in this project is js-linq, visit the links for more info.";

        vm.owner = "http://jscriptlinq.codeplex.com";

        vm.faq = "http://jscriptlinq.codeplex.com/documentation";
    }
})();