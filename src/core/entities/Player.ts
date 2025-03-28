import { Component } from '../components/Component';
import { MovementComponent } from '../components/MovementComponent';
import { PhysicsComponent } from '../components/PhysicsComponent';

export class Player extends Phaser.GameObjects.Sprite {
    components: Component[];

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'player');
        scene.add.existing(this);

        this.components = [
            new MovementComponent(200),
            new PhysicsComponent(0, 0)
        ];
    }

    getComponent(componentClass: any) {
        return this.components.find(component => component instanceof componentClass);
    }
}
