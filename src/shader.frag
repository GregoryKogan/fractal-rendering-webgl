precision mediump float;

varying vec2 vTexCoord;

uniform vec2 c;

vec4 get_color(float t) {
    vec4 c = vec4(1.0, 1.0, 1.0, 1.0);
    c.r = 9.0 * (1.0 - t) * t * t * t;
    c.g = 15.0 * (1.0 - t) * (1.0 - t) * t * t;
    c.b = 8.5 * (1.0 - t) * (1.0 - t) * (1.0 - t) * t;
    return c;
}

void main() {
    vec2 z = vTexCoord.xy * 4.0 - 2.0;
    
    int iterations = 0;
    for (int i = 0; i < 256; i++) {
        iterations = i;
        float x = (z.x*z.x - z.y*z.y) + c.x;
        float y = (2.0*z.x*z.y) + c.y;
        
        if((x*x + y*y) > 4.0) break;
        z = vec2(x,y);
    }

    float mod = z.x*z.x + z.y*z.y;
    float smooth = float(iterations) - log2(max(1.0, log2(mod)));
    float t = smooth / 256.0;
    gl_FragColor = get_color(t);
}