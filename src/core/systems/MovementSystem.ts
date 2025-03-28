import { Player } from '../entities/Player';
import { MovementComponent } from '../components/MovementComponent';
import Phaser from 'phaser';

export class MovementSystem {
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(scene: Phaser.Scene) {
        if (scene.input.keyboard) {
            this.cursors = scene.input.keyboard.createCursorKeys();
        } else {
            throw new Error("Keyboard input is not available in the scene.");
        }
    }

    update(player: Player, deltaTime: number) {
        const movementComponent = player.getComponent(MovementComponent) as MovementComponent;

        if (!movementComponent) return;

        const speed = movementComponent.speed * deltaTime;

        if (this.cursors.left?.isDown) {
            player.x -= speed;
        } else if (this.cursors.right?.isDown) {
            player.x += speed;
        }

        if (this.cursors.up?.isDown) {
            player.y -= speed;
        } else if (this.cursors.down?.isDown) {
            player.y += speed;
        }
    }
}
