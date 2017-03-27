import React, { Component } from 'react';
import Media from 'react-media';
import { MOBILE } from './MediaQuery';
import SocialBar from './SocialBar';
import logo from './logo.svg';
import {SparkScroll, SparkProxy} from './app-spark';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    const titleOpacityIndex = 0;
    this.state = { titleOpacityIndex };

    this.scroller = this.scroller.bind(this);
  }

  scroller() {
    this.setState({ titleOpacityIndex: 1 });
  }

  render() {
    const { titleOpacityIndex } = this.state;

    const styleCover={
      backgroundImage: `url("https://yahoo-promotion.myguide.hk/tumblr/refine/_vol18/images/img-1.jpg")`,
      backgroundPosition: `50% 0px`
    }
    const styleBg1={
      backgroundImage: `url("https://initium-style.s3.amazonaws.com/StylishFeature/20161126/image1.jpg")`,
      backgroundPosition: `50% 0px`
    }
    const styleBg2={
      backgroundImage: `url("https://initium-style.s3.amazonaws.com/StylishFeature/20161126/image2.jpg")`,
      backgroundPosition: `50% 0px`
    }
    const styleBg3={
      backgroundImage: `url("https://initium-style.s3.amazonaws.com/StylishFeature/20161126/image3.jpg")`,
      backgroundPosition: `50% 0px`
    }
    const styleBg4={
      backgroundImage: `url("https://initium-style.s3.amazonaws.com/StylishFeature/20161126/image4.jpg")`,
      backgroundPosition: `50% 0px`
    }
    const titleOpacity={
      opacity: titleOpacityIndex
    }
    return (
      <div className="App">
        <SocialBar/>
        <SparkProxy.div className="pin-cont" proxyId="pin-cont">
        <section
          className="cover"
          id="home">
          <SparkScroll.div
            proxy="pin-cont"
            timeline={{
              'topTop+50': { opacity: 1},
              'centerTop': { opacity: 0}
            }}>
            <Media query={MOBILE}>
              {matches => (
                matches
                  ? <img className="home-video" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/mobile.jpg" />
                  : <video className="home-video" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/chanel_j12.mp4" poster="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/poster.jpg" autoPlay loop >
                    </video>
              )}
            </Media>
          </SparkScroll.div>
          <div className="container"> 
            <div className="content">
              <Media query={MOBILE}>
                {matches => (
                  matches
                    ? <div className="home-text">
                        <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/main_title.svg" alt="時間旅程" />
                      </div>
                    : <SparkScroll.div
                          className="home-text"
                          style={titleOpacity}
                          proxy="pin-cont"
                          timeline={{
                            'topTop': { opacity: 0},
                            'topTop+1': { opacity: 1 }
                          }} >
                        <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/main_title.svg" alt="時間旅程" />
                      </SparkScroll.div>
                )}
              </Media>
            </div>
          </div>
        </section>
        </SparkProxy.div>
        <Media query={MOBILE}>
            {matches => (
              matches
                ? <SparkScroll.div
                    className="decoration"
                    proxy="pin-cont"
                    timeline={{
                      'topTop': { transform: "translateY(-50%) translateX(-50%) rotateZ(0deg)"},
                      'bottomTop': { transform: "translateY(-50%) translateX(-50%) rotateZ(180deg)"}
                    }} >
                    <img className="clock" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/clock.svg" alt="clock" />
                  </SparkScroll.div>
                : <SparkScroll.div
                    className="decoration"
                    proxy="pin-cont"
                    timeline={{
                      'topTop': { transform: "translateY(50%) translateX(-50%) rotateZ(0deg)"},
                      'bottomTop': { transform: "translateY(50%) translateX(-50%) rotateZ(180deg)"}
                    }} >
                    <img className="clock" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/clock.svg" alt="clock" />
                  </SparkScroll.div>
            )}
          </Media>

        <section className="page no-margin" id="home">
          <Media query={MOBILE}>
            {matches => (
              matches
                ? <video className="home-video-mobile" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/chanel_j12.mp4" poster="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/poster.jpg" controls >
                  </video>
                : <div>
                  </div>
            )}
          </Media>
        </section>

        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text">
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/title1.svg" alt="快慢之間" />
                </div>
                <div className="text white">
                <p>時間是我們定義生活質素的重要元素。當我們覺得時間過得很快，大多數代表我們過得開心，相反，當我們覺得時間過得很慢，便準和自己身處的場所和在做的事情有點沉悶有關。</p>
                <p>這樣比較，卻並不是說快肯定好過慢，有時時間過得太快的話，又會有種走馬看花甚麼印象都留不下的感嘆。正如現在大家每天都會定時定候上社交媒體刷屏，拇指不斷在屏幕上舞動，希望儘快看完更新了的訊息，不然和朋友同事間便沒有話題，但到底看過了甚麼訊息，那些訊息具體在講甚麼的，卻可能不甚了了。因為我們知道，萬一大家有興趣看看發生甚麼事情時，總會有條link可以share出來的吧！？</p>
                </div> 
              </div> 
            </div>
          </div>
        </section>
        <section className="cover" id="bg1" style={styleBg1} >
        </section>
        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text">
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/title2.svg" alt="真正感受" />
                </div>
                <div className="text white">
                <p>如此，便讓我更珍惜一些可以真正感受到時間在流轉的事情。放一張黑膠唱片，看着音樂慢慢轉揚出來。看一次輪盤轉動轉出下一剎的未來。雙手按着陶泥讓陶窯轉成心中所想。踏着單車享受時間飛往身後的快感。戴上拳繩練習一下揮拳之間的速度。倒一杯威士忌，看酒波流動間泛起的香氣。耳聽喇叭震盪着時間的節奏。感受結他和鉉震動出和諧。嘗試明白陀螺自轉的時間維度。感應彈珠彈跳彈指之間。</p>
                <p>是的，生活裏實在有太多瞬間，值得我們好好把握和珍惜，細意感受和品嚐。如果你有這樣的用心和主動的話，便會發現，時間不光是定義生活質素的元素，它更可以是生活魅力的一種源泉。</p>
                </div> 
              </div> 
            </div>
          </div>
        </section>
        <section className="cover" id="bg2" style={styleBg2} >
        </section>
        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text">
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/title3.svg" alt="時尚製錶" />
                </div>
                <div className="text white">
                <p>誠如CHANEL於踏入21世紀的瞬間推出了空前全新的J12時計系列，透過現代感的造型設計，大膽注入原本便象徵品牌時尚品味基因的全黑和全白色調，同時起用高科技陶瓷的堅硬物料，並作了搭載不同高級複雜機芯的準備，早已注定成為超越時空的時計，在十六年後的今天，除了已經成為最經典的時尚腕錶表表者，更因為其不斷探索製錶難度的野心，而成為最時尚的複雜腕錶王者。</p>
                <p>像J12本身，便是一種散發着時間魅力的object of desire，它在過去十六年來一直只憑藉mono-product策略，堅持糅合高科技陶瓷及摩登設計，卻已孕育出多款既時尚又複雜的時計演繹。如果你以為所謂時尚，便得要千變萬化，請看看J12，雖然款式設計是萬變不離其宗，但出道以來一直是那麼fashionable，又因其在瑞士設廠製作的認真程度，而為喜愛複雜製錶的錶迷接納。</p>
                </div> 
              </div> 
            </div>
          </div>
        </section>
        <section className="cover" id="bg3" style={styleBg3} >
        </section>
        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text">
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20161126/title4.svg" alt="活出自我" />
                </div>
                <div className="text white">
                  <p>而我覺得J12其中一個很特別的氣質，便是它經典的高科技陶瓷錶款及錶帶演繹，讓光線在光面和啞面打磨之間掩映，叫渾身散發着某種牽引別人的動能，叫大家隨時隨地更積極主動地投入生活，尋找時間裏所蘊藏的魅力，是快是慢是緩是速都不打緊，重要的是，我們不隨波逐流，我們能活出屬於自己的時間、空間和人間。</p>
                  <p>網址：<a href="http://bit.ly/2gccjrf">http://bit.ly/2gccjrf</a></p>
                </div> 
              </div> 
            </div>
          </div>
        </section>
        <section className="cover" id="bg4" style={styleBg4} >
        </section>
        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text white">
                  <ul className="credit">
                    <li><span>撰文：</span>黃源順</li>
                    <li><span>創意顧問：</span>LI HOI WAI</li>
                    <li><span>視頻導演：</span>PAZU CHAN</li>
                    <li><span>網頁製作：</span>金秋楓</li>
                  </ul>
                </div> 
              </div> 
            </div>
          </div>
        </section>
      </div>
    );
  }
}
