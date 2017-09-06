// @flow

import React from 'react';
import { Image, List } from 'semantic-ui-react';
import type { MessageType } from '../FlowTypes/';

/*
NOTE: Properties available for each message:
- messageId* (integer): Primary key from database table. *Only a property of messages retrieved fmor the database, not on messages emitted via Socket.io
- avatarImage (string): Image size 24
- name (string): "Real name", e.g. 'Kurtis Houser'
- userName (string): "User name", e.g. 'thekurtishouser' or other
- text (string): The message
- timestamp (string): Formatted timestamp, e.g. '2017-08-01T22:20:43.643Z'
- rawTimestamp (string): Raw timestamp e.g. '1501626043.643661'
- channelName (string): Name of the the channel, e.g. 'dev'
- statusEmoji (string): As labeled internally by slack, e.g. ':slack:'
*/

export default function Message({ avatarImage, name, text, timestamp }: MessageType) {
  return (
    <List.Item className="listItem">
      <Image avatar src={avatarImage} />
      <List.Content>
        <List.Header>
          {name} {timestamp}
          <List.Description>{text}</List.Description>
        </List.Header>
      </List.Content>
    </List.Item>
  );
}
