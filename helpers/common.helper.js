function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function benefitsCostMonth(salary, dependants) {
  if (dependants > 0){
    return +((salary / 26) - (salary / 26 - 1000 / 26 - dependants * (500 / 26))).toFixed(5)
  }
  else return +((salary / 26) - (salary / 26 - 1000 / 26)).toFixed(5)
}

export { getRandomItem , benefitsCostMonth }
