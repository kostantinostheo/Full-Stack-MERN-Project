import React from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import BreadPath from '../BreadPath';

export default function ApplicationInfo() {
  return (
      <div>
        <BreadPath/>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
                <p>This is a text 1</p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <p>This is a text 2</p>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                <p>This is a text 3</p>
            </Tab>
        </Tabs>
    </div>

  );
}