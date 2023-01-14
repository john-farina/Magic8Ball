<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<div align="center">
<h1 align="center">Magic-8-Ball</h1>
  <p align="center">
   This is an online recreation of a Magic 8 Ball. Made in Vanilla JS
    <br />
    <a href="https://linktowebsite.com">View Live Demo</a>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
      <li><a href="#built-with">Built With</a></li>
      </ul>
        <li><a href="#javascript">JavaScript</a></li>
        <ul>
        <li><a href="#fortune-card">Phrases</a></li>
        <li><a href="#creation">Animation</a></li>
        </ul>
      <li><a href="#design">Design</a></li>
      <ul>
      <li><a href="#zoltar">Magic 8 Ball</a></li>
      <ul>
      <li><a href="#zoltar-text">Outer Ball</a></li>
      <li><a href="#lamps">Inner Ball</a></li>
    <li><a>Triangle</a></li>
      </ul>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>




<!-- ABOUT THE PROJECT -->
## About The Project

For this project i am using Vanilla JS in an attempt to fully master it, This project is of course based off of a Magic 8 Ball a toy people use to ask yes or no questions. Its a simple enough project but designed more to feel like a actual Magic 8 Ball

<img src="./src/img/ZoltarFirst.gif" alt="a gif of Zoltar with hand moving and lamps flickering" />

Im using javascript to add animations, and animation logic. With a long array of phrases so it can give random responses for each question.

<img src="./src/img/ZoltarSecond.gif" alt="Zoltars fortune sliding down the screen and closing it" />

<br/>

## Built With
 - Javascript
 - CSS
<br/>
<br/>


## JavaScript

###  Phrases
all of the phrases where stored in array, from a variety of sources i found online. i then find a random number from the length of the saved phrases array and return it into the triangle
### Animation
the animations are triggered when the user presses the button. when first opened it flips the magic 8 ball so you can ask a fortune. when facing you the ball shakes and the triangle goes back and comes out with a new yes or no answer. All logic is controlled through JS
<br/>
<br/>

## Design

### Magic 8 Ball
*For all of the design i am using HTML and designing it with CSS*
####  **Outer Ball**
For the outer ball i placed a white circle inside of another larger black circle with a black 8 inside of the smaller, the classic 8 ball look
<!-- image of outside -->

#### **Inner Ball**
For the Inner Ball i created the size smaller circle as the front but made it black trying to resemble like liquid filling inside of the 8 Ball

#### **Inner Phrase Triangle**
Trying to make the same look of a magic 8 ball i used a slight gradient on the Traingle which is a div that i shaped with CSS. Each Phrase goes into the triangle as the triangle fades in and out.
<!-- image of traingle -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<br/>

## Usage

Open Zoltar when you're facing troubles, open Zoltar when you're curious. Get fortunes *(without the quarters!)*
<br/>
<br/>

<!-- CONTACT -->
## Contact

**John Farina** - johnfarina8@gmail.com

Project Link: [github.com/john-farina/Magic8Ball](https://github.com/john-farina/Magic8Ball)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




