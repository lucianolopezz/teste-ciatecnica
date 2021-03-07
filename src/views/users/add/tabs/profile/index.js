import React from 'react';

import StatusData from '../../../../../services/StatusData';
import CompanyData from '../../../../../services/CompanyData';

import {
  CCardBody,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
} from '@coreui/react';

function Profile({ user }) {
  return (
    <CCardBody>
      <CForm className="form-horizontal">
        <CFormGroup row>
          <CCol md={2}>
            <CLabel htmlFor="username">Username*</CLabel>
          </CCol>
          <CCol md={4}>
            <CInput id="username" defaultValue={user?.username} />
          </CCol>
        </CFormGroup>
      <CFormGroup row>
        <CCol md={6}>
          <CRow>
            <CCol md={4}>
              <CLabel htmlFor="first-name">Full name*</CLabel>
            </CCol>
            <CCol md={8}>
              <CInput id="first-name" placeholder="First name" defaultValue={user?.firstname} />
            </CCol>
          </CRow>
        </CCol>
        <CCol md={4}>
          <CInput id="lastname" placeholder="Last name" defaultValue={user?.lastname} />
        </CCol>
      </CFormGroup>

      <CFormGroup row>
        <CCol md={6}>
          <CRow>
            <CCol md={4}>
              <CLabel htmlFor="status">Status</CLabel>
            </CCol>
            <CCol md={4}>
              <CSelect id="status">
                {StatusData.map(status => (
                  <option
                    key={status.id}
                    value={status.value}
                  >
                    {status.name}
                  </option>
                ))}
              </CSelect>
            </CCol>
          </CRow>
        </CCol>
        <CCol md={6}>
          <CRow>
            <CCol md={2}>
              <CLabel htmlFor="company">Company</CLabel>
            </CCol>
            <CCol md={4}>
              <CSelect id="company">
                {CompanyData.map(company => (
                  <option
                    key={company.id}
                    value={company.value}
                  >
                    {company.name}
                  </option>
                ))}
              </CSelect>
            </CCol>
          </CRow>
        </CCol>
      </CFormGroup>
      </CForm>
    </CCardBody>
  );
}

export default Profile;
