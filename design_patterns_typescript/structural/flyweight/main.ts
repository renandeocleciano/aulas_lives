import { IconFactory } from "./factory/icon-factory";

const points = [
  { type: "gym", x: 10, y: 20 },
  { type: "restaurant", x: 15, y: 25 },
  { type: "gym", x: 50, y: 30 },
  { type: "school", x: 60, y: 40 },
  { type: "restaurant", x: 80, y: 20 },
];

console.log("Inicializando o mapa...");

for (const point of points) {
  const icon = IconFactory.getIcon(point.type);
  icon.draw(point.x, point.y);
}
