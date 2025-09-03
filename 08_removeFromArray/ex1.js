const removeFromArray = function(array) {
    const args = Array.from(arguments).splice(1);
    console.log(args);
    console.log(arguments);
    for (l = 0; l < args.length; l++) {
        for (i = 0; i < array.length; i++) {
            if (array.indexOf(args[l]) >= 0) {
                array.splice(array.indexOf(args[l]), 1);
            }
            console.log(array);
        }
    }
    // console.log(item.length)
    return array;
}

removeFromArray([1, 2, 2, 4], 2);