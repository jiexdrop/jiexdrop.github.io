#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;


float sdBox( in vec2 p, in vec2 b )
{
    vec2 d = abs(p)-b;
    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
}

void main() {
    vec2 p = -1.0 + 2.0 * gl_FragCoord.xy / u_resolution.xy;

    vec3 color = vec3(p.x, p.y, p.x);

    gl_FragColor = vec4(color, 1.0);
}

