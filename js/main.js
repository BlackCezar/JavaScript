$(document).ready(function () {
    'use strict';
    console.log('main.js loaded');

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();
    tool.onMouseDown=function (event) {
        var c = Shape.Circle(event.point.x,event.point.y, 20);
        c.fillColor='green';
    };


    paper.view.draw();




});