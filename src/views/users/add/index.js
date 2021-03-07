import React, { useState } from 'react';

import {
  CCard,
  CCardBody,
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCardFooter,
  CRow,
  CCol,
  CButton,
} from '@coreui/react';

import Registry from './tabs/registry';
import Profile from './tabs/profile';

function Add() {
  const [user, setUser] = useState(null);

  function handleChangeInput(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <CCard>
      <CCardBody>

      <CTabs activeTab="user-registry">
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink data-tab="user-registry">
              User Registry
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink data-tab="profile">
              Profile
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane data-tab="user-registry">
            <Registry setUser={handleChangeInput} />
          </CTabPane>
          <CTabPane data-tab="profile">
            <Profile user={user} />
          </CTabPane>
        </CTabContent>
      </CTabs>

      </CCardBody>
      <CCardFooter>
        <CRow className="text-right">
          <CCol>
            <CButton color="light m-2">
              Cancel
            </CButton>
            <CButton color="success">
              Save
            </CButton>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
  );
}

export default Add;
