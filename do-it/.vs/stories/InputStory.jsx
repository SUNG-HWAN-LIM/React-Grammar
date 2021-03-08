import React, { Component } from 'react';
import { storesOf } from '@storybook/react';
import Input from '../03/Input';

storesOf('input', module).add('기본 설정', () => <Input />);
