# Kiosk

## How to use

1 - Include jquery and kiosk.js in index.html
2 - Add whatever functionality or markup you want.
3 - Push your changes to this repo - the Raspberry Pi host will fetch your changes.

## Run locally

    python -m SimplHTTPServer

or whatever local server you like

The slideshow is a standard carousel, drag it with a mouse.

## Example markup

As long as your page implements the following basic structure, the kiosk should work

    <html>
        <body>
            <script src="jquery-2.2.4.min.js"></script>
            <script src="kiosk.js"></script>
        </body>
    </html>
