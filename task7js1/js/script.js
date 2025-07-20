function looping(start, end, breaknum, contnum) {
  if (start === undefined || start === " " ) {
    start = Number(prompt("Please enter a number for start:"));
  }
  if (end === undefined || end === " ") {
    end = Number(prompt("Please enter a number for end:"));
  }
  if (breaknum === undefined || breaknum === " ") {
    breaknum = Number(prompt("Please enter a number for breaknum:"));
  }
  if (contnum === undefined || contnum === " ") {
    contnum = Number(prompt("Please enter a number for contnum:"));
  }

  for (let i = start; i <= end; i++) {
    if (i === contnum) {
      continue;
    }
    console.log(i);
    if (i === breaknum) {
      break;
    }
  }
}



looping();
// looping(1,10,6,3);

