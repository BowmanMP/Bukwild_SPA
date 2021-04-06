import "./App.css";
import { Header } from "./Components/Header/Header";
import { PageUI } from "./Components/PageUI/PageUI";
import { useEffect, useState } from "react";
import { PAGE_TITLES } from "./constants";
import Flip from 'react-reveal/Flip';

const getHeadline = (block) => {
  if (block.headline) {
    return block.headline;
  } else if (block.Headline) {
    return block.Headline;
  } else {
    return "";
  }
};

function App() {
  const [content, setContent] = useState({});

  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    fetch(
      "https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json"
    ).then((response) => {
      response.json().then((json) => {
        setContent(json);
      });
    });
  }, []);

  const getBackgroundClassName = () => {
    if (!content.pages) {
      return "one";
    } else if (content.pages[activePage].title === PAGE_TITLES.industries) {
      return "one";
    } else if (content.pages[activePage].title === PAGE_TITLES.services) {
      return "two"; 
    } else {
      return "three";
    }
  };

  return (
    <div className={`background ${getBackgroundClassName()}`}>
      <Flip>
        <div className="App"> 
          <Header activePage={activePage} setActivePage={setActivePage} />
          <PageUI
            headline={
              content.pages
                ? getHeadline(content.pages[activePage].blocks[0])
                : ""
            }
            subhead={
              content.pages ? content.pages[activePage].blocks[0].subhead : ""
            }
            cta={content.pages ? content.pages[activePage].blocks[0].cta : ""}
          /> 
        </div> 
      </Flip>   
    </div>
  );
}

export default App;
