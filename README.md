# Cylon-sphero-lecture
Lecture on cylon.js with Sphero platform.

The main point I want to communicate is that Cylon.js is a powerful enabler for us as coders of javascript to interact with hardware. The existential question of AI arrises in my mind about what happens when the Robots control themselves? (a later talk)

This campus lecture is a quick look at Cylon.js, and using the Sphero 2.0 robot/smart Toy/ game system platform to test it out on.

Cylon.js is a open-source framework for talking to robots, drones and the Internet of Things.

I came to this subject as a ‘maker’, I love to make things with my hands. Wood, metal and paper have been my materials of choice until EDA.

Now, as a coder, I make things with code. Digital lego blocks, manipulating data and the DOM.

Cylon.js offers the ability through coding to manipulate the real world.

It’s an npm module that’s easy to install:

npm module:
`https://www.npmjs.com/package/cylon`

cylon-sphero github:
`https://github.com/hybridgroup/cylon-sphero`

sphero website:
`http://www.sphero.com/`

Fork or clone down the github branch, set up a new branch.

first install cylon:
`npm install cylon`

then:
`npm install cylon-sphero`

There will be other plug-ins you may need to install for different examples, like cylon-keyboard, etc… but as and when you need them.
I also installed cylon-ble, a bluetooth low energy plug-in.

You’ll have to locate your Sphero port by using the command:
`ls /dev/tty.Sphero*`

the port will look something like:
`/dev/tty.Sphero-BBP-AMP-SPP`

Then you put that into the connections object to hook up the correct port:
`connections: {
  sphero: { adaptor: "sphero", port: "/dev/tty.Sphero-BBP-AMP-SPP" }
},`

After that, you should be good to go.

In the repo above, I stripped out a couple of examples, and prefixed them with `sphero_<example file>`. These are paired with the EDA Sphere 2.0.  You just run them after npm installing everything:
e.g.
`node sphero_colour`

The Docs are really good. It took me a while to orientate myself to find them. Cylon works on a lot of platforms: mini-computers like Raspberry Pi and arduino; drones and robots like Sphero and Ollie.

My best advice is to see what device/platform you’re going to use, and from there install the appropriate module on top of the core Cylon module. Then you can just hack the example code they give you.
