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
    vec2 p = -1.0 + 2.0 * gl_FragCoord.xy / u_resolution.xy;

    vec2 mouse_pos = -1.0 + 2.0 * (u_mouse / u_resolution.xy);

    vec3 color =0.5 + 0.5 *( vec3(p.x, p.y, 0.0));

    float box = sdBox(p, mouse_pos, vec2(0.1, 0.1));
    vec3 boxColor = vec3(0);

    color = mix(boxColor, color, step(0.0, box));

    gl_FragColor = vec4(color, 1.0);
}
