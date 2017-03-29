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
                <div className="text white">
                <p>藝術的語言以不同形式、姿勢、時間軸進行。當我們平常所用的語言不足以表達內心最深處的訴求，藝術可能是一個出路，所以這個故事，是私密的，是脆弱的；但同時，藝術家的訴求也可能是大家心中所渴望的，一個喘息的空間，一個被看見的機會。</p>
                <p>建築彷如永恆的代表，不容易被消滅；但就正因為它永遠都在，我們有否給它們被看見的機會？這次我們找來一位年輕芭蕾舞者，以她纖小的身軀，跟高牆般城市建築來一場對談。一位舞者，走到街上，想要尋找想看見的，也同時在尋求被看見。這是一場與慾望、與被遺忘、與高不可攀的對談。</p>
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
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/title2.svg" alt="敏感" />
                </div>
                <div className="text white">
                <p>她，走在人群裏面，你未必會知道她是誰；突然，她en pointe，她allonge，她arabesque，擺出一個專業的芭蕾舞者功架，世界彷彿就靜止了，大家的眼光都停留在她身上；但她的觸覺，卻只聚焦在面前的建築物上：它的形狀、它的線條、它的設計、它的縱橫交錯、它的物料⋯⋯「舞者的身體是很敏感的。」當普通人看到的可能只是一幅牆、一塊石屎地板，她看到的，卻是平地上的一點沙石、雨後未乾透的地板、空曠戶外的疾風⋯⋯這一切都不能讓她發揮最佳的舞者狀態。正如建築一樣，普通人看上去的直線，建築師設計師會告訴你這是與地面形成直角的直；弧形的線條可能三十度跟四十度已有很大的分別。有人說這是挑剔，對舞者對設計師來說這是專業；反之，我們每天在這個城市穿梭，直行直過，從沒留意頭頂上的招牌可能隨年月開始老化，或者圍欄下的一寸未被石屎覆蓋的泥土竟長出了一棵小雛菊，我們又是否可以對這個城市更敏感一些？</p> 
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
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/title3.svg" alt="發現" />
                </div>
                <div className="text white">
                <p>我們總覺得很了解自己的身體，它的喜好，它的限制，它的愛它的痛；同樣，我們也以為自己對身處的城市很熟悉，樓梯轉角，街上途人，一物一事。但其實我們的身體每天也在變：它會因為天氣的變化而變得脆弱、會因為昨晚的睡眠狀況而改變柔軟程度，昨天吃多了，今天又會胖一點⋯⋯身體狀況每天都不同，舞者跳舞每天也迎來不同的挑戰，這個動作明明昨天已很熟練，今天卻變成挑戰；上星期很難做到的平衡動作，今天卻因為心境看開了，也就身心都平衡到了。這城市也有很多琢面讓我們發掘，就算是每天都默默站在原地的建築，今天又會否比昨天多了一條小裂縫？這刻的影子又會否因為陽光的變化而傾斜多了三十五度？用眼去看、用手去摸、用心去感受，這些建築其實是城市點滴的紀錄，發現不只限於了解新的事物，有些時候，重新發現一直存在的，它也許可以給你另一套觀點與角度。</p>
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
                  <img className="" src="https://initium-style.s3.amazonaws.com/StylishFeature/20170331/title4.svg" alt="慾望" />
                </div>
                <div className="text white">
                  <p>在這世界裏，永恆是不存在的。老生常談，我們卻又拒絕去相信，反而希望它可成真。這個世界太大，建築物也好，人也好，面對自然、面對制度，我們的力量好像很微不足道。即使是在寬闊的戶外，因為天氣、因為建築物料等因素影響，舞者可以發揮的空間卻就只有兩張長櫈的範圍。偌大的城市，因為競爭，因為比賽，每個人都要在自己的小小舞台上，天天上演連場好戲，是因為我們都渴望被看見、被了解，尤其是專業的舞者，一收一放，隨着每個舞姿，訴說她的故事。她看見建築物的線條，即場編寫一幕幕的章節，到底要配合建築物的線條，還是跟它相反？兩者的線條交織，構成照片裏的畫面，畫面再形成故事⋯⋯敞大的影子下的身影彷彿很渺小，但沒有這渺小身影的注視，再大的建築也彷如無物。舞者的慾望是被看見，所以走到街上尋找故事，發掘靈感；建築物設計再優雅，若沒被真正的看見、珍惜，它就只是一幢冰冷的石屎而已。</p>
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
                    <li><span>Text：</span>Jaz Kong</li>
                    <li><span>Photography：</span>Crystal Lee</li>
                    <li><span>Dancer：</span>Lillian Liu</li>
                    <li><span>Developer：</span>Victoria Jin, Lulu Yang</li>
                    <li><span>Special thanks：</span>The Hong Kong Academy for Performing Arts (HKAPA)</li>
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
