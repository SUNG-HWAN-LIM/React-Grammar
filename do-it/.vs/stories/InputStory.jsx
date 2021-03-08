import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../03/Input';

storiesOf('input', module).add('기본 설정', () => <Input />);
