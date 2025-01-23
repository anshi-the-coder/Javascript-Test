function sides(literals, ...expressions) {
    const [area, perimeter] = expressions;
  const s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  const s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  return [s2, s1].sort();
}



function main() {
  let s1 = +(readLine());
  let s2 = +(readLine());
  
  [s1, s2] = [s1, s2].sort();
  
  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
  
  console.log((s1 === x) ? s1 : -1);
  console.log((s2 === y) ? s2 : -1);
}