# AR Book Cover Project README

## Project Overview
This project explores the creation of an Augmented Reality (AR) experience using AR.js and Easy-AR. Initial efforts focused on utilizing AR.js to associate AR content with a custom image marker. Despite considerable effort, this approach encountered technical limitations. The project then transitioned to Easy-AR, which offered more robust image recognition and allowed for the development of a dynamic AR book cover experience.

## Timing
Although the product seems a bit unfinished, I spent around 30 hours total on this project. I've been having issues designing with Unity and my webcam, so I decided to look at alternative options. At first, I was working off of an AR.js framework I was previously working, but around 10 hours in, I discovered that it was not possible to detect actual images but only hiro markers. No matter what example I tried online, they didn't seem to work. Because of this, I had to change to a different framework, namely `Easy-AR`, which I was then able to build this project on.

## Technical Setup & Execution
- **Necessary Resources**: Make sure you have `node.js` installed on your computer.
- **Server Initialization**: Execute `node server.js` within the command line to boot up the local server.
- **Accessing the Experience**: Navigate to `localhost:3000` in a web browser. This should trigger your webcam to turn on.
- **Engaging with AR**: Grant webcam permissions to interact with the AR book cover. Hold the book cover image in front of the webcam to see the AR elements come to life.

## Code Limitations and Errors
- **One Scene at a Time**: I ran into a lot of issues where having multiple scenes cauased some issues with texts and planes. Because of these issues, I tested scenes individually, which explains the two videos.
- **Calibration Issues** - With my bad quality webcam, a lot of information is lost from the actual video to the script. Due to this, it's extremely hard to find the correct image. It can take up to a few minutes to focus correctly, even with a lower cutoff limit for detection.
- **Int8Array Conversion Error**: An intermittent error related to the `min.js` file may cause the AR scenes to render incorrectly. I wasn't sure how to fix this because it came from one of the script files I was using. However, re-running the server seems to fix this issue temporarily. Because of this issue, I have console open, in order to show if my code is running properly.

## Project Structure & Components
- The `index.html` file serves as the entry point for the AR scenes, leveraging additional assets stored within the project's directories.
- Models and images used in the AR scenes are located in their respective folders and are referenced within the HTML file to create a visually appealing AR experience.

## Image Targets
<table>
<tr>
<td><img src="public/target.jpg" width="125" height="200" alt="Front Cover"></td>
<td><img src="public/backcover.jpg" width="125" height="200" alt="Back Cover"></td>
</tr>
</table>

## Videos
[Watch the Front Cover Video](https://youtu.be/-qK--byJSI8)

[Watch the Back Cover Video](https://youtu.be/lycM9FwqO_s)


## Project Notes
- The AR scenes for the front and back covers of the book are managed separately to address some of the rendering challenges faced during development.
- There may be occasions where the AR content does not display correctly, which are typically resolved by refreshing the browser or restarting the server.


## Additional Resources
- More detailed documentation on AR.js and Easy-AR can be found on their respective official websites.
- I used a lot of models that others made. I found most of them at [this link](https://sketchfab.com/)
- For a deeper understanding of the code and AR interactions, refer to the inline comments within the `index.html` file.
