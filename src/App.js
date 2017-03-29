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
      backgroundImage: `url("https://initium-style.s3.amazonaws.com/StylishFeature/20170331/image1.jpg")`,
      backgroundPosition: `50% 0px`
    }
    const styleBg2={
      backgroundImage: `url("https://initium-style.s3.amazonaws.com/StylishFeature/20170331/image2.jpg")`,
      backgroundPosition: `50% 0px`
    }
    const styleBg3={
      backgroundImage: `url("https://initium-style.s3.amazonaws.com/StylishFeature/20170331/image3.jpg")`,
      backgroundPosition: `50% 0px`
    }
    const styleBg4={
      backgroundImage: `url("https://initium-style.s3.amazonaws.com/StylishFeature/20170331/image4.jpg")`,
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
                  ? <img className="home-video" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobile.jpg" />
                  : <img className="home-video" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/cover.jpg" />
              )}
            </Media>
          </SparkScroll.div>
          <div className="pcshare">
            <a id="fbshare" href="https://www.facebook.com/sharer.php?s=100&u=https://initium.style/s/20170331-ballet/" onclick="javascript:window.open(this.href,'','menubar=no,toolbar=no,resizable=yes,scrollbars=no,height=368,width=600'); return false;" title="分享到 facebook" class="facebook">
            <img className="desktop" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170324/share_facebook.svg"/></a>
          </div>
          <div className="container"> 
            <div className="content">
              <Media query={MOBILE}>
                {matches => (
                  matches
                    ? <div className="home-text">
                        <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/main_title.svg" alt="藝術的語言" />
                      </div>
                    : <SparkScroll.div
                          className="home-text"
                          style={titleOpacity}
                          proxy="pin-cont"
                          timeline={{
                            'topTop': { opacity: 0},
                            'topTop+1': { opacity: 1 }
                          }} >
                        <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/main_title.svg" alt="藝術的語言" />
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
                      'topTop': { transform: "translateY(10%) translateX(-300%) scale(1,1)", opacity: 1},
                      'bottomTop': { transform: "translateY(10%) translateX(200%) scale(2,2)", opacity: 0}
                    }} >
                    <img className="clock" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/dancer.png" alt="dancer" />
                  </SparkScroll.div>
                : <SparkScroll.div
                    className="decoration"
                    proxy="pin-cont"
                    timeline={{
                      'topTop': { transform: "translateY(50%) translateX(-600%) scale(1,1)", opacity: 1},
                      'bottomTop': { transform: "translateY(50%) translateX(600%) scale(2,2)", opacity: 0}
                    }} >
                    <img className="clock" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/dancer.png" alt="dancer" />
                  </SparkScroll.div>
            )}
          </Media>
        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text">
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/title1.svg" alt="藝術的語言" />
                </div>
                <div className="text white">
                <p>藝術的多元好比不同國家的語言，以不同形式、姿勢、時間軸進行。當我們平常所用的語言不足以表達內心最深處的訴求，藝術可能是一個出路；這個故事，是私密的，是脆弱的；但同時，藝術家的訴求也可能是大家心中所渴望的，一個苟且喘息的空間，一個被看見的機會。</p>
                </div> 
              </div> 
            </div>
          </div>
        </section>
        <Media query={MOBILE}>
            {matches => (
              matches
                ? <div className="cover_mobile">
                    <img className="mobile_bg" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobilebg1.jpg" alt="藝術的語言" />
                    <img className="mobile_bg" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobilebg2.jpg" alt="藝術的語言" />
                  </div>
                : <section className="cover" id="bg1" style={styleBg1} >
                  </section>
          )}
        </Media>
        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text">
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/title2.svg" alt="真正感受" />
                </div>
                <div className="text white">
                <p>建築彷如永恆的代表，不容易被消滅；但就正因為它永遠都在，我們有否給它們被看見的機會？這次就找來一位年輕芭蕾舞者，來一場與城市建築的對談。一位舞者，走到街上，想要尋找想看見的，也同時在尋求被看見，是與慾望、與被遺忘、與高不可攀的一場對談。</p> 
                </div> 
              </div> 
            </div>
          </div>
        </section>
        <Media query={MOBILE}>
            {matches => (
              matches
                ? <div className="cover_mobile">
                    <img className="mobile_bg" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobilebg3.jpg" alt="藝術的語言" />
                    <img className="mobile_bg" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobilebg4.jpg" alt="藝術的語言" />
                  </div>
                : <section className="cover" id="bg2" style={styleBg2} >
                  </section>
          )}
        </Media>
        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text">
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/title3.svg" alt="時尚製錶" />
                </div>
                <div className="text white">
                <p>誠如CHANEL於踏入21世紀的瞬間推出了空前全新的J12時計系列，透過現代感的造型設計，大膽注入原本便象徵品牌時尚品味基因的全黑和全白色調，同時起用高科技陶瓷的堅硬物料，並作了搭載不同高級複雜機芯的準備，早已注定成為超越時空的時計，在十六年後的今天，除了已經成為最經典的時尚腕錶表表者，更因為其不斷探索製錶難度的野心，而成為最時尚的複雜腕錶王者。</p>
                <p>像J12本身，便是一種散發着時間魅力的object of desire，它在過去十六年來一直只憑藉mono-product策略，堅持糅合高科技陶瓷及摩登設計，卻已孕育出多款既時尚又複雜的時計演繹。如果你以為所謂時尚，便得要千變萬化，請看看J12，雖然款式設計是萬變不離其宗，但出道以來一直是那麼fashionable，又因其在瑞士設廠製作的認真程度，而為喜愛複雜製錶的錶迷接納。</p>
                </div> 
              </div> 
            </div>
          </div>
        </section>
        <Media query={MOBILE}>
            {matches => (
              matches
                ? <div className="cover_mobile">
                    <img className="mobile_bg" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobilebg5.jpg" alt="藝術的語言" />
                    <img className="mobile_bg" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobilebg6.jpg" alt="藝術的語言" />
                  </div>
                : <section className="cover" id="bg3" style={styleBg3} >
                  </section>
          )}
        </Media>
        <section className="page dark">
          <div className="container">
            <div className="content">
              <div className="container relative">
                <div className="text">
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/title4.svg" alt="活出自我" />
                </div>
                <div className="text white">
                  <p>而我覺得J12其中一個很特別的氣質，便是它經典的高科技陶瓷錶款及錶帶演繹，讓光線在光面和啞面打磨之間掩映，叫渾身散發着某種牽引別人的動能，叫大家隨時隨地更積極主動地投入生活，尋找時間裏所蘊藏的魅力，是快是慢是緩是速都不打緊，重要的是，我們不隨波逐流，我們能活出屬於自己的時間、空間和人間。</p>
                  <p>網址：<a href="http://bit.ly/2gccjrf">http://bit.ly/2gccjrf</a></p>
                </div> 
              </div> 
            </div>
          </div>
        </section>
        <Media query={MOBILE}>
            {matches => (
              matches
                ? <div className="cover_mobile">
                    <img className="mobile_bg" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobilebg7.jpg" alt="藝術的語言" />
                    <img className="mobile_bg" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/mobilebg8.jpg" alt="藝術的語言" />
                  </div>
                : <section className="cover" id="bg4" style={styleBg4} >
                  </section>
          )}
        </Media>
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
