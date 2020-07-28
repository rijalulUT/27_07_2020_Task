const fizzBuzz = (number) => {
    for (let index = 1; index <= number; index++) {
        switch (true) {
            case index % 2 == 0  && index % 3 != 0:
                console.log('Fizz')
                break;
            case index % 2 != 0  && index % 3 == 0:
                console.log('Buzz')
                break;
            case index % 2 == 0  && index % 3 == 0:
                console.log('FizzBuzz')
                break;
            default:
            console.log(index)
                break;
        }
            
    }
}
fizzBuzz(30)