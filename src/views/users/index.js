import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import {
  CBadge,
  CCard,
  CCardBody,
  CInput,
  CButton,
  CFormGroup,
  CLabel,
  CSelect,
  CCol,
  CDataTable,
  CRow,
  CTooltip,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilFilter, cilPencil, cilTrash } from '@coreui/icons';

import usersData from '../../services/UsersData';
import StatusData from '../../services/StatusData';

import './styles.css';

function Users() {
  const [users, setUsers] = useState(usersData);
  const history = useHistory();

  function changeStatusFilter(status) {
    if(!status) return setUsers(usersData);

    const usersFiltered = usersData.filter(user => user.status === status);

    setUsers(usersFiltered);
  }

  function navigateForUserAdd() {
    history.push('users/add');
  }

  function navigateForUserEdit(id) {
    history.push(`users/edit/${id}`);
  }

  function deleteUser(id) {
    const newUsers = [...users];
    const userIndex = newUsers.findIndex(user => user.id === id);
    newUsers[userIndex].status = 'Inactive';

    setUsers(newUsers);
  }

  return (
    <CRow>
      <CCol md={12}>
        <CCard>
          <CCardBody>
          <CRow>
            <CCol md={6}>
              <CButton
                color="success"
                onClick={navigateForUserAdd}
              >
                <CIcon content={cilPlus} /> Add
              </CButton>
            </CCol>
            <CCol md={3}>
              <CFormGroup className="form-inline filter-status">
                <CLabel htmlFor="ccmonth">Status:</CLabel>
                <CSelect
                  custom
                  name="status"
                  id="ccmonth"
                  onChange={(e) => changeStatusFilter(e.target.value)}
                >
                  <option value="">Select</option>
                  {StatusData.map(status => (
                    <option
                      key={status.id}
                      value={status.name}
                    >
                      {status.name}
                    </option>
                  ))}
                </CSelect>
                  <CIcon content={cilFilter} className="text-primary" />
              </CFormGroup>
            </CCol>
            <CCol md={3}>
              <CFormGroup>
                <CInput placeholder="Search" />
              </CFormGroup>
            </CCol>
          </CRow>
          <CDataTable
            items={users}
            fields={[
              { key: 'name', },
              'username', 'profile', 'status', 'actions'
            ]}
            striped
            itemsPerPage={3}
            pagination
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={item.status === 'Active' ? 'success' : 'secondary'}>
                      {item.status}
                    </CBadge>
                  </td>
                ),
                'actions':
                (item)=>(
                  <td className="td-actions">
                    <CTooltip content="Edit">
                      <CButton
                        color="primary"
                        size="sm"
                        onClick={() => navigateForUserEdit(item.id)}
                      >
                        <CIcon content={cilPencil} />
                      </CButton>
                    </CTooltip>
                    <CTooltip content="Delete">
                      <CButton
                        color="danger"
                        size="sm"
                        onClick={() => deleteUser(item.id)}
                      >
                        <CIcon content={cilTrash} />
                      </CButton>
                    </CTooltip>
                  </td>
                )
            }}
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users
