import React from 'react';

import { useParams } from 'react-router-dom';

import usersData from '../../../services/UsersData';
import ProfileData from '../../../services/ProfileData';
import StatusData from '../../../services/StatusData';

import {
  CCard,
  CCardBody,
  CCardFooter,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CButton,
} from '@coreui/react';

function Edit() {
  const { id } = useParams();
  const user = usersData.filter(user => String(user.id) === id)[0];

  return (
    <CCard>
      <CCardBody>
        <CRow>
          <CCol md={3}>
            <CFormGroup>
              <CLabel htmlFor="name">Name</CLabel>
              <CInput id="name" placeholder="Name" defaultValue={user.name} />
            </CFormGroup>
          </CCol>
          <CCol md={3}>
            <CFormGroup>
              <CLabel htmlFor="username">Username</CLabel>
              <CInput id="username" placeholder="Username" defaultValue={user.username} />
            </CFormGroup>
          </CCol>
          <CCol md={3}>
          <CFormGroup>
            <CLabel htmlFor="profile">Profile</CLabel>
            <CSelect id="profile" defaultValue={user.profile}>
              {ProfileData.map(profile => (
                <option
                  key={profile.id}
                  value={profile.value}
                >
                  {profile.name}
                </option>
              ))}
            </CSelect>
          </CFormGroup>
          </CCol>
          <CCol md={3}>
          <CFormGroup>
            <CLabel htmlFor="status">Status</CLabel>
            <CSelect id="status" defaultValue={user.status}>
              {StatusData.map(status => (
                <option
                  key={status.id}
                  value={status.value}
                >
                  {status.name}
                </option>
              ))}
            </CSelect>
          </CFormGroup>
          </CCol>
        </CRow>
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

export default Edit;
