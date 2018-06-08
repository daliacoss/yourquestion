/*

Does That Answer Your Question?
Copyright Decky Coss 2018

This program is free software: you can redistribute it and/or modify it under
the terms of the GNU Affero General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version. 

This program is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. 

You should have received a copy of the GNU Affero General Public License along
with this program. If not, see <https://www.gnu.org/licenses/>.

*/

YEAR = 2018;

DEBUG = false;

KEYS = {
    "up_alt": Phaser.KeyCode.W,
    "down_alt": Phaser.KeyCode.S,
    "left_alt": Phaser.KeyCode.A,
    "right_alt": Phaser.KeyCode.D,
    "up": Phaser.KeyCode.UP,
    "down": Phaser.KeyCode.DOWN,
    "left": Phaser.KeyCode.LEFT,
    "right": Phaser.KeyCode.RIGHT,
    "action": Phaser.KeyCode.SPACEBAR,
    "action_alt": Phaser.KeyCode.ENTER,
}

LAYOUT_INDEX = -1;
TIME_LIMIT = 45;

PROTAG_SPRITE = function(){
    var names = ["protag1", "protag2", "protag3"];
    return names[Math.floor(Math.random() * names.length)];
}

LAYOUTS = [
    //0
    {
        background: [
            {sprite: "clock", x: 654, y: 126},
            {sprite: "curtain_left", x: 798, y: 234},
            {sprite: "curtain_right", x: 966, y: 234},
            {sprite: "curtain_left", x: 336, y: 234},
            {sprite: "curtain_right", x: 498, y: 234},
            {sprite: "bookcase_right", x: 888, y: 462, holding: [
                {sprite: "book", x: 840, y: 330},
            ]},
            {sprite: "small_table_center", x: 654, y: 498, holding: [
                {sprite: "guitar", x: 672, y: 330},
            ]},
        ],
        midground: [
            {sprite: "main_table", x: 438, y: 560, holding:[
                {sprite: "mug", x: 424, y: 476},
                {sprite: "antag",  x: 600, y: 490, flip: true},
            ]},
            {name: "protag", sprite: PROTAG_SPRITE,  x: 252, y: 540},
            {sprite: "skateboard", x: 780, y: 652 },
            {name: "help_msg", sprite: "helpmsg", x: 640, y: 200},
        ],
        foreground: [
        ]
    },
    //1
    {
        background: [
            {sprite: "clock", x: 654, y: 126},
            {sprite: "curtain_left", x: 798, y: 234},
            {sprite: "curtain_right", x: 966, y: 234},
            {sprite: "curtain_left", x: 336, y: 234},
            {sprite: "curtain_right", x: 498, y: 234},
            {sprite: "bookcase_right", x: 888, y: 462, holding: [
                {sprite: "book", x: 864, y: 330},
            ]},
            {sprite: "small_table_center", x: 654, y: 498, holding: [
                {sprite: "pot", x: 600, y: 408},
                {sprite: "plant", x: 684, y: 390},
            ]},
        ],
        midground: [
            {sprite: "main_table", x: 438, y: 560, holding:[
                {sprite: "mug", x: 492, y: 486},
                {sprite: "bowl", x: 418, y: 498},
                {sprite: "antag",  x: 600, y: 490, flip: true},
            ]},
            {name: "protag", sprite: PROTAG_SPRITE,  x: 252, y: 540},
            {sprite: "skateboard", x: 462, y: 652 },
            {name: "help_msg", sprite: "helpmsg", x: 640, y: 200},
        ],
        foreground: [
        ]
    },
    //2
    {
        background: [
            {sprite: "clock", x: 654, y: 126},
            {sprite: "curtain_left", x: 798, y: 234},
            {sprite: "curtain_right", x: 966, y: 234},
            {sprite: "curtain_left", x: 336, y: 234},
            {sprite: "curtain_right", x: 498, y: 234},
            {sprite: "bookcase_right", x: 888, y: 462, holding: [
                {sprite: "book", x: 840, y: 330},
                {sprite: "plant", x: 924, y: 306},
            ]},
            {sprite: "small_table_center", x: 654, y: 498, holding: [
                {sprite: "guitar", x: 672, y: 330},
            ]},
        ],
        midground: [
            {sprite: "main_table", x: 438, y: 560, holding:[
                {sprite: "bowl", x: 418, y: 498},
                {sprite: "antag",  x: 600, y: 490, flip: true},
            ]},
            {name: "protag", sprite: PROTAG_SPRITE,  x: 252, y: 540},
            {sprite: "skateboard", x: 462, y: 658 },
            {name: "help_msg", sprite: "helpmsg", x: 640, y: 200},
        ],
        foreground: [
        ]
    },
    //3
    {
        background: [
            {sprite: "clock", x: 654, y: 126},
            {sprite: "curtain_left", x: 798, y: 234},
            {sprite: "curtain_right", x: 966, y: 234},
            {sprite: "curtain_left", x: 336, y: 234},
            {sprite: "curtain_right", x: 498, y: 234},
            {sprite: "chair", x: 300, y: 480, flip: true},
            {sprite: "bookcase_center", x: 654, y: 468, holding: [
                {sprite: "pot", x: 630, y: 336},
                {sprite: "small_table_right", x: 888, y: 514, holding: [
                    {sprite: "book", x: 845, y: 430},
                    {sprite: "plant", x: 930, y: 408},
                ]},
            ]},
        ],
        midground: [
            {sprite: "main_table", x: 438, y: 600, holding:[
                {sprite: "mug", x: 402, y: 534, flip: true},
                {sprite: "mug", x: 504, y: 534},
                {sprite: "antag",  x: 600, y: 528, flip: true},
            ]},
            {name: "protag", sprite: PROTAG_SPRITE,  x: 252, y: 576},
            {name: "help_msg", sprite: "helpmsg", x: 640, y: 200},
        ],
        foreground: [
        ]
    },
    //4
    {
        background: [
            {sprite: "clock", x: 654, y: 126},
            {sprite: "curtain_left", x: 798, y: 234},
            {sprite: "curtain_right", x: 966, y: 234},
            {sprite: "curtain_left", x: 336, y: 234},
            {sprite: "curtain_right", x: 498, y: 234},
            {sprite: "chair", x: 300, y: 480, flip: true},
            {sprite: "bookcase_center", x: 654, y: 468, holding: [
                {sprite: "pot", x: 630, y: 336},
                {sprite: "small_table_right", x: 888, y: 514, holding: [
                    {sprite: "guitar", x: 870, y: 346},
                ]},
            ]},
        ],
        midground: [
            {sprite: "main_table", x: 438, y: 600, holding:[
                {sprite: "bowl", x: 402, y: 540, flip: true},
                {sprite: "mug", x: 498, y: 534},
                {sprite: "antag",  x: 600, y: 534, flip: true},
            ]},
            {name: "protag", sprite: PROTAG_SPRITE,  x: 252, y: 576},
            {name: "help_msg", sprite: "helpmsg", x: 640, y: 200},
        ],
        foreground: [
        ]
    },
    //5
    {
        background: [
            {sprite: "clock", x: 654, y: 126},
            {sprite: "curtain_left", x: 798, y: 234},
            {sprite: "curtain_right", x: 966, y: 234},
            {sprite: "curtain_left", x: 336, y: 234},
            {sprite: "curtain_right", x: 498, y: 234},
            {sprite: "skateboard", x: 250, y: 650},
            {sprite: "bookcase_center", x: 654, y: 468, holding: [
                {sprite: "plant", x: 606, y: 318},
                {sprite: "book", x: 702, y: 330},
                {sprite: "small_table_right", x: 888, y: 514, holding: [
                    {sprite: "pot", x: 870, y: 426},
                ]},
            ]},
            {sprite: "guitar", x: 480, y: 456},
        ],
        midground: [
            {sprite: "main_table", x: 438, y: 600, holding:[
                {sprite: "mug", x: 402, y: 532, flip: true},
                {sprite: "antag",  x: 600, y: 534, flip: true},
            ]},
            {name: "protag", sprite: PROTAG_SPRITE,  x: 252, y: 576},
            {name: "help_msg", sprite: "helpmsg", x: 640, y: 200},
        ],
        foreground: [
        ]
    },
    //6
    {
        background: [
            {sprite: "clock", x: 654, y: 126},
            {sprite: "curtain_left", x: 798, y: 234},
            {sprite: "curtain_right", x: 966, y: 234},
            {sprite: "curtain_left", x: 336, y: 234},
            {sprite: "curtain_right", x: 498, y: 234},
            {sprite: "bookcase_center", x: 654, y: 462, holding: [
                {sprite: "plant", x: 606, y: 306},
                {sprite: "book", x: 702, y: 330},
                {sprite: "guitar", x: 840, y: 456},
                {sprite: "chair", x: 982, y: 480},
            ]},
        ],
        midground: [
            {sprite: "main_table", x: 438, y: 600, holding:[
                {sprite: "mug", x: 402, y: 532, flip: true},
                {sprite: "antag",  x: 600, y: 534, flip: true},
            ]},
            {name: "protag", sprite: PROTAG_SPRITE,  x: 252, y: 576},
            {name: "help_msg", sprite: "helpmsg", x: 640, y: 200},
        ],
        foreground: [
        ]
    },
    //7
    {
        background: [
            {sprite: "clock", x: 654, y: 126},
            {sprite: "curtain_left", x: 798, y: 234},
            {sprite: "curtain_right", x: 966, y: 234},
            {sprite: "curtain_left", x: 336, y: 234},
            {sprite: "curtain_right", x: 498, y: 234},
            {sprite: "bookcase_center", x: 654, y: 462, holding: [
                {sprite: "plant", x: 606, y: 306},
                {sprite: "book", x: 702, y: 330},
                {sprite: "guitar", x: 480, y: 456},
                {sprite: "skateboard", x: 852, y: 550},
                {sprite: "chair", x: 988, y: 480},
            ]},
        ],
        midground: [
            {sprite: "main_table", x: 438, y: 600, holding:[
                {sprite: "spoon", x: 470, y: 540},
                {sprite: "bowl", x: 402, y: 540},
                {sprite: "antag",  x: 600, y: 534, flip: true},
            ]},
            {name: "protag", sprite: PROTAG_SPRITE,  x: 252, y: 576},
            {name: "help_msg", sprite: "helpmsg", x: 640, y: 200},
        ],
        foreground: [
        ]
    },
];

BODIES = {
    small_table_center: {
        shape: [156, 108, 0, 6],
        staticUntilPunched: true,
    },
    bookcase_right: {
        shape: [222, 204, 0, 9],
        staticUntilPunched: true,
    },
    small_table_right: {
        shape: [168, 115, 0, 11],
        staticUntilPunched: true,
    },
    bookcase_center: {
        shape: [222, 204, 0, 9],
        staticUntilPunched: true,
    },
    chair: {staticUntilPunched: true},
    // book: {mass: 10000}
    punch: {
        staticUntilPunched: true,
    },
    curtain_left: {inactiveUntilPunched: true, immuneToExplosionsWhileInactive: true},
    curtain_right: {inactiveUntilPunched: true, immuneToExplosionsWhileInactive: true},
    clock: {inactiveUntilPunched: true},
    skateboard: {staticUntilPunched: true},
    antag: {staticUntilPunched: true, health: 1100},
    main_table: {staticUntilPunched: true},
    help_msg: {inactiveUntilPunched: true, health: 400},
};

ASSETS = {
    "images": [
        ["titlescreen", "assets/img/titlescreen.png"],
        ["room_outline", "assets/img/room_outline.png"],
        ["door", "assets/img/door.png"],
        ["antag", "assets/img/antag.png", 114, 252],
        ["bookcase_center", "assets/img/bookcase_center.png"],
        ["bookcase_right", "assets/img/bookcase_right.png"],
        ["book", "assets/img/book.png"],
        ["bowl", "assets/img/bowl.png"],
        ["box1", "assets/img/box1.png"],
        ["box2", "assets/img/box2.png"],
        ["box3", "assets/img/box3.png"],
        ["chair", "assets/img/chair.png"],
        ["clock", "assets/img/clock.png"],
        ["curtain_left", "assets/img/curtain_left.png"],
        ["curtain_right", "assets/img/curtain_right.png"],
        ["explosion", "assets/img/explosion.png"],
        ["floor_box", "assets/img/floor_box.png"],
        ["fork", "assets/img/fork.png"],
        ["guitar", "assets/img/guitar.png"],
        ["helpmsg", "assets/img/helpmsg.png"],
        ["main_table", "assets/img/main_table.png"],
        ["mug", "assets/img/mug.png"],
        ["pan", "assets/img/pan.png"],
        ["plant", "assets/img/plant.png"],
        ["pointer", "assets/img/pointer.png"],
        ["pot", "assets/img/pot.png"],
        ["protag3", "assets/img/protag3.png", 144, 138],
        ["protag2", "assets/img/protag2.png", 108, 168],
        ["protag1", "assets/img/protag1.png", 108, 186],
        ["punch", "assets/img/punch.png"],
        ["skateboard", "assets/img/skateboard.png"],
        ["small_table_center", "assets/img/small_table_center.png"],
        ["small_table_right", "assets/img/small_table_right.png"],
        ["spoon",  "assets/img/spoon.png"]
    ],
    "sound": [
        ["collision2", "assets/sound/collision2.ogg", "assets/sound/collision2.mp3"],
        ["collision3", "assets/sound/collision3.ogg", "assets/sound/collision3.mp3"],
        ["collision", "assets/sound/collision.ogg", "assets/sound/collision.mp3"],
        ["explode", "assets/sound/explode.ogg", "assets/sound/explode.mp3"],
        ["gameover", "assets/sound/gameover.ogg", "assets/sound/gameover.mp3"],
        ["highlight", "assets/sound/highlight.ogg", "assets/sound/highlight.mp3"],
        ["punch", "assets/sound/punch.ogg", "assets/sound/punch.mp3"],
        ["select", "assets/sound/select.ogg", "assets/sound/select.mp3"],
        ["talk", "assets/sound/talk.ogg", "assets/sound/talk.mp3"],
    ]
}

SCORE_PER_WALL_HIT = 20;
SCORE_PER_INTERACTIVE_HIT = 60;
SCORE_PER_PUNCH = 40;

function RepeatString(pattern, count) {
    if (count < 1) return '';
    var result = '';
    while (count > 1) {
        if (count & 1) result += pattern;
        count >>= 1, pattern += pattern;
    }
    return result + pattern;
}

/* DrawableBody */

function DrawableBody(state, params){
    this.state = state;
    var spriteName = (typeof params.sprite == "function") ? params.sprite() : params.sprite;
    
    this.sprite = state.game.add.sprite(params.x, params.y, spriteName);
    this.sprite.anchor.set(.5, .5);
    this.setFlipped(params.flip);
    this.name = params.name || spriteName;

    this.holding = [];
}

DrawableBody.prototype.isFlipped = function(){
    return this.sprite.width < 0;
}

DrawableBody.prototype.setFlipped = function(v){
     this.sprite.scale.x = (v) ? -1 : 1;
}

DrawableBody.prototype.isOverlappingBody = function(drawableBody){
    var flipOther = drawableBody.isFlipped();
    var otherSprite = drawableBody.sprite;
    if (!otherSprite.alive){
        return false;
    }
    drawableBody.setFlipped(false);
    var bodyRect = new Phaser.Rectangle(otherSprite.left, otherSprite.top, otherSprite.width, otherSprite.height);

    var puncherRect = new Phaser.Rectangle(this.sprite.left, this.sprite.top, this.sprite.width, this.sprite.height);
    var intersection = Phaser.Rectangle.intersection(bodyRect, puncherRect);

    if (flipOther) {
        drawableBody.setFlipped(flipOther);
    }

    if (intersection.width != 0 && intersection.height != 0){
        return true;
    }

    return false;
}

DrawableBody.prototype.activatePhysicsBody = function(){

    // abort if body is already active
    if (this.physicsBodyActivated){
        return;
    }

    var flip = this.isFlipped();
    this.setFlipped(false);

    var physicsManager = this.state.game.physics.p2;
    physicsManager.enable(this.sprite, DEBUG);
    this.sprite.body.allowSleep = false;

    this.physicsBodyActivated = true;

    this.setFlipped(flip);
}

DrawableBody.prototype.isMoving = function(exact){
    if (! (this.sprite.alive && this.sprite.body)){
        return false;
    }
    var vel = this.sprite.body.data.velocity;

    if (exact){
        return vel[0] && vel[1];
    }
    else {
        return ! (Math.abs(vel[0]) < .01 && Math.abs(vel[1]) < .01)
    }
}

/* InteractiveBody */

function InteractiveBody(state, layer, params){
    DrawableBody.call(this, state, params);

    this.layer = layer;

    if (params.holding){
        params.holding.forEach(function(v){
            this.holding.push(new InteractiveBody(state, layer, v));
        }, this);
    }

    this.punchAllowed = false;
    this.setHealth(800, false);
    this.deathVelocitySqr = 5000;

    state.interactiveBodies.push(this);
    if (this.name == "antag"){
        this.state.antagonist = this;
        this.sprite.animations.add("talk", [0, 1], 6, true);
        this.sprite.animations.add("idle", [0], 0, false);
    }
    else if (this.name == "help_msg"){
        this.sprite.visible = false;
        this.state.helpMsgBox = this;
    }
}

InteractiveBody.prototype = Object.create(DrawableBody.prototype);

InteractiveBody.prototype.constructor = InteractiveBody;

InteractiveBody.prototype.activatePhysicsBody = function(){

    if (this.name == "help_msg"){
        this.sprite.visible = true;
    }

    // abort if body has never been punched, and must stay inactive until
    // punched
    var extraData = BODIES[this.name];
    
    if (extraData && extraData.inactiveUntilPunched && !this.punchAllowed){
        if (extraData.immuneToExplosionsWhileInactive){
            this.immuneToExplosionsWhileInactive = true;
        }
        return;
    }

    DrawableBody.prototype.activatePhysicsBody.call(this);

    if (extraData){
        this.sprite.body.static = (extraData.staticUntilPunched && !this.punchAllowed) ? true : false;
        if (extraData.shape){
            this.sprite.body.clearShapes();
            this.sprite.body.addRectangle.apply(this.sprite.body, extraData.shape);
        }
        if (extraData.mass){
            this.sprite.body.mass = extraData.mass;
        }
        if (extraData.health){
            this.setHealth(extraData.health);
        }
    }

    this.sprite.body.setMaterial(this.state.materials.interactiveBodies);

    var group = this.state.collisionGroups[this.layer]
    var physicsManager = this.state.game.physics.p2;
    this.sprite.body.setCollisionGroup(group);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.collides(group, this.collidedWithInteractiveOrWall, this);
    this.sprite.body.collides(this.state.collisionGroups.puncher, this.gotPunched, this);
    physicsManager.updateBoundsCollisionGroup();

}

InteractiveBody.prototype.setHealth = function(h, killIfBelowThreshold, ignoreInactiveObjects){
    
    killIfBelowThreshold = (typeof killIfBelowThreshold == "undefined") ? true : killIfBelowThreshold;

    this._health = h;
    if (this._health <= 0 && killIfBelowThreshold){
        this.state.explosionManager.explode({x: this.sprite.x, y: this.sprite.y}, ignoreInactiveObjects);
        this.sprite.kill();
    }
}

InteractiveBody.prototype.getHealth = function(){
    return this._health;
}

InteractiveBody.prototype.incrementHealth = function(h){
    this.setHealth(this.getHealth() + h);
}

InteractiveBody.prototype.gotPunched = function(a, b){
    // called whenever there is a collision between this and puncher

    this.state.game.sound.play("collision");
    this.state.score += SCORE_PER_PUNCH;
}

InteractiveBody.prototype.collidedWithInteractiveOrWall = function(thisBody, otherBody){

    // uncomment below if you want to distinguish between wall hits and object
    // hits

    var velocitySqrMag = Math.pow(thisBody.data.velocity[0], 2) + Math.pow(thisBody.data.velocity[1], 2);
    if (velocitySqrMag >= this.deathVelocitySqr){
        this.incrementHealth(-20);
    }

    this.incrementHealth(-10);



    if (otherBody.data.shapes[0].material == this.state.materials.world){
        this.state.score += SCORE_PER_WALL_HIT;
    }
    else {
        this.state.score += SCORE_PER_INTERACTIVE_HIT;
    }
    
    var soundProbability = 0.56;
    var rnd = Math.random();
    if (rnd < soundProbability/3) {
        this.state.game.sound.play("collision2");
    }
    else if (rnd < soundProbability * (2/3)) {
        this.state.game.sound.play("collision3");
    }
    else if (rnd < soundProbability) {
        this.state.game.sound.play("collision");
    }
}

InteractiveBody.prototype.allowPunch = function(){
    this.punchAllowed = true;    // must be set before calling activatePhysicsBody
    this.activatePhysicsBody();  // activate if not already active
    this.sprite.body.static = false;

    this.holding.forEach(function(b){
        b.allowPunch();
    })
}

/* Protagonist */

function Protagonist(state, params){
    DrawableBody.call(this, state, params);

    this.walkSpeed = 400;
    this.jumpSpeed = 750;
    this.jumpLength = 100;
    this.jumpTimer = this.state.game.time.now;
    this.sprite.frame = 0;
}

Protagonist.prototype = Object.create(DrawableBody.prototype);

Protagonist.prototype.constructor = Protagonist;

Protagonist.prototype.update = function(){
    
    //only called when global physics are active

    if (this.state.game.time.now < this.jumpTimer){
        this.sprite.body.moveUp(this.jumpSpeed);
    }
}

Protagonist.prototype.activatePhysicsBody = function(){
    DrawableBody.prototype.activatePhysicsBody.call(this);

    this.sprite.body.setMaterial(this.state.materials.protagonist);

    var group = this.state.collisionGroups["midground"]
    var physicsManager = this.state.game.physics.p2;
    // this.sprite.body.static = true;
    this.sprite.body.mass = 1000;
    this.sprite.body.fixedRotation = true;
    this.sprite.body.setCollisionGroup(group);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.collides(group);
    physicsManager.updateBoundsCollisionGroup();

    this.puncherLocalPosition = {x: 114, y: 24};
    this.sprite.body.allowSleep = true;
    this.sprite.frame = 1;
}

Protagonist.prototype.moveLeft = function(pixelsPerSecond){
    this.setFlipped(true);
    this.sprite.body.moveLeft(pixelsPerSecond || this.walkSpeed);
    
    this.movedLeft = true;
}

Protagonist.prototype.moveRight = function(pixelsPerSecond){
    this.setFlipped(false);
    this.sprite.body.moveRight(pixelsPerSecond || this.walkSpeed);

    this.movedRight = true;
}

Protagonist.prototype.jump = function(){
    this.jumpTimer = this.state.game.time.now + this.jumpLength;
    
    this.jumped = true;
}

Protagonist.prototype.startPunch = function(playerControlled){
    playerControlled = (playerControlled == undefined) ? true : playerControlled;

    if (this.isPunching()){
        return;
    }
    
    var flip = this.isFlipped();
    this.state.puncher.appear({
        x: this.sprite.x + this.puncherLocalPosition.x * (flip ? -1 : 1),
        y: this.sprite.y + this.puncherLocalPosition.y
    }, {"flip": flip});
    this.state.game.sound.play("punch");
    
    if (playerControlled){
        this.punched = true;
    }
}

Protagonist.prototype.isMoving = function(){
    return this.state.puncher.sprite.alive || DrawableBody.prototype.isMoving.call(this);
}

Protagonist.prototype.destructionFinished = function(){
    this.sprite.frame = 2;
    this.state.game.sound.play("gameover");
}

Protagonist.prototype.isPunching = function(){
    return this.state.puncher.sprite.alive;
}

Protagonist.prototype.didAllActions = function(){
    return this.movedLeft && this.movedRight && this.jumped && this.punched;
}

/* Puncher */

function Puncher(state, appearLength, sprite){
    DrawableBody.call(this, state, {
        x: 0, y: 0, sprite: sprite || "punch"
    });

    this.appearLength = appearLength || 250;
    this.appearTimer = this.state.game.time.now;

    this.activatePhysicsBody();
    this.disappear();
    
}

Puncher.prototype = Object.create(DrawableBody.prototype);

Puncher.prototype.constructor = Puncher;

Puncher.prototype.appear = function(position, flags){

    // don't allow a punch to begin while another punch is still in progress
    if (this.sprite.alive && !flags.force){
        return;
    }

    this.sprite.reset(position.x, position.y);

    if (!flags.ignoreInactiveObjects){
        this.state.interactiveBodies.forEach(function(drawableBody){

            // if this body has been punched already, stop here and leave everything
            // to the physics engine
            if (drawableBody.punchAllowed){
                return;
            }
            else if (this.name == "explosion" && drawableBody.immuneToExplosionsWhileInactive){
                return;
            }

            // else, if there's an overlap, tell the body to accept the punch
            if (this.isOverlappingBody(drawableBody)){
                drawableBody.allowPunch();
            }
        }, this);
    }

    this.setFlipped(flags.flip);

    this.appearTimer = this.state.game.time.now + this.appearLength;

    if (this.onAppear){
        this.onAppear.call(this.onAppearContext);
    }
}

Puncher.prototype.disappear = function(){
    this.setFlipped(false);
    this.sprite.kill();
    
    if (this.onDisappear){
        this.onDisappear.call(this.onDisappearContext);
    }
}

Puncher.prototype.update = function(){
    if (this.sprite.alive){
        if (this.state.game.time.now >= this.appearTimer){
            this.disappear();
        }
    }
    return 0;
}

Puncher.prototype.activatePhysicsBody = function(){
    DrawableBody.prototype.activatePhysicsBody.call(this);
    this.sprite.body.static = true;
    var cg =  this.state.collisionGroups;
    this.sprite.body.setMaterial(this.state.materials.puncher);
    this.sprite.body.setCollisionGroup(cg.puncher);
    this.sprite.body.collides([cg.background, cg.foreground, cg.midground]);
}

/* DialogueBox */

function DialogueBox(state, width, height, x, y, charactersPerLine){

    this.state = state;
    this.charactersPerLine = charactersPerLine;
    this.textPosition = {x: 12, y: 12};
    this.fullText = "";
    this.currentCharacterIndex = 0;
    this.prevCharacterIndex = -1;
    this.textRevealSpeed = 34; //characters per second
    this.textDelay = .3; //seconds before non-immediate text begins to be revealed
    this.timeTextSet = 0;

    this.graphics = state.game.add.graphics(x, y);
    this.graphics.lineStyle(6, 0xffffff, 1);
    this.graphics.beginFill(0x000000, 1);
    this.graphics.drawRect(0, 0, width, height);
    this.graphics.endFill();

    this.label = state.game.add.text(
        x + this.textPosition.x,
        y + this.textPosition.y,
        "", { font: "12pt PressStart, monospace", fill: "#ffffff" }
    );
    
    this.graphicsGroup = this.state.game.add.group();
    this.graphicsGroup.add(this.graphics);
    this.graphicsGroup.add(this.label);
}

DialogueBox.prototype.setText = function(text, immediate, wrap, indent){

    if (wrap == undefined || wrap == null){
        wrap = true;
    }
    this.fullText = (wrap) ? this.wrapText(text, indent) : text;

    if (immediate){
        this.label.text = this.fullText;
        this.currentCharacterIndex = this.fullText.length;
    }
    else {
        this.currentCharacterIndex = 0;
        this.prevCharacterIndex = -1;
        this.label.text = "";
    }
    this.timeTextSet = this.state.game.time.now;
}

DialogueBox.prototype.showFullTextImmediately = function(){
    this.setText(this.fullText, true, false);
}

DialogueBox.prototype.isFullTextShowing = function(){
    return this.label.text == this.fullText;
}

DialogueBox.prototype.update = function(){

    if (this.isTalking()){
        let ind =  Math.floor(this.currentCharacterIndex);
        let prev = Math.floor(this.prevCharacterIndex);
        if (ind > prev) {
            // ensure that all characters between the previous and current
            // indices are printed
            let textToAdd = this.fullText.substring(prev + 1, ind + 1);
            this.label.text += textToAdd;
        }

        if (! this.state.talkSound.isPlaying){
            this.state.talkSound.play();
        }

        this.prevCharacterIndex = this.currentCharacterIndex;
        this.currentCharacterIndex += this.state.game.time.elapsed * this.textRevealSpeed / 1000;
    }
}

DialogueBox.prototype.isAllTextRevealed = function(){
    return this.currentCharacterIndex >= this.fullText.length;
}

DialogueBox.prototype.isTalking = function(){
    return ! this.isAllTextRevealed()
        && this.state.game.time.now - this.timeTextSet >= this.textDelay * 1000;
}

DialogueBox.prototype.setPosition = function(position){
    this.graphics.position = position;
}

DialogueBox.prototype.getPosition = function(position){
    return this.graphics.position;
}

DialogueBox.prototype.setVisibility = function(visibility){
    this.graphics.visible = visibility;
    this.label.visible = visibility;
}

DialogueBox.prototype.wrapText = function(text, indent, returnLines){
    var words = text.split(" ");
    indent = indent || 0;
    var lines = [];

    var cursor = 0 + indent;
    var currentLine = RepeatString(" ", indent);
    words.forEach(function(word){
        var wordLength = word.length;

        if (cursor + wordLength <= this.charactersPerLine){
            currentLine += word + " ";
        }
        else {
            lines.push(currentLine);
            currentLine = RepeatString(" ", indent) + word + " ";
            cursor = 0 + indent;
        }
        cursor += wordLength + 1;

    }, this);
    lines.push(currentLine);

    return (returnLines) ? lines : lines.join("\n");
}

/* DialogueManager
..........

.. ... ...
*/

function DialogueManager(state){
    this.state = state;
    this.antagTextBox = new DialogueBox(state, 552, 174, 500, 120, 33);
    this.protagTextBox = new DialogueBox(state, 552, 198, 6, 180, 33);
    this.protagChoicesIndent = 4;

    this.protagTextBox.setVisibility(false);
    this.dialogueTree = {};
    this.startingDialogueNodes = [];

    this.pointerPositions = [
        {x: 36, y: 192}, {x: 36, y: 258}, {x: 36, y: 324},
    ];
    this.pointer = state.game.add.sprite(this.pointerPositions[0].x, this.pointerPositions[0].y, "pointer");
    this.pointer.visible = false;

    this.loadDialogueTree(DIALOGUE);

//     this.antagTextBox.setText(
// `Show me screenshots of me getting owned by any single person. I'm a lawyer with a political science degree. I don't get owned.`
//     )

    this.resetScene();

    this.displayCurrentStep();
}

DialogueManager.prototype.loadDialogueTree = function(tree){

    // top level nodes must have an ID or they will not be loaded

    tree.forEach(function(node){
        this.loadDialogueNode(node);
    }, this);
}

DialogueManager.prototype.loadDialogueNode = function(node){
    var newNode = {prompt: node.prompt, choices: [], end: node.end, maybeTrigger: node.maybe_trigger};

    if (node.id){
        this.dialogueTree[node.id] = newNode;
        if (node.start){
            this.startingDialogueNodes.push(node.id)
        }
    }

    node.choices.forEach(function(choice){
        var newChoice = {
            label: choice.label,
            full_text: choice.full_text,
            link: ("object" == typeof choice.link) ? this.loadDialogueNode(choice.link) : choice.link,
        };
        newNode.choices.push(newChoice);
    }, this);

    // if this node has an ID, the node was stored at the top level of
    // this.dialogueTree at the beginning of this function. return the ID
    // instead so there's less redundancy

    return node.id || newNode;
}

DialogueManager.prototype.resetScene = function(){
    this.currentNode = this.dialogueTree[this.startingDialogueNodes[0]];
    this.currentStep = 0; // 0 for prompt (antag), 1 for choices (protag)
    this.highlightedChoice = 0;
    this.potentialEvent = null;
}

DialogueManager.prototype.displayCurrentStep = function(){
    if (this.currentStep == 0){
        this.highlightedChoice = 0;
        this.protagTextBox.setVisibility(false);
        this.pointer.visible = false;
        
        if (this.currentNode){
            this.antagTextBox.setText(this.currentNode.prompt);
            this.antagTextBox.setVisibility(true);
        }
    }
    else if (this.currentStep == 1){
        this.antagTextBox.setVisibility(false);

        var text = ""
        for (var i = 0; i < 2; i++){
            if (i < this.currentNode.choices.length){
                var choice = this.currentNode.choices[i];
                var lines = this.protagTextBox.wrapText(
                    choice.label, this.protagChoicesIndent, true
                );
                text += lines.join("\n") + RepeatString("\n", 4 - lines.length);
            }
            else {
                text += RepeatString("\n", 3);
            }
        }

        text += RepeatString(" ", this.protagChoicesIndent) + "DESTROY";

        this.protagTextBox.setText(text, true, false, 4);
        this.pointer.visible = true;
        this.protagTextBox.setVisibility(true);

        if (this.currentNode.end){
            this.state.antagonistWalkAway();
        }
    }
}

DialogueManager.prototype.getCurrentTextBox = function(){
    return (this.currentStep == 0) ? this.antagTextBox : this.protagTextBox;
}

DialogueManager.prototype.triggerPotentialEvent = function(){
    if (!this.potentialEvent){
        return;
    }
    
    this.currentNode = this.potentialEvent;
    this.currentStep = 0;
    this.potentialEvent = null;
    this.antagTextBox.textDelay = 0;
    this.displayCurrentStep();
}

DialogueManager.prototype.advance = function(){
    if (!this.currentNode){
        return;
    }

    var currentTextBox = this.getCurrentTextBox();
    if (!currentTextBox.isFullTextShowing()){
        currentTextBox.showFullTextImmediately();
        return;
    }

    // prompt advancing to choices
    if (this.currentStep == 0){
        if (this.currentNode.maybeTrigger){
            this.potentialEvent = this.dialogueTree[this.currentNode.maybeTrigger];
        }
    }
    // choice advancing to prompt
    else {
        this.state.game.sound.play("select");
        //return if picked destroy
        if (this.highlightedChoice == this.currentNode.choices.length){
            this.tearDown();
            return;
        }
        var nextNode = this.currentNode.choices[this.highlightedChoice].link;
        this.currentNode =
            ("object" == typeof nextNode) ? nextNode
            : (!nextNode) ? false
            : this.dialogueTree[nextNode];
    }

    this.currentStep = (this.currentStep + 1) % 2;

    this.displayCurrentStep();
}

DialogueManager.prototype.moveSelectionUp = function(){

    if (this.currentStep != 1){
        return;
    }

    if (this.highlightedChoice <= 0){
        this.highlightedChoice = this.currentNode.choices.length;
    }
    else {
        this.highlightedChoice--;
    }
    
    this.state.game.sound.play("highlight");
}

DialogueManager.prototype.moveSelectionDown = function(){
    if (this.currentStep != 1){
        return;
    }

    this.highlightedChoice = (this.highlightedChoice + 1) % (this.currentNode.choices.length + 1);
    this.state.game.sound.play("highlight");
}

DialogueManager.prototype.update = function(){
    if (this.dialogueFinished || !this.currentNode){
        return;
    }
    this.protagTextBox.update();
    this.antagTextBox.update();

    if (this.highlightedChoice == this.currentNode.choices.length){
        this.pointer.position = this.pointerPositions[2];
    }
    else {
        this.pointer.position = this.pointerPositions[this.highlightedChoice];
    }
}

DialogueManager.prototype.tearDown = function(){
    this.antagTextBox.setVisibility(false);
    this.protagTextBox.setVisibility(false);
    this.pointer.visible = false;

    this.dialogueFinished = true;
}

/* ExplosionManager */

function ExplosionManager(state){
    this.state = state;
    this.explosions = [];
    for (var i = 0; i < 10; i++){
        this.explosions.push(this.newExplosion());
    }
}

ExplosionManager.prototype.explode = function(position, ignoreInactiveObjects){
    var ex = this.explosions.shift();   // pop first element of explosion array
    ex.appear(position, {flip: false, force: true, ignoreInactiveObjects: ignoreInactiveObjects});
    this.explosions.push(ex);           // push to the end of the list
    this.state.game.sound.play("explode");
}

ExplosionManager.prototype.newExplosion = function(){
    var puncher = new Puncher(this.state, 300, "explosion");
    // puncher.onDisappear = this.explosionEnded;
    // puncher.onDisappearContext = this;
    return puncher;
}

ExplosionManager.prototype.update = function(){
    this.explosions.forEach(function(e){
        e.update();
    })
}

// ExplosionManager.prototype.explosionEnded(){
// 
// }

/* GameState */

function GameState(w, h, renderer, parent){
    new Phaser.Game(w, h, renderer, parent, this);
}

GameState.prototype = Object.create(DrawableBody.prototype);

GameState.prototype.constructor = GameState;

GameState.prototype.preload = function(){
    
    this.filesNotLoaded = [];
    
    var t = this.game.add.text(
        this.game.world.centerX, this.game.world.centerY,
        "0%",
        {font: "22pt monospace", fill: "#ffffff", align: "center" },
    );
    t.anchor.set(0.5);
    
    this.game.load.onFileError.add(function(k, f){
        this.filesNotLoaded.push(f);
    }, this);
    
    this.game.load.onFileStart.add(function(progress, k, f){
        t.text = progress + "%...";
    });
    this.game.load.onLoadComplete.add(function(progress, k, f){
        if (this.filesNotLoaded.length > 0){
            this.showErrorScreen();
        }
        t.destroy();
    }, this);

    ASSETS["images"].forEach(function(v){
        if (v.length > 2){
            this.game.load.spritesheet(v[0], v[1], v[2], v[3]);
        }
        else {
            this.game.load.image(v[0], v[1]);
        }
    }, this)
    this.game.load.webfont("PressStart", "PressStart");
    ASSETS["sound"].forEach(function(v){
        this.game.load.audio(v[0], v.slice(1,3));
    }, this);
}

GameState.prototype.init = function(){
    this.game.load = new CustomLoader(this.game);
}

GameState.prototype.createPhysics = function(){
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    var physicsManager = this.game.physics.p2;

    this.interactiveBodies = [];
    physicsManager.setBounds(0, 0, 1280, 690);
    physicsManager.gravity.y = 2000;
    this.materials = {}
    this.materials.world = physicsManager.createMaterial("world_material");
    this.materials.interactiveBodies = physicsManager.createMaterial("interactive_body_material");
    this.materials.puncher = physicsManager.createMaterial("puncher_material");
    this.materials.protagonist = physicsManager.createMaterial("protagonist_material");

    physicsManager.setWorldMaterial(this.materials.world);

    this.materials.contactInteractiveVsWorld = physicsManager.createContactMaterial(
        this.materials.interactiveBodies, this.materials.world, {restitution: 1}
    );
    this.materials.contactInteractiveVsInteractive = physicsManager.createContactMaterial(
        this.materials.interactiveBodies, this.materials.interactiveBodies, {restitution: 1.1}
    );
    this.materials.contactProtagVsWorld = physicsManager.createContactMaterial(
        this.materials.protagonist, this.materials.world, {restitution: .8, friction: 1}
    );
    this.materials.contactInteractiveVsPuncher = physicsManager.createContactMaterial(
        this.materials.interactiveBodies, this.materials.puncher, {restitution: 2}
    );

    physicsManager.setImpactEvents(true)

    this.collisionGroups = {
        "background": physicsManager.createCollisionGroup(),
        "midground": physicsManager.createCollisionGroup(),
        "foreground": physicsManager.createCollisionGroup(),
        "puncher": physicsManager.createCollisionGroup(),
    };

    physicsManager.sleepMode = 2; // BODY_SLEEPING

    this.createBounds("foreground", 1280, 720);
    this.createBounds("midground", 1100, 640);
    this.createBounds("background", 972, 576);
}

GameState.prototype.create = function(){
    
    var game = this.game;

    this.keys = game.input.keyboard.addKeys(KEYS);
    this.keys.up.onDown.add(this.callbackUpButton, this);
    this.keys.up_alt.onDown.add(this.callbackUpButton, this);
    this.keys.down.onDown.add(this.callbackDownButton, this);
    this.keys.down_alt.onDown.add(this.callbackDownButton, this);
    this.keys.action.onDown.add(this.callbackActionButton, this);
    this.keys.action_alt.onDown.add(this.callbackActionButton, this);
    this.talkSound = game.add.audio("talk");
    game.sound.volume = 0.4;
    
        
    function resumeAudioContext(){
        let audioContext = game.sound.context;
        if (audioContext.state === "running"){
            return;
        }

        game.sound.context.resume().then(() => {
            console.log('AudioContext resumed successfully');
        });
    }

    this.game.input.onDown.addOnce(resumeAudioContext);
    ["action", "action_alt"].forEach(key => {
        this.keys[key].onDown.addOnce(resumeAudioContext);
    });
        
    this.helpMsgBox = {}
    this.physicsActivationTime = 0;

    this.antagonistWalkSpeed = .120;
    this.antagonistWalkingAway = false
    this.dialogueEventTriggerPosition = 800;
    this.dialogueEventChance = .4;
    this.triggeredPotentialDialogueEvent = false;
    this.gameOver = false;
    this.timeOver = false;
    this.gameOverTime = 0
    this.lastTimeOfMovement = 0;
    this.physicsActive = false;
    this.bounds = {}
    this.gameStarted = false;

    this.showSplashScreen();
}

GameState.prototype.showErrorScreen = function(){
    this.showingErrorScreen = true;

    this.errorScreenLabel = this.game.add.text(
        this.game.world.centerX, this.game.world.centerY,
        "", {font: "16pt monospace", fill: "#ffffff", align: "left" },
    );
    this.errorScreenLabel.anchor.set(0.5);

    var fileTypes = this.filesNotLoaded.map(x => x.type);
    var nounFile = (this.filesNotLoaded.length == 1) ? "A file" : "Some files";    
    var nounType = (fileTypes.length == 1) ? "type" : "types";

    this.errorScreenLabel.text = nounFile + " of the following " + nounType + " failed to load:\n" + fileTypes.join(", ") +
`

This means that the game might not look, sound, or behave as intended.

To continue anyway, press SPACE or ENTER.

(Want to help make this game better? Message the author about this error
at deckycoss@gmail.com)
`;

}

GameState.prototype.tearDownErrorScreen = function(){
    this.showingErrorScreen = false;
    this.errorScreenLabel.destroy();
    delete this.errorScreenLabel;
    this.showSplashScreen();
}

GameState.prototype.showSplashScreen = function(){
    if (this.showingErrorScreen){
        return;
    }

    this.score = this.score || 0;
    this.game.stage.backgroundColor = 0x000000;
    this.splashScreen = this.game.add.group();

    var title = this.game.add.sprite(this.game.world.centerX, 0, "titlescreen", undefined, this.splashScreen);
    title.anchor.set(0.5, 0);

    if (this.score > 0){
        var scoreLabel = this.game.add.text(
            this.game.world.centerX, 420,
            "YOUR SCORE: " + this.score.toString(),
            { font: "22pt PressStart, monospace", fill: "#ffffff", align: "center" },
            this.splashScreen
        );

        scoreLabel.anchor.set(0.5, 0);
    }

    var subtitleLabel = this.game.add.text(
        132, 532,
        "CONTENT WARNING:\ntransmisogyny,\nprofanity",
        { font: "22pt PressStart, monospace", fill: "#ffffff", align: "left" },
        this.splashScreen
    );

    var controlsLabel = this.game.add.text(
        1280 - 132, 532,
        "CONTROLS:\narrows or WASD\nspace or enter",
        { font: "22pt PressStart, monospace", fill: "#ffffff", align: "right" },
        this.splashScreen
    );
    controlsLabel.anchor.set(1, 0);
    
    var creditsLabel = this.game.add.text(
        this.game.world.centerX, 690,
        "© DECKY COSS " + YEAR.toString() + "\n'PRESS START' FONT © CODY BOISCLAIR 2011",
        { font: "9pt PressStart, monospace", fill: "#ffffff", align: "center" },
        this.splashScreen
    );
    creditsLabel.anchor.set(0.5, 0);
}

GameState.prototype.startGame = function(){
    this.gameStarted = true;
    this.score = 0;

    this.splashScreen.destroy();
    this.game.stage.backgroundColor = 0x000000;
    this.game.add.sprite(0, 0, "room_outline");
    this.door = this.game.add.sprite(1158, 210, "door");

    this.createPhysics();
    var layoutIndex = (LAYOUT_INDEX > 0) ? LAYOUT_INDEX : Math.floor(Math.random() * LAYOUTS.length);
    var layout = LAYOUTS[layoutIndex];
    ["background", "midground", "foreground"].forEach( function(layer){
        layout[layer].forEach(function(v){
            if (v.name == "protag"){
                this.protagonist = new Protagonist(this, v);
            }
            else {
                var interactiveBody = new InteractiveBody(this, layer, v);
            }
        }, this);
    }, this);
    

    this.puncher = new Puncher(this);
    this.dialogueManager = new DialogueManager(this);
    this.explosionManager = new ExplosionManager(this);

}

GameState.prototype.update = function(){
    if (this.gameStarted){
        this.gameUpdate();
    }
}

GameState.prototype.gameUpdate = function(){
    if (this.physicsActive){
        this.updateLeftRightButtons();
        this.protagonist.update();
        this.puncher.update();
        this.explosionManager.update();

        var bodyStillMoving = false;

        for (var i = 0; i <= this.interactiveBodies.length; i++){
            var body = (i) ? this.interactiveBodies[i-1] : this.protagonist;
            if ( body.isMoving() ){
                bodyStillMoving = true;
                this.lastTimeOfMovement = this.game.time.now;
                
                if (this.timeOver && i){
                    body.setHealth(0, true, true);
                }
                else {
                    break;
                }
            }
        }
        if (!bodyStillMoving && this.game.time.now - this.lastTimeOfMovement >= 1500){
            this.setGameOver();
            this.protagonist.destructionFinished();
        }
        else if (this.game.time.now - this.physicsActivationTime >= TIME_LIMIT * 1000){
            this.timeOver = true;
        }
        if (this.helpMsgBox.sprite.alive && !this.helpMsgBox.physicsBodyActivated && this.game.time.now - this.physicsActivationTime >= 4000 && this.protagonist.didAllActions()){
            this.helpMsgBox.sprite.kill();
        }
    }

    else {
        this.dialogueManager.update();
        if (this.dialogueManager.dialogueFinished && !this.gameOver){
            this.activatePhysics();
            this.protagonist.startPunch(false);
            this.antagonistWalkingAway = false;
        }
        else {
            if (this.gameOver && this.game.time.now - this.gameOverTime > 1500){
                this.restartGame();
                return;
            }
            
            // handle antagonist walking and events to be triggered by
            // antagonist position
            if (this.antagonistWalkingAway){
                this.antagonist.sprite.x += this.game.time.elapsed * this.antagonistWalkSpeed;
                var antagRightEdge = this.antagonist.sprite.x + (this.antagonist.sprite.width/2);
    
                if (antagRightEdge > this.door.x){
                    this.door.visible = false;
                    this.dialogueManager.tearDown();
                    this.setGameOver();

                    if (this.antagonist.sprite.x + (this.antagonist.sprite.width/2) > this.door.x + this.door.width){
                        this.antagonist.sprite.kill();
                        this.antagonistWalkingAway = false;
                    }
                }
                else if (!this.triggeredPotentialDialogueEvent && antagRightEdge > this.dialogueEventTriggerPosition){
                    let x =  Math.random();
                    if (x < this.dialogueEventChance){
                        this.dialogueManager.triggerPotentialEvent();
                    }
                    this.triggeredPotentialDialogueEvent = true;
                }
            }

            //handle antagonist animations
            if (this.dialogueManager.antagTextBox.isTalking()){
                this.antagonist.sprite.animations.play("talk");
            }
            else if (this.antagonist.sprite.animations.currentAnim.name != "idle") {
                this.antagonist.sprite.animations.play("idle");
            }
        }


    }
}

GameState.prototype.setGameOver = function(){
    this.gameOver = true;
    this.physicsActive = false;

    this.gameOverTime = this.game.time.now;
}

GameState.prototype.restartGame = function(){
    this.game.state.restart();
}

GameState.prototype.updateLeftRightButtons = function(){
    if (this.keys.left.isDown || this.keys.left_alt.isDown){
        this.protagonist.moveLeft();
    }
    else if (this.keys.right.isDown || this.keys.right_alt.isDown){
        this.protagonist.moveRight();
    }
}

GameState.prototype.callbackUpButton = function(){
    if (!this.gameStarted){
        return;
    }
    if (this.physicsActive){
        this.protagonist.jump();
    }
    else if (!this.gameOver){
        this.dialogueManager.moveSelectionUp();
    }
}

GameState.prototype.callbackDownButton = function(){
    if (!this.gameStarted){
        return;
    }
    if (!this.physicsActive && !this.gameOver){
        this.dialogueManager.moveSelectionDown();
    }
}

GameState.prototype.callbackActionButton = function(){
    if (this.showingErrorScreen){
        this.tearDownErrorScreen();
        return;
    }
    else if (!this.gameStarted){
        this.startGame();
        return;
    }

    if (this.physicsActive){
        this.protagonist.startPunch();
    }
    else if (!this.gameOver){
        this.dialogueManager.advance();
        
        // if (this.antagonistWalkingAway && !myvar){
        //     myvar = true;
        //     this.dialogueManager.triggerPotentialEvent();
        // }
    }
}

GameState.prototype.antagonistWalkAway = function(){
    this.antagonistWalkingAway = true;
    this.antagonist.setFlipped(false);
}


GameState.prototype.collisionInteractiveVsWorld = function(wall, obj){

}

GameState.prototype.activatePhysics = function(){
    var _this = this;
    this.interactiveBodies.forEach(function(interactiveBody){
        interactiveBody.activatePhysicsBody();
    });
    this.lastTimeOfMovement = this.game.time.now;
    this.protagonist.activatePhysicsBody();
    this.antagonistWalkingAway = false;
    this.antagonist.setFlipped(true);
    
    
    var physicsManager = this.game.physics.p2;
    
    // this.destroyHelpBox = this.game.add.sprite(this.game.world.centerX, 100, "helpmsg");
    // 
    // physicsManager.enable(this.destroyHelpBox, DEBUG);
    // this.destroyHelpBox.body.setCollisionGroup(this.collisionGroups.midground);
    // this.destroyHelpBox.body.collideWorldBounds = true;
    // this.destroyHelpBox.body.collides([this.collisionGroups.midground, this.collisionGroups.puncher]);
    // this.destroyHelpBox.body.setMaterial(this.materials.interactiveBodies);
    
    physicsManager.updateBoundsCollisionGroup();

    this.physicsActive = true;
    this.physicsActivationTime = this.game.time.now;
}

GameState.prototype.createBounds = function(layerName, width, height){
    var physicsManager = this.game.physics.p2;
    var x = (this.state.game.width - width) / 2;
    var y = 0;

    if (DEBUG){
        var graphics = this.game.add.graphics(0, 0);
        graphics.lineStyle(4, 0xffd900, 1);
        graphics.drawRect(x, y, width, height);
    }

    this.bounds[layerName] = {}
    var walls = [
        {name: "bottom", position: [x, y+height], angle: 0},
        {name: "left", position: [x, y], angle: 90},
        {name: "right", position: [x+width, y], angle: -90}
    ]
    var _this = this;

    walls.forEach(function(wall){
        var plane = new Phaser.Physics.P2.Body(_this.game);
        plane.addShape(new p2.Plane());
        plane.setCollisionGroup(_this.collisionGroups[layerName]);
        plane.collides(_this.collisionGroups[layerName], _this.collisionInteractiveVsWorld, _this);
        plane.static = true;
        plane.setMaterial(_this.materials.world);
        plane.angle = wall.angle;

        physicsManager.addBody(plane);
        plane.reset(wall.position[0], wall.position[1]);

        _this.bounds[layerName][wall.name] = plane;
    });
}

window.onload = function() {
    new GameState(1280, 720, Phaser.AUTO, 'game');
}
