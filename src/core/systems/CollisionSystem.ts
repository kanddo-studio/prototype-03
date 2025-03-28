import { Player } from '../entities/Player';
import { PhysicsComponent } from '../components/PhysicsComponent';
import Phaser from 'phaser';

export class CollisionSystem {
    ground: Phaser.GameObjects.Rectangle;

    constructor(ground: Phaser.GameObjects.Rectangle) {
        this.ground = ground;
    }

    update(player: Player) {
        const physicsComponent = player.getComponent(PhysicsComponent) as PhysicsComponent;

        if (!physicsComponent) return;

        const playerBounds = player.getBounds();
        const groundBounds = this.ground.getBounds();

        if (
            playerBounds.bottom >= groundBounds.top && 
            playerBounds.right > groundBounds.left &&
            playerBounds.left < groundBounds.right &&
            physicsComponent.velocityY >= 0
        ) {
            player.y = groundBounds.top - playerBounds.height / 2; 
            physicsComponent.velocityY = 0;
        }
    }
}
