let number = 0;

function takeANumber(line, personName) {
  line.push(personName)
  
  return `Welcome, ${personName}. You are number ${deliCounter(number)} in line.`
}

function deliCounter(num) {
  num ++;
  return num;
}

function nowServing (line) {
  if(line.length) {
    let name = line.shift();
    return `Currently serving ${name}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  let str = 'The line is currently: '
  
  if(line.length) {
    for (let i = 0; i < line.length -1; i++) {
      str += `${i+1}. ${line[i]}, `
    }
    str += `${line.length}. ${line[line.length-1]}`
    return str;
  } else {
    return "The line is currently empty."
  }
}