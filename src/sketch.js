let juliaShader;

const c_points = [
  [0.0, 0.0],
  [-0.4, -0.59],
  [-0.702, -0.384],
  [-0.835, -0.2321],
  [-2.0, 0.0],
  [-0.8, 0.156],
  [-0.835, 0.2321],
  [-0.7269, 0.1889],
  [-0.54, 0.54],
  [-0.4, 0.6],
  [0.0, 0.8],
  [0.078, 0.656],
  [0.355, 0.355],
  [0.45, 0.1428],
  [0.37, 0.1],
  [0.285, 0.01],
  [0.285, 0.0],
  [0.34, -0.05],
  [0.0, 0.0],
];
const animation_speed = 0.00001;
let animation_progress = 0.0;

function preload() {
  juliaShader = loadShader("src/shader.vert", "src/shader.frag");
}

function setup() {
  const min_dimension = Math.min(window.innerWidth, window.innerHeight);
  createCanvas(min_dimension, min_dimension, WEBGL);
}

function draw() {
  animation_progress += animation_speed * deltaTime;
  if (animation_progress > 1.0) {
    animation_progress = 0.0;
  }
  shader(juliaShader);
  juliaShader.setUniform("c", calculate_c());
  rect(0, 0, width, height);
}

function calculate_c() {
  const index = Math.floor(animation_progress * (c_points.length - 1));
  const progress = float_mod(animation_progress * (c_points.length - 1), 1.0);

  const current_point = c_points[index];
  const next_point = c_points[index + 1];

  return [
    current_point[0] + (next_point[0] - current_point[0]) * progress,
    current_point[1] + (next_point[1] - current_point[1]) * progress,
  ];
}

function float_mod(a, b) {
  return Number((a - Math.floor(a / b) * b).toPrecision(8));
}
