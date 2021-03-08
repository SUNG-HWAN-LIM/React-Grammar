import React, { Component } from '@storybook/react'

function loadStories() {
    require('../src/stories/InputStory');
    //스토리 파일을 이곳에 추가 할 수 있다.
}

configure(loadStories, module);

