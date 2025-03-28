import { Component } from "./Component";

export class PhysicsComponent implements Component {
    name = 'physics';
    velocityX: number;
    velocityY: number;

    constructor(velocityX: number = 0, velocityY: number = 0) {
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }
}
