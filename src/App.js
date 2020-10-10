import React, { setState } from 'react';
import './App.css';
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";

import Title from "./components/Title";
import Separator from "./components/Separator";
import Badge from "./components/Badge";
import Link from "./components/Link";
import Job from "./components/Job";
import FooterItem from "./components/FooterItem";
import School from "./components/School";
import VerticalLine from './components/VerticalLine';
import ContentBlock from './components/ContentBlock';
import data from "./data.json";


function App() {
  const [lang, setLang] = React.useState("en");

  const changeLang = (event) => {
    setLang(event.target.value);
  };

  return (
    <div className="App">
      <header className="Header">
        <div class="Green__block">
          <select onChange={changeLang}>
            <option value="en">English</option>
            <option value="lt">Lietuviškai</option>
          </select>
        </div>
        <div className="Header__container">
          <Title level="1" className="Name">{data[lang].header.name}</Title>
          <Title level="2" className="Job">Web developer</Title>
        </div>
      </header>
      <main>
        <div className="Row__1">
          <ContentBlock
            className="Item1"
            title={data[lang].links.title}
          >
            <Separator />
            <div>
              <Link img={img1} link="https://linkedin.com/in/liucija-jakubonyte-301719191">LINKEDIN/Liucija</Link>
              <Link img={img3} link="https://github.com/liuciij">GITHUB/liuciij</Link>
              <Link img={img5} link="https://www.facebook.com/liucija.jakubonyte">FB/Liucija Jakubonyte</Link>
              {/* <Link img={img4}>BLOG/blog-name</Link> */}
            </div>
          </ContentBlock>
          <ContentBlock
            className="Item2"
            title={data[lang].about.title}
          >
            <Separator style="564" />
            <p>{data[lang].about.content}</p>
          </ContentBlock>
        </div>

        <div className="Row__2">
          <ContentBlock
            className="Item3 Bold"
            title={data[lang].education.title}
          >
            <Separator />
            <School name={data[lang].education.schoolName} year="2018" degree="High school diploma"></School>
            <hr className="Short__line"></hr>
            <School name="VILNIUS CODEACADEMY SCHOOL" year="01/2020 - 08/2020" degree="Certificate in front-end"></School>
          </ContentBlock>
          <ContentBlock className="Item4" title={data[lang].personal.title}>
            <Separator />
            {data[lang].personal.skills.map(skill => {
              return <Badge className={skill.level}>{skill.name}</Badge>
            })}
          </ContentBlock>
          <ContentBlock className="Item5" title={data[lang].technical.title}>
            <Separator />
            <Badge className="advanced">HTML</Badge>
            <Badge className="advanced">CSS/SCSS</Badge>
            <Badge className="intermediate">JAVASCRIPT</Badge>
            <Badge className="intermediate">REACT.JS</Badge>
            <Badge className="beginner">NODE.JS</Badge>
          </ContentBlock>
        </div>

        <ContentBlock className="Row__3" title={data[lang].experience.title}>
          <Separator style="919" />
          <div className="Items__flex">
            <Job
              position={data[lang].experience.jobs.first.title}
              company="O'Neill's"
              year="01/2019-04/2019"
              about={data[lang].experience.jobs.first.content}>
              {data[lang].experience.jobs.first.dots.map(dot => <React.Fragment > {dot} < br /> </React.Fragment >)}
            </Job>
            <VerticalLine />
            <Job
              position={data[lang].experience.jobs.second.title}
              company="Naujadvario žirgai"
              year="06/2019 - 09/2019"
              about={data[lang].experience.jobs.second.content}>
              {data[lang].experience.jobs.second.dots.map(dot => <React.Fragment > {dot} < br /> </React.Fragment >)}
            </Job>
            <VerticalLine />
            <Job
              position={data[lang].experience.jobs.third.title}
              company="Muresta"
              year="09/2019 - 11/2019"
              about={data[lang].experience.jobs.third.content}>
              {data[lang].experience.jobs.third.dots.map(dot => <React.Fragment > {dot} < br /> </React.Fragment >)}
            </Job>
          </div>
        </ContentBlock>

        <hr className="Hr" />

        <footer>
          <FooterItem title={data[lang].footer.address.title}>
            <p>45A Bronsart road, SW6 6AJ</p>
            <p>{data[lang].footer.address.city}</p>
          </FooterItem>
          <FooterItem title={data[lang].footer.contact.title}>
            <p>{data[lang].footer.contact.number}</p>
            <p>liuciij@gmail.com</p>
          </FooterItem>
          <FooterItem title={data[lang].footer.social.title}>
            <p><a className="No__style" href="https://linkedin.com/in/liucija-jakubonyte-301719191" target="_blank">Linkedin/Liucija</a></p>
            <p><a className="No__style" href="https://github.com/liuciij" target="_blank">Github/liuciij</a></p>
          </FooterItem>
        </footer>

      </main >
    </div >
  );
}


export default App;
