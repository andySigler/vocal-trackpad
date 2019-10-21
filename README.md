# vocal-trackpad

Max/MSP patch for creating synthesized vocal sounds with an Apple Magic Trackpad, Magic Trackpad 2, or Macbook trackpad.

The low-latency and multi-touch capabilities of Apple's trackpads make for controlling the resonant frequencies of a voice box lots of fun.

Inspired by (my original work)[http://www.andysigler.com/projects/noser/] while a graduate student, where I made a new interface for musical expression (NIME) using a trackpad and a physical interface.

I'll be using the software in this repo to train my hands how to puppet a voice.

## Installation

You must have an Apple Magic Trackpad, Magic Trackpad 2, or a Macbook with a native trackpad.

Download the repo, and have [Max](https://cycling74.com/downloads) installed.

Before opening the Max patch, all the files inside the `vocal-trackpad/max-library` folder must be moved to your Max installation's `User Library` folder.

The `User Library` folder can be found by going to `Options -> File Preferences...`

Copy/Paste all the files to that directory, then you can open the Max patch without any errors.

> NOTE: the patch uses the `fingerpinger` external to connect by default to the trackpad `2` (specifying an external Magic Trackpad 1 or 2). If you are using a Macbook's native trackpad, this must be changed to `1`.
