import { Player } from '../entities/Player';
import { MovementSystem } from '../systems/MovementSystem';
import { PhysicsSystem } from '../systems/PhysicsSystem';
import { CollisionSystem } from '../systems/CollisionSystem';
import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
    player!: Player;
    movementSystem!: MovementSystem;
    physicsSystem!: PhysicsSystem;
    collisionSystem!: CollisionSystem;

    constructor() {
        super('game-scene');
    }

    preload() {
        this.load.image('player', 'assets/player.png');
    }

    create() {
        const isPlatform = false;
        this.player = new Player(this, 100, 100);

        this.movementSystem = new MovementSystem(this);
        this.physicsSystem = new PhysicsSystem(isPlatform ? 400 : 0);
        this.collisionSystem = new CollisionSystem(
          this.add.rectangle(400, 450, 800, 20, 0x00ff00)
        ); 
    }

    update(_time: number, deltaTime: number) {
        const dt = deltaTime / 1000;

        this.movementSystem.update(this.player, dt);
        this.physicsSystem.update(this.player, dt);
        this.collisionSystem.update(this.player);
    }
}
