const findTheOldest = function(people) {
    const oldest = people.sort(function(a,b){
        if('yearOfDeath' in a){
            firstAge = a.yearOfDeath - a.yearOfBirth;
        }
        else{
            firstAge = new Date().getFullYear() - a.yearOfBirth;
        }
        if('yearOfDeath' in b){
            secondAge = b.yearOfDeath - b.yearOfBirth;
        }
        else{
            secondAge = new Date().getFullYear() - b.yearOfBirth;
        }
        if(firstAge > secondAge){
          return 1;
        }
        else{
          return -1;
        }
      })
      return oldest[oldest.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
