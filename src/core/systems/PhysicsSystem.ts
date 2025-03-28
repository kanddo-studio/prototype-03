import { Player } from '../entities/Player';
import { PhysicsComponent } from '../components/PhysicsComponent';

export class PhysicsSystem {
    gravity: number;

    constructor(gravity: number = 0) {
        this.gravity = gravity;
    }

    update(player: Player, deltaTime: number) {
        const physicsComponent = player.getComponent(PhysicsComponent) as PhysicsComponent;

        if (!physicsComponent) return;

        physicsComponent.velocityY += this.gravity * deltaTime;

        player.y += physicsComponent.velocityY * deltaTime;
    }
}
