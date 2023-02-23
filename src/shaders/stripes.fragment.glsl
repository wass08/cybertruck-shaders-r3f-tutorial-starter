varying vec2 vUv;
uniform float uTime;

uniform vec3 uColorA;
uniform vec3 uColorB;

uniform float uMulti;

void main() {

  vec2 mulvUv = mod(vUv * uMulti, 1.0);
  float strength = step(0.5, mod(mulvUv.y + uTime, 1.0));
  vec3 mixColor = mix(uColorA, uColorB, step(0.5, mulvUv.y));
  gl_FragColor = vec4(mixColor, min(strength, 0.5));
}