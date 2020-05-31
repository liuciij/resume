import React from 'react';
import './App.css';
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";

import Title from "./components/Title";
import Separator from "./components/Separator";
import Badge from "./components/Badge";
import Link from "./components/Link";
import Job from "./components/Job";
import FooterItem from "./components/FooterItem";
import School from "./components/School";
import Decoration from "./components/Decoration";
import VerticalLine from './components/VerticalLine';
import ContentBlock from './components/ContentBlock';



function App() {
  return (
    <div className="App">
      <header className="Header">
        <Decoration />
        <div className="Header__container">
          <Title level="1" className="Name">LIUCIJA JAKUBONYTĖ</Title>
          <Title level="2" className="Job">PROGRAMMER</Title>
        </div>
      </header>
      <main>
        <div className="Row__1">
          <ContentBlock
            className="Item1"
            title="LINKS"
          >
            <Separator />
            <div>
              <Link img={img1}>LINKEDIN/username</Link>
              <Link img={img2}>TWITTER/@user-handle</Link>
              <Link img={img3} link="https://github.com/liuciij">GITHUB/liuciij</Link>
              <Link img={img4}>BLOG/blog-name</Link>
            </div>
          </ContentBlock>
          <ContentBlock
            className="Item2"
            title="ABOUT ME"
          >
            <Separator style="564" />
            <p>Why programming you ask? Well, at a time when I was trying to figure out what I want from life I got a chance to meet some incredible people who were doing programming for their jobs. One of them encouraged me to try it out and learn by myself. It never entered my mind before that I could be a programmer so I have tryed - after some research I began learning front-end path on Codeacademy website. Why front-end is because I loved design and it seemed interesting. Soon this activity became almost every evening routine because I had a vision now! The time went by and later on I have undertood that it is not enough, that I need more information. After a pauze and coming back to my country (I was on my gap year at the time living abroad) I became a student of Codeacademy intensive front-end courses held Vilnius. As I am writing this resume I am still a student here until the end of july and my goal is to get a job in this area and become really skilled. From autumn I will be a student in London where I hope to get my first and long wished / worked for front-end developer's job! I am really motivated and want to find a supportive enviroment where I could grow fast anad grow strong!</p>
          </ContentBlock>
        </div>

        <div className="Row__2">
          <ContentBlock
            className="Item3 Bold"
            title="EDUCATION"
          >
            <Separator />
            <School name="KLAIPĖDOS VYDŪNO GIMNAZIJA" year="2018" degree="High school diploma"></School>
            <hr className="Short__line"></hr>
            <School name="SCHOOL NAME" year="2009-2013" degree="Degree"></School>
          </ContentBlock>
          <ContentBlock className="Item4" title="PERSONAL SKILS">
            <Separator />
            <Badge color="Blue">TEAMWORK</Badge>
            <Badge color="Yellow">COMMUNICATION</Badge>
            <Badge color="Red">ORGANISATION</Badge>
          </ContentBlock>
          <ContentBlock className="Item5" title="TECHNICAL SKILLS">
            <Separator />
            <Badge color="Blue">HTML</Badge>
            <Badge color="Blue">CSS/SCSS</Badge>
            <Badge color="Yellow">JAVASCRIPT</Badge>
            <Badge color="Yellow">REACT.JS</Badge>
          </ContentBlock>
        </div>

        <ContentBlock className="Row__3" title="WORK EXPERIENCE">
          <Separator style="919" />
          <div className="Items__flex">
            <Job
              position="Chef"
              company="O'Neill's"
              year="01/2019-04/2019"
              about="At one time of my gap year I was working in the centre of London in a well-known irish pub. My job was in the kitchen with other colleagues and we were taking care of all the food on a menu. Pizzas, nachos, burgers, deserts, etc. It was really lovely days in my life however I have understood that kitchen work is not something that I want to do in my life.">
              • I have learned a lot about food;<br />
              • I learned to colaborate with my fellows colleagues as we were working at least 2 of us at the same time
            </Job>

            <VerticalLine />
            <Job
              position="Horse keeper, instructor"
              company="Naujadvario žirgai"
              year="06/2019 - 09/2019"
              about="I was working for summer in equestrian center in my country - Lithuania. Apart from full daily care of all the horses my responsibilities were providing services - lessons for students as well as tourists rides in the nature. I was also one of summer riding camp instructors which was held 4 times during the summertime. I was working long hours and starting pretty early to do everything on time">
              • I developed great responsibility habits as so many things were depending on me. <br />
              • I maintained great awareness of safety for others and for myself.
            </Job>
            <VerticalLine />
            <Job
              position="Website administrator"
              company="Muresta"
              year="09/2019 - 11/2019"
              about="I was working with a company's website which specializes on very large goods (baths, taps, showers, decorations, shelves and many more) doing all these small things from research, translating, creating texts to renewing price lists, putting new goods to website, etc. Also I had a chance for my creativity to shine when writing an article for the media on specific topic when a hired company for that job was not able to do it appropriately.">
              • I have learned to cooraborate with people more as my job required a lot of specific knowledge<br />
              • I have learned about websites, research and developed some terminology which normal people do not use
            </Job>
          </div>
        </ContentBlock>

        <hr className="Hr" />

        <footer>
          <FooterItem title="ADRESS">
            <p>Gerosios vilties g. 23-407A</p>
            <p>Vilnius, Lithuania</p>
          </FooterItem>
          <FooterItem title="CONTACT">
            <p>+37067050695</p>
            <p><a className="No__style" href="#">liuciij@gmail.com</a></p>
          </FooterItem>
          <FooterItem title="SOCIAL">
            <p><a className="No__style" href="#">Linkedin/username</a></p>
            <p><a className="No__style" href="#">Twitter/@user-handle</a></p>
          </FooterItem>
        </footer>

      </main >
    </div >
  );
}


export default App;
