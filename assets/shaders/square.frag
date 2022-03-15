#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float sdBox(in vec2 uv, in vec2 pos, in vec2 size) {
    vec2 d = abs(uv - pos) - size;
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

void main() {
    vec2 p = gl_FragCoord.xy / u_resolution.xy;

    vec2 mouse_pos = u_mouse / u_resolution.xy;


    // change init color
    float x_col = abs(sin(u_time));
    float y_col = abs(cos(u_time));
    vec3 color = vec3(x_col, y_col, p.x+  mouse_pos.y);

    // draw a pointer in the screen
    float box = sdBox(p, mouse_pos, vec2(0.01, 0.01));
    vec3 boxColor = vec3(0);

    color = mix(boxColor, color, step(0.0, box));
    // ----

    gl_FragColor = vec4(color, 1.0);
}
