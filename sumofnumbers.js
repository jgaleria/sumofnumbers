function sumFor(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i];
  }
  console.log(`For: ${total}`);
  return total;
}

function sumWhile(list) {
  let total = 0;
  let i = 0;
  while (i < list.length) {
    total += list[i];
    i++;
  }
  console.log(`While: ${total}`);
  return total;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (number, added) {
    return number + added;
  });
}

const nums = [1, 2, 3, 4, 5];
sumFor(nums);
sumWhile(nums);
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));
