import * as d3 from 'd3';
import * as THREE from 'three';
import Globe from 'globe.gl';
export { ShowGlobe };


function ShowGlobe() {
    const world = Globe()
        (document.getElementById('golbeViz'))
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        .lineHoverPrecision(0)
        .polygonsData(countries.features.filter(d => d.properties.ISO_A2 !== 'AQ'))
        .polygonAltitude(0.06)
        .polygonCapColor(feat => colorScale(getVal(feat)))
        .polygonSideColor(() => 'rgba(0, 100, 0, 0.25)')
        .polygonStrokeColor(() => '#156')
        .onPolygonHover(hoverD => world
            .polygonAltitude(d => d === hoverD ? 0.14 : 0.06)
            .polygonCapColor(d => d === hoverD ? 'steelblue' : colorScale(getVal(d)))
        )
        .polygonsTransitionDuration(300)
}