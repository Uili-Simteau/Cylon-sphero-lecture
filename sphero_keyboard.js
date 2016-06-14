/**
 * Allows a keyboard input (e.g. MaKey MaKey) to control a Sphero in 4 directions.
 *
 * When a command key is pressed the Sphero will roll in that direction for 0.5 seconds
 * after which it will either stop or roll into the next (or same) command direction if
 * key has been pressed.
 *
 * Each direction is also signaled by a different color for the Sphero.
 *
 * This robot was created during a hackspace where the keyboard was made of Play-Doh (using
 * a MaKey MaKey) to control the Sphero :) but any keyboard input can be used.
 */
var Cylon = require('cylon'),

    // Convenience constants for direction degrees
    direction = {
        FORWARD: 0,
        RIGHT: 90,
        LEFT: 270,
        BACKWARD: 180
    };

// Doh-sphero-bot
Cylon.robot({

    connections: {
        keyboard: { adaptor: 'keyboard' },
        // @note Ensure the correct Sphero port is specified for your machine
        sphero: { adaptor: 'sphero', port: '/dev/tty.Sphero-YRG-AMP-SPP' }
    },

    devices: {
        keyboard: { driver: 'keyboard', connection: 'keyboard' },
        sphero: { driver: 'sphero', connection: 'sphero' }
    },

    work: function (my) {
        // Heading direction
        var heading = direction.FORWARD,
            command = false;

        console.log('starting up');

        // Calibration is necessary for steering.
        my.sphero.startCalibration();
        after((5).seconds(), function () {
            my.sphero.finishCalibration();
            // Try to make back-light as easy to see as possible (indicates direction.BACKWARDS)
            my.sphero.setBackLED(255);
        });

        every((0.5).second(), function() {
            // Full speed because why not :)
            var speed = 100;

            if (!command) {
                console.log('no command');
                my.sphero.Color('white');
                speed = 0;
            }

            console.log('heading: ', heading);
            command = false;
            my.sphero.roll(speed, heading);
        });

        my.keyboard.on('up', function(key) {
            console.log('up pressed');
            my.sphero.setColor('yellow');
            heading = direction.FORWARD;
            command = true;
        });
        my.keyboard.on('down', function(key) {
            console.log('down pressed');
            my.sphero.setColor('blue');
            heading = direction.BACKWARD;
            command = true;
        });
        my.keyboard.on('left', function(key) {
            console.log('left pressed');
            my.sphero.setColor('green');
            heading = direction.LEFT;
            command = true;
        });
        my.keyboard.on('right', function(key) {
            console.log('right pressed');
            my.sphero.setColor('red');
            heading = direction.RIGHT;
            command = true;
        });
    }

}).start();