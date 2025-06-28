# fractal-rendering-webgl

<p align="center">
  <img alt="fractal" src="https://github.com/user-attachments/assets/bb778d4c-034c-4ced-9fde-dc581a39ab2c" />
</p>

## Description

This is a simple WebGL application that renders the Julia set fractal. It can be used to show superior performance of GPU over CPU in parallel computations. I have implemented the same algorithm in C++ with SDL2 and compiled to WASM with Emscripten and it is available [here](https://github.com/GregoryKogan/fractal-rendering). I tried to optimize it as much as possible (even used SIMD), but it still runs significantly slower than the WebGL version.
