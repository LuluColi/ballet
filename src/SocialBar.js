/**
 * A compoent with an array of social sharing buttons
 */
import './App.css';

import React, { Component } from 'react';
import app_meta from './meta_data'

let facebookIcon = require('./images/share_facebook.svg')
let twitterIcon = require('./images/share_twitter.svg')

/**
 * Return the link to share a URL in a mansion specified by config
 * @param {object} config - an object containing the configurations of the sharing
 * @returns {string}
 */

function getShareUrl (config) {
  var platform = config.platform
  var facebookAppId = config.facebookAppId
  var targetUrl = config.targetUrl
  var title = config.title
  var description = config.description
  var imageUrl = config.imageUrl

  targetUrl = targetUrl ? encodeURIComponent(targetUrl) : ''
  imageUrl = imageUrl ? encodeURIComponent(imageUrl) : ''

  var shareUrl

  if (platform === 'facebook') {
    shareUrl = 'https://www.facebook.com/dialog/feed?' +
      'app_id=' + facebookAppId +
      '&link=' + targetUrl +
      '&redirect_uri=' + targetUrl

    if (imageUrl) {
      shareUrl += '&picture=' + imageUrl
    }

    if (title) {
      shareUrl += '&name=' + title
    }

    if (description) {
      shareUrl += '&description=' + description
    }

    return shareUrl
  } else if (platform === 'twitter') {
    return 'https://twitter.com/share?url=' + targetUrl + '&text=' + title
  }
}

let SocialBar = React.createClass({

  propTypes: {
    resetHandler: React.PropTypes.func
  },

  handleShareButtonClick: function (event) {
    var chosenPlatform = event.target.dataset.platform
    var shareTitle, shareDescription

    if (chosenPlatform === 'facebook') {
      shareTitle = app_meta.appTitle
      shareDescription = app_meta.facebookShareDescription
    } else if (chosenPlatform === 'twitter') {
      shareTitle = app_meta.twitterShareTitle
    }

    var shareUrl = getShareUrl({
      facebookAppId: app_meta.facebookAppId,
      title: shareTitle,
      description: shareDescription,
      platform: chosenPlatform,
      targetUrl: window.location.href
    })
    window.open(shareUrl)
  },

  render: function () {
    return (
      <div id='socialBar'>
        <button data-platform='facebook'
                onClick={this.handleShareButtonClick}>
          <img src={facebookIcon}
                 data-platform='facebook' />
        </button>
        <button data-platform='twitter'
                onClick={this.handleShareButtonClick}>
          <img src={twitterIcon}
                 data-platform='twitter' />
        </button>
      </div>
    )
  }

})

export default SocialBar
