import React, { useState } from 'react';

import StatusData from '../../../../../services/StatusData';
import InputMask from 'react-input-mask';

import {
  CCardBody,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CInputRadio,
  CInvalidFeedback,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilCalendar } from '@coreui/icons';

function Registry({ setUser }) {
  const [expire, setExpire] = useState('never');

  return (
    <CCardBody>
      <CForm className="form-horizontal">
        <CFormGroup row>
          <CCol md={2}>
            <CLabel htmlFor="username">Username*</CLabel>
          </CCol>
          <CCol md={4}>
            <CInput id="username" name="username" onChange={setUser} />
          </CCol>
        </CFormGroup>
      <CFormGroup row>
        <CCol md={6}>
          <CRow>
            <CCol md={4}>
              <CLabel htmlFor="first-name">Full name*</CLabel>
            </CCol>
            <CCol md={8}>
              <CInput id="first-name" placeholder="First name" name="firstname" onChange={setUser} />
            </CCol>
          </CRow>
        </CCol>
        <CCol md={4}>
          <CInput id="lastname" placeholder="Last name" name="lastname" onChange={setUser} />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md={2}>
          <CLabel htmlFor="email">E-mail Address*</CLabel>
        </CCol>
        <CCol md={8}>
          <CInput id="email" />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md={6}>
          <CRow>
            <CCol md={4}>
              <CLabel htmlFor="phone">Phone Number</CLabel>
            </CCol>
            <CCol md={5}>
              <InputMask
                className="form-control"
                id="phone"
                maskPlaceholder="(000) 000-0000"
                mask="(999) 999-9999"
              />
            </CCol>
          </CRow>
        </CCol>
        <CCol md={6}>
          <CRow>
            <CCol md={3}>
              <CLabel htmlFor="mobile-phone">Mobile Phone*</CLabel>
            </CCol>
            <CCol md={5}>
              <InputMask
                className="form-control"
                id="mobile-phone"
                maskPlaceholder="(000) 000-0000"
                mask="(999) 999-9999"
              />
            </CCol>
          </CRow>
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md={2}>
          <CLabel htmlFor="password">Password</CLabel>
        </CCol>
        <CCol md={8}>
          <CInput id="password" type="password" />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md={2}>
          <CLabel htmlFor="confirme-password">Confirm Password</CLabel>
        </CCol>
        <CCol md={8}>
          <CInput invalid id="confirme-password" type="password"  />
          <CInvalidFeedback>
            The password must have at least 8 characteres, 1 capital letter, 1 special character and numbers.
          </CInvalidFeedback>
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md={5}>
          <CRow>
            <CCol md={5}>
              <CLabel>Expire</CLabel>
            </CCol>
            <CCol md={5}>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="radio-yes"
                  name="inline-radios"
                  value="yes"
                  onClick={e => setExpire(e.target.value)}
                  defaultChecked={expire === 'yes'}
                />
                <CLabel variant="custom-checkbox" htmlFor="radio-yes">Yes</CLabel>
              </CFormGroup>
              <CFormGroup variant="custom-radio" inline>
                <CInputRadio
                  custom
                  id="radio-never"
                  name="inline-radios"
                  value="never"
                  onClick={e => setExpire(e.target.value)}
                  defaultChecked={expire === 'never'}
                />
                <CLabel variant="custom-checkbox" htmlFor="radio-never">Never</CLabel>
              </CFormGroup>
            </CCol>
          </CRow>
        </CCol>
        {expire === 'yes' && (
          <CCol md={7}>
            <CRow>
              <CCol md={3} className="text-right">
              <CLabel htmlFor="expire-date">Expire Date</CLabel>
              </CCol>
              <CCol md={4}>
                <InputMask
                  className="form-control"
                  id="expire-date"
                  maskPlaceholder="00/00/0000"
                  mask="99/99/9999"
                />
              </CCol>
              <CCol md={2}>
                <CIcon content={cilCalendar} size="2xl" />
              </CCol>
            </CRow>
          </CCol>
        )}
      </CFormGroup>
      <CFormGroup row>
        <CCol md={2}>
          <CLabel htmlFor="status">Status</CLabel>
        </CCol>
        <CCol md={2}>
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
      </CFormGroup>
      </CForm>
    </CCardBody>
  );
}

export default Registry;
